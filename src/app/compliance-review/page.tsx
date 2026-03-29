import { CallToAction } from '@/components/CallToAction';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Compliance Review - Lush Lawn Care Pros',
    robots: 'noindex, nofollow',
};

export default function ComplianceReviewPage() {
    return (
        <main className="min-h-screen bg-lush-charcoal text-white pt-32 pb-16 px-4 flex flex-col items-center justify-center">
            <div className="max-w-lg w-full flex flex-col items-center bg-gray-900/50 p-6 rounded-2xl border border-gray-800 shadow-2xl">
                <h1 className="text-2xl font-bold mb-6 text-center text-lush-emerald border-b border-gray-800 pb-4 w-full">
                    Compliance Review Form
                </h1>
                <p className="text-sm text-gray-400 mb-8 text-center max-w-md">
                    Form bypass enabled for immediate compliance review. 
                </p>
                <div className="w-full">
                    <CallToAction forceForm={true} />
                </div>
            </div>
        </main>
    );
}
