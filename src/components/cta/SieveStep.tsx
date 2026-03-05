import React from 'react';

interface SieveStepProps {
    step: number;
    setStep: (step: number) => void;
    showBiWeeklyNotice: boolean;
    setShowBiWeeklyNotice: (val: boolean) => void;
    showBudgetExit: boolean;
    setShowBudgetExit: (val: boolean) => void;
    handleFrequency: (isWeekly: boolean) => void;
    handleBudget: (accept: boolean) => void;
    checkBoundary: (e: React.FormEvent) => void;
    streetInputRef: React.RefObject<HTMLInputElement | null>;
    street: string;
    city: string;
    setCity: (val: string) => void;
    zip: string;
    setZip: (val: string) => void;
    error: string;
    loading: boolean;
    setLat: (val: number | null) => void;
    setLng: (val: number | null) => void;
    placeSelectedRef: React.MutableRefObject<boolean>;
}

export const SieveStep: React.FC<SieveStepProps> = ({
    step, setStep, showBiWeeklyNotice, setShowBiWeeklyNotice,
    showBudgetExit, setShowBudgetExit, handleFrequency, handleBudget,
    checkBoundary, streetInputRef, street, city, setCity, zip, setZip,
    error, loading, setLat, setLng, placeSelectedRef
}) => {
    if (step === 1) {
        return (
            <form onSubmit={checkBoundary} className="bg-lush-charcoal p-6 md:p-8 rounded-2xl flex flex-col gap-4 text-left max-w-md border border-white/10 w-full animate-in fade-in zoom-in shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <input
                    type="text"
                    name="website_url"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ display: 'none' }}
                />
                <div className="text-center">
                    <h3 className="text-lush-emerald font-extrabold text-xl text-center mb-4">Check Availability in Your Area</h3>
                    <p className="text-gray-300 text-sm">Our routes are nearly at capacity. To ensure we can provide your property with the Lush standard of care, please provide your address to check current availability in your neighborhood.</p>
                </div>
                <input
                    ref={streetInputRef}
                    defaultValue={street}
                    onChange={() => {
                        setLat(null);
                        setLng(null);
                        placeSelectedRef.current = false;
                    }}
                    placeholder="Street Address (e.g. 1234 W Chinden Blvd)"
                    autoComplete="off"
                    className="bg-white/5 border border-white/10 focus:border-lush-emerald text-white font-medium text-lg placeholder:text-gray-500 px-4 py-3 rounded-xl w-full outline-none"
                    required
                />
                <div className="grid grid-cols-2 gap-4">
                    <input
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        placeholder="City"
                        autoComplete="address-level2"
                        className="bg-white/5 border border-white/10 focus:border-lush-emerald text-white font-medium text-lg placeholder:text-gray-500 px-4 py-3 rounded-xl w-full outline-none"
                        required
                    />
                    <input
                        value={zip}
                        onChange={e => setZip(e.target.value)}
                        placeholder="Zip Code"
                        autoComplete="postal-code"
                        className="bg-white/5 border border-white/10 focus:border-lush-emerald text-white font-medium text-lg placeholder:text-gray-500 px-4 py-3 rounded-xl w-full outline-none"
                        required
                    />
                </div>
                {error && (
                    <p className="text-red-400 text-xs p-3 bg-red-950/60 rounded-lg border border-red-500/40 leading-relaxed">
                        {error}
                    </p>
                )}
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#39B54A] text-lush-charcoal font-black uppercase tracking-tight py-4 rounded-xl shadow-[0_0_25px_rgba(51,255,0,0.4)] hover:brightness-110 hover:scale-[1.02] transition-all disabled:opacity-50 text-xl"
                >
                    {loading ? 'Verifying…' : 'Verify Address'}
                </button>
                <button type="button" onClick={() => setStep(0)} className="text-gray-500 hover:text-white text-sm mt-4 text-center mx-auto block">Cancel</button>
            </form>
        );
    }

    if (step === 2) {
        return (
            <div className="bg-lush-charcoal p-6 md:p-8 rounded-2xl flex flex-col gap-4 text-left max-w-md border border-white/10 w-full animate-in fade-in zoom-in shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="mb-2 p-5 bg-transparent border-2 border-white/20 rounded-xl text-center">
                    <h3 className="text-lush-emerald font-extrabold text-xl text-center mb-4">Great news!</h3>
                    <p className="text-gray-200 text-center leading-relaxed">We have availability in your area. Let&apos;s finish your property audit to lock in your spot.</p>
                </div>
                {!showBiWeeklyNotice ? (
                    <>
                        <div className="text-center">
                            <h3 className="text-lush-emerald font-extrabold text-xl text-center mb-4">Service Frequency</h3>
                            <p className="text-gray-300 text-sm">Which service frequency are you looking for?</p>
                        </div>
                        <button onClick={() => handleFrequency(true)} className="bg-[#39B54A] text-lush-charcoal font-black uppercase tracking-tight py-4 rounded-xl shadow-[0_0_25px_rgba(51,255,0,0.4)] hover:brightness-110 hover:scale-[1.02] transition-all text-xl">Weekly Mowing</button>
                        <button onClick={() => handleFrequency(false)} className="bg-white/5 border border-white/10 focus:border-lush-emerald text-white font-medium text-lg p-3 rounded-xl hover:text-white transition-colors">Bi-Weekly / One-Time</button>
                    </>
                ) : (
                    <div className="flex flex-col gap-4 text-center">
                        <h3 className="text-lush-emerald font-extrabold text-xl text-center mb-4">Weekly Mowing Only</h3>
                        <p className="text-gray-300 text-sm">Lush focuses exclusively on Weekly Mowing to maintain elite turf health. You may continue, but please note we only provide quotes for weekly service.</p>
                        <button onClick={() => { setStep(3); setShowBiWeeklyNotice(false); }} className="bg-[#39B54A] text-lush-charcoal font-black uppercase tracking-tight py-4 rounded-xl shadow-[0_0_25px_rgba(51,255,0,0.4)] hover:brightness-110 hover:scale-[1.02] transition-all text-xl mt-2">Continue</button>
                        <button onClick={() => setShowBiWeeklyNotice(false)} className="text-gray-500 hover:text-white text-sm mt-4 text-center mx-auto block">Go Back</button>
                    </div>
                )}
            </div>
        );
    }

    if (step === 3) {
        return (
            <div className="bg-lush-charcoal p-6 md:p-8 rounded-2xl flex flex-col gap-4 text-left max-w-md border border-white/10 w-full animate-in fade-in zoom-in shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {!showBudgetExit ? (
                    <>
                        <div className="text-center">
                            <h3 className="text-lush-emerald font-extrabold text-xl text-center mb-4">Budget Alignment</h3>
                            <p className="text-gray-300 text-sm">Our routes are optimized for elite, weekly turf care. Our minimum investment for this dedicated weekly mowing service is <strong className="text-lush-emerald">$40</strong> per stop. Does this align with your property goals?</p>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => handleBudget(true)} className="flex-1 bg-[#39B54A] text-lush-charcoal font-black uppercase tracking-tight py-4 rounded-xl shadow-[0_0_25px_rgba(51,255,0,0.4)] hover:brightness-110 hover:scale-[1.02] transition-all text-xl">Yes</button>
                            <button onClick={() => handleBudget(false)} className="flex-1 bg-white/5 border border-white/10 focus:border-lush-emerald text-white font-medium text-lg p-3 rounded-xl hover:text-white transition-colors">No</button>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col gap-4 text-center">
                        <h3 className="text-lush-emerald font-extrabold text-xl text-center mb-4">Thank You</h3>
                        <p className="text-gray-400 text-sm">We appreciate your honesty. Based on your property goals, we may not be the perfect fit at this time. We wish you the best in your search for the right lawn care partner!</p>
                        <button onClick={() => { setStep(0); setShowBudgetExit(false); }} className="text-gray-500 hover:text-white text-sm mt-4 text-center mx-auto block">Return to Home</button>
                    </div>
                )}
            </div>
        );
    }

    return null;
};
