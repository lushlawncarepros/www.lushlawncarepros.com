import React from 'react';
import { ServiceMenu } from './ServiceMenu';
import { VisualAudit } from './VisualAudit';

interface LeadFormProps {
    isWaitlist: boolean;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    loading: boolean;
    error: string;
    email: string;
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    emailError: string;
    phone: string;
    handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    phoneError: string;
    setStep: (step: number) => void;
    selectedServices: string[];
    toggleService: (service: string) => void;
    additionalServicesList: string[];
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fileUrlsPreview: { file: File, url: string }[];
    removeFile: (fileToRemove: File) => void;
    uploadProgress: number;
    files: File[];
}

export const LeadForm: React.FC<LeadFormProps> = ({
    isWaitlist, handleSubmit, loading, error, email, handleEmailChange, emailError,
    phone, handlePhoneChange, phoneError, setStep, selectedServices,
    toggleService, additionalServicesList, handleFileChange, fileUrlsPreview,
    removeFile, uploadProgress, files
}) => {
    return (
        <form onSubmit={handleSubmit} className="bg-lush-charcoal p-6 md:p-8 rounded-2xl flex flex-col gap-4 text-left max-w-md w-full border border-white/10 animate-in fade-in zoom-in shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h3 className="text-lush-emerald font-extrabold text-xl text-center mb-4">{isWaitlist ? "Join Priority Waitlist" : "Precision Quote Request"}</h3>
            {isWaitlist && (
                <div className="bg-transparent border-2 border-white/20 p-5 rounded-xl text-center mb-4">
                    <p className="text-gray-200 text-center leading-relaxed">Our route in your area is currently at full capacity. Join our Priority Waitlist, and we will alert you the moment a spot opens in your neighborhood.</p>
                </div>
            )}

            <div className="grid grid-cols-2 gap-4 mt-2">
                <input name="firstName" placeholder="First Name" autoComplete="given-name" className="bg-white/5 border border-white/10 focus:border-lush-emerald text-white font-medium text-lg placeholder:text-gray-500 px-4 py-3 rounded-xl w-full outline-none" required />
                <input name="lastName" placeholder="Last Name" autoComplete="family-name" className="bg-white/5 border border-white/10 focus:border-lush-emerald text-white font-medium text-lg placeholder:text-gray-500 px-4 py-3 rounded-xl w-full outline-none" required />
            </div>

            <div className="flex flex-col gap-1">
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                    autoComplete="email"
                    className={`bg-white/5 border focus:border-lush-emerald text-white font-medium text-lg placeholder:text-gray-500 px-4 py-3 rounded-xl w-full outline-none ${emailError ? 'border-red-500' : 'border-white/10'}`}
                    required
                />
                {emailError && <span className="text-red-500 text-xs ml-1">{emailError}</span>}
            </div>

            {!isWaitlist && (
                <div className="flex flex-col gap-1">
                    <input
                        name="phone"
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="Phone Number (e.g. 208-555-0123)"
                        autoComplete="tel"
                        className={`bg-white/5 border focus:border-lush-emerald text-white font-medium text-lg placeholder:text-gray-500 px-4 py-3 rounded-xl w-full outline-none ${phoneError ? 'border-red-500' : 'border-white/10'}`}
                        required
                    />
                    {phoneError && <span className="text-red-500 text-xs ml-1">{phoneError}</span>}
                </div>
            )}

            {!isWaitlist && (
                <select name="source" className="appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2339B54A%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:1.2em_1.2em] pr-12 transition-all bg-white/5 border border-white/10 focus:border-lush-emerald focus:ring-1 focus:ring-lush-emerald/50 text-white font-medium text-lg px-4 py-3 rounded-xl w-full outline-none [&>option]:bg-lush-charcoal [&>option]:text-white">
                    <option>How did you hear about us?</option>
                    <option>Search Engine</option>
                    <option>Referral</option>
                    <option>Truck/Trailer</option>
                    <option>Flyer</option>
                </select>
            )}

            {!isWaitlist && (
                <textarea name="comments" placeholder="Comments (Pets, start date, access, etc.)" className="bg-white/5 border border-white/10 focus:border-lush-emerald text-white font-medium text-lg placeholder:text-gray-500 px-4 py-3 rounded-xl w-full outline-none h-24" />
            )}

            <ServiceMenu
                isWaitlist={isWaitlist}
                selectedServices={selectedServices}
                toggleService={toggleService}
                additionalServicesList={additionalServicesList}
            />

            <VisualAudit
                isWaitlist={isWaitlist}
                handleFileChange={handleFileChange}
                fileUrlsPreview={fileUrlsPreview}
                removeFile={removeFile}
            />

            <div className="flex flex-col gap-2 mt-4">
                {loading && files.length > 0 && uploadProgress > 0 && (
                    <div className="flex flex-col gap-1 w-full my-2">
                        <div className="text-lush-emerald text-xs font-bold text-center">Beaming Visual Audit: {uploadProgress}%</div>
                        <div className="w-full bg-lush-charcoal rounded-full h-2 overflow-hidden border border-lush-emerald/30">
                            <div className="bg-lush-emerald h-2 rounded-full transition-all duration-300" style={{ width: `${uploadProgress}%` }}></div>
                        </div>
                        <div className="text-[10px] text-gray-500 text-center animate-pulse">Syncing with Satellite: Do not refresh page</div>
                    </div>
                )}
                {error && <p className="text-red-500 text-xs p-2 bg-red-900/30 rounded border border-red-500/50">{error}</p>}
                <button type="submit" disabled={loading} className="bg-[#39B54A] text-lush-charcoal font-black uppercase tracking-tight py-4 rounded-xl shadow-[0_0_25px_rgba(51,255,0,0.4)] hover:brightness-110 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50 text-xl w-full border-none">
                    {loading ? 'Sending...' : 'Submit Quote'}
                </button>
            </div>
            <button type="button" onClick={() => setStep(0)} className="text-gray-500 hover:text-white text-sm mt-4 text-center mx-auto block">Cancel</button>
        </form>
    );
};
