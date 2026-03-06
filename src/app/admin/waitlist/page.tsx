"use client";

import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, Timestamp, deleteDoc, doc } from 'firebase/firestore';
import { getLushDb, appId } from '@/lib/firebase';

interface Lead {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    street: string;
    city: string;
    zip: string;
    createdAt: Date | null;
    [key: string]: any;
}

export default function WaitlistDashboard() {
    const [pin, setPin] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pinError, setPinError] = useState('');

    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Deletion State
    const [leadToDelete, setLeadToDelete] = useState<Lead | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const [sortField, setSortField] = useState<keyof Lead>('createdAt');
    const [sortAsc, setSortAsc] = useState(false);

    const handlePinSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (pin === '3842') {
            setIsAuthenticated(true);
            setPinError('');
        } else {
            setPinError('Incorrect PIN');
        }
    };

    useEffect(() => {
        if (!isAuthenticated) return;

        const fetchLeads = async () => {
            setLoading(true);
            try {
                const db = getLushDb();
                if (!db) throw new Error("Database not initialized");

                const leadsRef = collection(db, 'artifacts', appId, 'public', 'data', 'leads');
                const q = query(leadsRef, where('isWaitlist', '==', true));

                const snapshot = await getDocs(q);
                const fetchedLeads: Lead[] = [];

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    let parsedDate = null;

                    if (data.createdAt?.toDate) {
                        parsedDate = data.createdAt.toDate();
                    } else if (data.createdAt?.seconds) {
                        parsedDate = new Date(data.createdAt.seconds * 1000);
                    } else if (data.createdAt) {
                        parsedDate = new Date(data.createdAt);
                    }

                    fetchedLeads.push({
                        id: doc.id,
                        firstName: data.firstName || '',
                        lastName: data.lastName || '',
                        email: data.email || '',
                        phone: data.phone || '',
                        address: data.address || '',
                        street: data.street || '',
                        city: data.city || '',
                        zip: data.zip || '',
                        createdAt: parsedDate instanceof Date && !isNaN(parsedDate.getTime()) ? parsedDate : null,
                        ...data
                    });
                });

                // Initialize sorting (newest first by default)
                fetchedLeads.sort((a, b) => {
                    const dateA = a.createdAt instanceof Date ? a.createdAt.getTime() : 0;
                    const dateB = b.createdAt instanceof Date ? b.createdAt.getTime() : 0;
                    return dateB - dateA;
                });

                setLeads(fetchedLeads);
            } catch (err: any) {
                console.error("Error fetching leads:", err);
                setError("Failed to load waitlist data. Check connection.");
            } finally {
                setLoading(false);
            }
        };

        fetchLeads();
    }, [isAuthenticated]);

    const handleSort = (field: keyof Lead) => {
        const isAsc = sortField === field ? !sortAsc : true;
        setSortField(field);
        setSortAsc(isAsc);

        const sortedLeads = [...leads].sort((a, b) => {
            let valA = a[field];
            let valB = b[field];

            // Handle nulls/undef
            if (valA == null) valA = '';
            if (valB == null) valB = '';

            if (valA < valB) return isAsc ? -1 : 1;
            if (valA > valB) return isAsc ? 1 : -1;
            return 0;
        });

        setLeads(sortedLeads);
    };

    const downloadCSV = () => {
        if (leads.length === 0) return;

        const headers = ['Date', 'First Name', 'Last Name', 'Email', 'Phone', 'Address', 'City', 'Zip Code'];
        const rows = leads.map(lead => {
            const dateStr = lead.createdAt instanceof Date ? lead.createdAt.toLocaleDateString() : 'N/A';
            return [
                `"${dateStr}"`,
                `"${lead.firstName}"`,
                `"${lead.lastName}"`,
                `"${lead.email}"`,
                `"${lead.phone}"`,
                `"${lead.address}"`,
                `"${lead.city}"`,
                `"${lead.zip}"`
            ].join(',');
        });

        const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows].join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `lush_waitlist_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const confirmDelete = async () => {
        if (!leadToDelete) return;

        setIsDeleting(true);
        setError('');

        try {
            const db = getLushDb();
            if (!db) throw new Error("Database not initialized");

            const leadRef = doc(db, 'artifacts', appId, 'public', 'data', 'leads', leadToDelete.id);
            await deleteDoc(leadRef);

            // Update UI State
            setLeads(prevLeads => prevLeads.filter(lead => lead.id !== leadToDelete.id));
            setLeadToDelete(null);

        } catch (err: any) {
            console.error("Error deleting lead:", err);
            setError("Failed to delete lead. Check connection.");
        } finally {
            setIsDeleting(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl max-w-sm w-full text-center">
                    <h1 className="text-2xl font-bold text-white mb-6">Restricted Area</h1>
                    <form onSubmit={handlePinSubmit} className="flex flex-col gap-4">
                        <input
                            type="password"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            placeholder="Enter PIN"
                            className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-center text-lg tracking-[0.5em] focus:outline-none focus:border-lush-emerald"
                            autoFocus
                        />
                        {pinError && <p className="text-red-500 text-sm">{pinError}</p>}
                        <button
                            type="submit"
                            className="mt-2 bg-lush-emerald text-lush-slate font-bold py-3 rounded-lg hover:bg-[#32a042] transition-colors"
                        >
                            Access Dashboard
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="py-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-white">Waitlist Dashboard</h1>
                    <p className="text-gray-400 mt-1">Found {leads.length} out-of-bounds leads currently waiting for service expansion.</p>
                </div>
                <button
                    type="button"
                    onClick={downloadCSV}
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 px-6 py-2.5 rounded-lg font-medium transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Export CSV
                </button>
            </div>

            {error && (
                <div className="bg-red-900/30 border border-red-500 text-red-200 p-4 rounded-xl mb-6">
                    {error}
                </div>
            )}

            <div className="bg-gray-900 rounded-2xl border border-gray-800 shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-300">
                        <thead className="text-xs uppercase bg-gray-800/80 text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-4 cursor-pointer hover:text-white" onClick={() => handleSort('createdAt')}>
                                    Date {sortField === 'createdAt' && (sortAsc ? '↑' : '↓')}
                                </th>
                                <th scope="col" className="px-6 py-4 cursor-pointer hover:text-white" onClick={() => handleSort('firstName')}>
                                    Name {sortField === 'firstName' && (sortAsc ? '↑' : '↓')}
                                </th>
                                <th scope="col" className="px-6 py-4 cursor-pointer hover:text-white" onClick={() => handleSort('address')}>
                                    Address {sortField === 'address' && (sortAsc ? '↑' : '↓')}
                                </th>
                                <th scope="col" className="px-6 py-4 cursor-pointer hover:text-white" onClick={() => handleSort('city')}>
                                    City {sortField === 'city' && (sortAsc ? '↑' : '↓')}
                                </th>
                                <th scope="col" className="px-6 py-4 cursor-pointer hover:text-white text-lush-emerald font-bold" onClick={() => handleSort('zip')}>
                                    Zip Code {sortField === 'zip' && (sortAsc ? '↑' : '↓')}
                                </th>
                                <th scope="col" className="px-6 py-4 cursor-pointer hover:text-white" onClick={() => handleSort('phone')}>
                                    Phone {sortField === 'phone' && (sortAsc ? '↑' : '↓')}
                                </th>
                                <th scope="col" className="px-6 py-4 cursor-pointer hover:text-white" onClick={() => handleSort('email')}>
                                    Email {sortField === 'email' && (sortAsc ? '↑' : '↓')}
                                </th>
                                <th scope="col" className="px-6 py-4 text-right">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={7} className="px-6 py-8 text-center text-gray-400">Loading waitlist data...</td>
                                </tr>
                            ) : leads.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="px-6 py-8 text-center text-gray-400">No waitlist entries found.</td>
                                </tr>
                            ) : (
                                leads.map((lead) => (
                                    <tr key={lead.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {lead.createdAt instanceof Date ? lead.createdAt.toLocaleDateString() : 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-white">
                                            {lead.firstName} {lead.lastName}
                                        </td>
                                        <td className="px-6 py-4 max-w-[200px] truncate" title={lead.address}>
                                            {lead.address}
                                        </td>
                                        <td className="px-6 py-4">
                                            {lead.city}
                                        </td>
                                        <td className="px-6 py-4 font-bold text-lush-emerald">
                                            {lead.zip}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {lead.phone}
                                        </td>
                                        <td className="px-6 py-4">
                                            {lead.email}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => setLeadToDelete(lead)}
                                                className="text-red-500 hover:text-red-400 font-bold px-2 py-1 rounded hover:bg-red-500/10 transition-colors"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {leadToDelete && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-gray-900 border border-red-900/50 rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in-95 duration-200">
                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            Delete Waitlist Entry?
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Are you sure you want to permanently delete <strong className="text-white">{leadToDelete.firstName} {leadToDelete.lastName}</strong> from the waitlist? This action cannot be undone.
                        </p>
                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={() => setLeadToDelete(null)}
                                disabled={isDeleting}
                                className="px-5 py-2.5 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                disabled={isDeleting}
                                className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold transition-colors shadow-lg shadow-red-900/20 disabled:opacity-50 flex items-center gap-2"
                            >
                                {isDeleting ? 'Deleting...' : 'Yes, Delete Entry'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
