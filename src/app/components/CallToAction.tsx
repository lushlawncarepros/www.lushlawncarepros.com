"use client";

import { useState } from "react";
import { getLushDb, getLushStorage } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const db = getLushDb();
const storage = getLushStorage();

export default function CallToAction() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [isWaitlist, setIsWaitlist] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form Data
    const [address, setAddress] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [zipCode, setZipCode] = useState(""); // For waitlist
    const [source, setSource] = useState("");
    const [details, setDetails] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const handleClose = () => {
        if (isSubmitting) return; // Prevent close while submitting
        setIsModalOpen(false);
        setTimeout(() => {
            setStep(1);
            setIsWaitlist(false);
            setAddress("");
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setZipCode("");
            setSource("");
            setDetails("");
            setFile(null);
        }, 300);
    };

    const handleNextStep = () => {
        setStep((prev) => prev + 1);
    };

    const checkBoundary = (e: React.FormEvent) => {
        e.preventDefault();
        if (!address) return;

        // Simple mock logic for boundary. In production, use Google Maps API or strict Zip check.
        // For now, if they type "Nampa", "Caldwell", "Kuna", we put them on the waitlist.
        const outOfBoundsRegex = /nampa|caldwell|kuna|star|middleton/i;
        if (outOfBoundsRegex.test(address)) {
            setIsWaitlist(true);
        } else {
            setIsWaitlist(false);
            handleNextStep();
        }
    };

    const submitWaitlist = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await addDoc(collection(db, "waitlist"), {
                firstName,
                lastName,
                email,
                zipCode,
                address,
                timestamp: serverTimestamp(),
            });
            setStep(6); // Success
        } catch (error) {
            console.error("Error adding to waitlist", error);
            alert("Failed to join waitlist. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const submitFinalForm = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            let fileUrl = "";
            if (file) {
                // Upload file to Firebase Storage
                const fileRef = ref(storage, `leads/${Date.now()}_${file.name}`);
                const snapshot = await uploadBytes(fileRef, file);
                fileUrl = await getDownloadURL(snapshot.ref);
            }

            await addDoc(collection(db, "leads"), {
                firstName,
                lastName,
                email,
                phone,
                address,
                source,
                details,
                fileUrl,
                timestamp: serverTimestamp(),
            });
            setStep(6); // Success
        } catch (error) {
            console.error("Error submitting lead:", error);
            alert("Verification failed. Please ensure Firebase configuration is set or try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-24 relative z-20">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-lush-green hover:bg-lush-dark-green cursor-pointer text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-lush-green/50 transform hover:-translate-y-1"
                >
                    Get a Free Quote
                </button>
                <button className="bg-transparent border-2 border-lush-green cursor-pointer text-lush-green hover:bg-lush-green/10 px-8 py-4 rounded-full text-lg font-bold transition-all">
                    View Our Services
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={handleClose}
                    />
                    <div className="relative bg-lush-charcoal border border-lush-green/40 shadow-2xl rounded-2xl w-full max-w-lg overflow-y-auto max-h-[90vh] flex flex-col p-8 z-10 animate-in fade-in zoom-in duration-200">
                        {/* Modal Header */}
                        <div className="w-full flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-white">
                                {step < 5 && !isWaitlist
                                    ? `Qualification Step ${step}/5`
                                    : step === 5
                                        ? "Property Audit"
                                        : "Qualification Complete"}
                            </h3>
                            {!isSubmitting && (
                                <button
                                    onClick={handleClose}
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            )}
                        </div>

                        {/* Step 1: Boundary Check */}
                        {step === 1 && !isWaitlist && (
                            <form onSubmit={checkBoundary} className="w-full flex flex-col">
                                <h4 className="text-xl font-semibold text-lush-green mb-2">
                                    Boundary Check
                                </h4>
                                <p className="text-gray-300 mb-6 text-sm">
                                    We guarantee 100% reliability because we strictly operate within &quot;The Lush Box&quot; (Eagle, Boise, Meridian Core). Please enter your property address to check eligibility.
                                </p>
                                <input
                                    type="text"
                                    required
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="e.g. 1234 W Chinden Blvd, Meridian"
                                    className="w-full px-4 py-3 rounded-lg bg-lush-dark-charcoal border border-gray-600 focus:border-lush-green focus:outline-none text-white mb-6"
                                />
                                <button
                                    type="submit"
                                    className="w-full px-4 py-4 cursor-pointer rounded-xl font-bold text-white bg-lush-green hover:bg-lush-dark-green transition-all shadow-md"
                                >
                                    Verify Address
                                </button>
                            </form>
                        )}

                        {/* Waitlist Fallback */}
                        {isWaitlist && step === 1 && (
                            <form onSubmit={submitWaitlist} className="w-full flex flex-col">
                                <h4 className="text-xl font-semibold text-amber-500 mb-2">
                                    Neighborhood Expansion Waitlist
                                </h4>
                                <p className="text-gray-300 mb-6 text-sm">
                                    We aren&apos;t in your specific neighborhood yet, but we are expanding fast! Join our priority waitlist to be the first notified when we bring precision care to your area.
                                </p>
                                <div className="flex gap-4 mb-4">
                                    <input
                                        type="text"
                                        required
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        placeholder="First Name"
                                        className="w-full px-4 py-3 rounded-lg bg-lush-dark-charcoal border border-gray-600 focus:border-lush-green focus:outline-none text-white"
                                    />
                                    <input
                                        type="text"
                                        required
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        placeholder="Last Name"
                                        className="w-full px-4 py-3 rounded-lg bg-lush-dark-charcoal border border-gray-600 focus:border-lush-green focus:outline-none text-white"
                                    />
                                </div>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 rounded-lg bg-lush-dark-charcoal border border-gray-600 focus:border-lush-green focus:outline-none text-white mb-4"
                                />
                                <input
                                    type="text"
                                    required
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                    placeholder="Zip Code"
                                    className="w-full px-4 py-3 rounded-lg bg-lush-dark-charcoal border border-gray-600 focus:border-lush-green focus:outline-none text-white mb-6"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-4 disabled:opacity-50 cursor-pointer rounded-xl font-bold text-black bg-white hover:bg-gray-200 transition-all shadow-md"
                                >
                                    {isSubmitting ? "Submitting..." : "Join Priority Waitlist"}
                                </button>
                            </form>
                        )}

                        {/* Step 2: Frequency Check */}
                        {step === 2 && (
                            <div className="w-full text-center">
                                <h4 className="text-xl font-semibold text-lush-green mb-4">
                                    Which service frequency are you looking for?
                                </h4>
                                <div className="flex flex-col gap-4 w-full">
                                    <button
                                        onClick={handleNextStep}
                                        className="w-full px-4 py-4 cursor-pointer rounded-xl font-bold text-white bg-lush-green hover:bg-lush-dark-green transition-all shadow-md"
                                    >
                                        Weekly Precision Mowing
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (confirm("To ensure the health and $90/hr aesthetic of your turf, our system is optimized for Weekly Precision only. Would you like to proceed with a Weekly quote?")) {
                                                handleNextStep();
                                            } else {
                                                handleClose();
                                            }
                                        }}
                                        className="w-full px-4 py-3 cursor-pointer rounded-xl font-medium text-gray-400 border border-gray-600 hover:border-gray-400 hover:text-gray-200 transition-all"
                                    >
                                        Bi-Weekly / One-Time
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Budget Check */}
                        {step === 3 && (
                            <div className="w-full text-center">
                                <h4 className="text-xl font-semibold text-lush-green mb-4">
                                    Budget Alignment
                                </h4>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    Our precision service is billed at a <strong className="text-white">$90/hr</strong> company man-hour rate with a <strong className="text-white">$45 minimum</strong> per visit. Does this align with your property goals?
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 w-full">
                                    <button
                                        onClick={handleNextStep}
                                        className="flex-1 px-4 py-4 cursor-pointer rounded-xl font-bold text-white bg-lush-green hover:bg-lush-dark-green transition-all shadow-md"
                                    >
                                        Yes
                                    </button>
                                    <button
                                        onClick={handleClose}
                                        className="flex-1 px-4 py-3 cursor-pointer rounded-xl font-medium text-gray-400 border border-gray-600 hover:border-gray-400 hover:text-gray-200 transition-all"
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Comprehensive Data Form */}
                        {step === 4 && (
                            <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }} className="w-full flex flex-col">
                                <h4 className="text-xl font-semibold text-lush-green mb-4">
                                    Contact Details
                                </h4>
                                <div className="flex gap-4 mb-4">
                                    <input
                                        type="text"
                                        required
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        placeholder="First Name"
                                        className="w-full px-4 py-3 rounded-lg bg-lush-dark-charcoal border border-gray-600 focus:border-lush-green focus:outline-none text-white"
                                    />
                                    <input
                                        type="text"
                                        required
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        placeholder="Last Name"
                                        className="w-full px-4 py-3 rounded-lg bg-lush-dark-charcoal border border-gray-600 focus:border-lush-green focus:outline-none text-white"
                                    />
                                </div>
                                <div className="flex gap-4 mb-4">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        className="w-full px-4 py-3 rounded-lg bg-lush-dark-charcoal border border-gray-600 focus:border-lush-green focus:outline-none text-white"
                                    />
                                    <input
                                        type="tel"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Phone"
                                        className="w-full px-4 py-3 rounded-lg bg-lush-dark-charcoal border border-gray-600 focus:border-lush-green focus:outline-none text-white"
                                    />
                                </div>
                                <select
                                    required
                                    value={source}
                                    onChange={(e) => setSource(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg bg-lush-dark-charcoal border border-gray-600 focus:border-lush-green focus:outline-none text-white mb-4"
                                >
                                    <option value="" disabled>How did you hear about us?</option>
                                    <option value="Search Engine">Search Engine</option>
                                    <option value="Referral">Referral</option>
                                    <option value="Truck/Trailer">Truck/Trailer</option>
                                    <option value="Flyer">Flyer</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Other">Other</option>
                                </select>
                                <textarea
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
                                    rows={3}
                                    placeholder="e.g., Desired start date, pets on property, special access instructions, etc."
                                    className="w-full px-4 py-3 rounded-lg bg-lush-dark-charcoal border border-gray-600 focus:border-lush-green focus:outline-none text-white mb-6 resize-none"
                                />
                                <button
                                    type="submit"
                                    className="w-full px-4 py-4 cursor-pointer rounded-xl font-bold text-white bg-lush-green hover:bg-lush-dark-green transition-all shadow-md"
                                >
                                    Continue
                                </button>
                            </form>
                        )}

                        {/* Step 5: Visual Property Audit (File Upload) */}
                        {step === 5 && (
                            <form onSubmit={submitFinalForm} className="w-full flex flex-col text-center">
                                <h4 className="text-xl font-semibold text-lush-green mb-2">
                                    Visual Property Audit
                                </h4>
                                <p className="text-gray-300 mb-6 text-sm">
                                    Help Ethan provide a more precise estimate by showing us the backyard, gates, and any slopes.
                                </p>

                                <div className="w-full border-2 border-dashed border-lush-green/50 rounded-xl p-8 mb-6 bg-lush-dark-charcoal flex flex-col items-center justify-center relative cursor-pointer hover:bg-lush-green/5 transition-colors">
                                    <input
                                        type="file"
                                        accept="image/png, image/jpeg, video/mp4"
                                        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-lush-green mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                    </svg>
                                    <span className="text-white font-medium mb-1">
                                        {file ? file.name : "Upload a Photo or Short Video"}
                                    </span>
                                    <span className="text-gray-400 text-xs text-center">
                                        Support: Images (.jpg, .png) and Video (.mp4)
                                    </span>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setStep(4)}
                                        className="flex-1 px-4 py-4 cursor-pointer rounded-xl font-medium text-gray-400 bg-black/20 hover:bg-black/40 transition-all"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-[2] px-4 py-4 disabled:opacity-50 cursor-pointer rounded-xl font-bold text-white bg-lush-green hover:bg-lush-dark-green transition-all shadow-md"
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit for Estimate"}
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* Step 6: Success Message */}
                        {step === 6 && (
                            <div className="text-center w-full py-4 relative">
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-lush-green/20 rounded-full blur-[60px]" />
                                <div className="w-20 h-20 rounded-full bg-lush-green/20 border-2 border-lush-green/50 text-lush-green mx-auto flex items-center justify-center mb-6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2.5}
                                        stroke="currentColor"
                                        className="w-10 h-10"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4 relative z-10">
                                    {isWaitlist ? "Added to Waitlist!" : "Success!"}
                                </h4>
                                <p className="text-lg text-gray-300 mb-8 mx-auto relative z-10 leading-relaxed">
                                    {isWaitlist
                                        ? "We'll notify you as soon as our precision service zone expands to your area!"
                                        : <>Ethan is performing a Satellite <strong className="text-white">Precision Check</strong> using your data now. Expect your custom quote via email within 24 hours.</>}
                                </p>
                                <button
                                    onClick={handleClose}
                                    className="w-full px-4 py-4 cursor-pointer rounded-xl font-bold text-lush-charcoal bg-white hover:bg-gray-200 transition-all relative z-10"
                                >
                                    Return to Home
                                </button>
                            </div>
                        )}

                        {/* Progress indicators */}
                        {step < 6 && !isWaitlist && (
                            <div className="w-full mt-6 flex justify-center gap-2">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div
                                        key={i}
                                        className={`h-2 rounded-full transition-all duration-300 ${i === step
                                            ? "w-8 bg-lush-green"
                                            : i < step
                                                ? "w-4 bg-lush-green/50"
                                                : "w-4 bg-gray-700"
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
