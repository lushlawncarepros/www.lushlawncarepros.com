import React from 'react';

interface SuccessScreenProps {
    isWaitlist: boolean;
    successRef: React.RefObject<HTMLDivElement | null>;
    error?: string;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({ isWaitlist, successRef, error = "" }) => {
    return (
        <div ref={successRef} className="p-6 md:p-8 bg-lush-charcoal rounded-2xl border border-white/10 animate-in fade-in zoom-in shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-md text-center">
            <h3 className="text-lush-emerald font-extrabold text-2xl text-center mb-4">
                {isWaitlist ? "Added to waitlist!" : "Quote Submission Successful"}
            </h3>
            <p className="text-gray-200">
                {isWaitlist ? "We'll alert you when we have availability." : "Our Team is performing a satellite audit of your property now. Check your email soon—your custom quote will usually arrive within 24 hours."}
            </p>

            {error && (
                <div className="mt-4 p-3 bg-red-900/30 rounded border border-red-500/50">
                    <p className="text-red-400 text-xs">{error}</p>
                </div>
            )}
        </div>
    );
};
