import React from 'react';
import Image from 'next/image';
import { CallToAction } from '@/components/CallToAction';
import { Navigation } from '@/components/Navigation';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Bed & Hardscape Weed Control | Property Maintenance',
    description: 'Targeted weed spray for beds and hardscapes. Add-on service for weekly mowing clients — no trip fee since we are already on-site.',
  alternates: { canonical: '/services/weed-control' }
};

export default function BedWeeding() {
    const features = [
        {
            title: "Targeted Weed Spray",
            desc: "Every bed, border, and hardscape edge gets sprayed with a targeted weed killer that eliminates both broadleaf weeds and grasses on contact.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
        },
        {
            title: "Weekly Visual Inspections",
            desc: "Because we're already on your property every week for mowing, we visually inspect every treated area, re-spray any missed weeds that are still green, and physically remove larger dead weeds.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
        },
        {
            title: "Broadleaf & Grass Killer",
            desc: "Our targeted formula handles both broadleaf weeds and unwanted grasses — one application covers the full spectrum of what grows where it shouldn't.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            title: "Crack & Joint Treatment",
            desc: "Driveway expansion joints, patio seams, and walkway cracks get the same targeted spray — weeds in hardscape areas are eliminated at the source.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
        },
        {
            title: "No Trip Fee",
            desc: "Because we're already on your property for weekly mowing, there's no separate trip charge — reducing the cost compared to standalone weed control services.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: "Spray, Remove & Repeat",
            desc: "Spray on treatment week, inspect the following week, re-spray anything still green, and physically pull dead weeds that are an eyesore. Consistent and thorough.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-[#36454F] text-white font-sans overflow-x-hidden relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[120px]" />
                <div className="absolute bottom-[5%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/5 blur-[100px]" />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">
                <div className="w-full bg-emerald-900/40 border-b border-emerald-600/30 py-4 px-4 text-center">
                    <p className="text-sm md:text-base font-bold text-emerald-500 tracking-wide uppercase max-w-2xl mx-auto">
                        EXCLUSIVELY FOR WEEKLY MOWING CLIENTS.
                    </p>
                    <p className="text-xs md:text-sm text-gray-300 mt-1 max-w-3xl mx-auto">
                        To ensure total property harmony, these specialized services are reserved for our weekly maintenance clients.
                    </p>
                </div>

                <Navigation />



                {/* ── Hero ── */}
                <section className="px-4 pb-4 pt-2 text-center max-w-4xl mx-auto flex flex-col items-center mt-2">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        <span className="text-emerald-500">Bed & Hardscape</span> Weed Control
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                        We spray all bed and hardscape weeds with a <strong className="text-white">targeted weed killer</strong> that eliminates both broadleaf and grasses. On follow-up visits, we inspect, re-spray anything still green, and physically remove larger dead weeds so your property always looks clean.
                    </p>
                    <p className="text-lg text-emerald-500 font-semibold mb-12 max-w-2xl mx-auto">
                        Add-on service for weekly mowing clients. No trip fee — we&apos;re already there.
                    </p>
                    <CallToAction redirectOnQuote={true} />
                    <div className="mt-10 flex justify-center w-full">
                        <div className="relative w-full max-w-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-700/60">
                            <Image
                                src="/Images/bed-weed-control.png"
                                alt="Lush Lawn Care Pros technician spraying bed weed control at a Boise property"
                                width={400}
                                height={267}
                                sizes="(max-width: 640px) 100vw, 400px"
                                className="object-cover w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* ── How It Works: Spray → Inspect → Repeat ── */}
                <section className="px-4 py-16 max-w-6xl mx-auto w-full">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold mb-4">Spray, <span className="text-emerald-500">Inspect, Repeat</span></h2>
                        <p className="text-gray-400 max-w-xl mx-auto">A simple two-step cycle that keeps beds and hardscapes weed-free all season long.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Step 1: Spray */}
                        <div className="bg-gray-800/50 border border-gray-700 hover:border-emerald-500/50 rounded-2xl p-8 transition-all hover:shadow-[0_0_30px_rgba(57,181,74,0.12)] group">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-14 h-14 rounded-xl bg-emerald-500/15 flex items-center justify-center group-hover:bg-emerald-500/25 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </span>
                                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-500 transition-colors">Step 1: Targeted Spray</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                On treatment visits, we spray every bed, border, and hardscape area with a targeted weed killer formulated to eliminate both broadleaf weeds and grasses:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-400 text-sm"><strong className="text-white">Landscape beds</strong> — mulch areas, tree rings, flower borders, and ground cover zones</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-400 text-sm"><strong className="text-white">Hardscape surfaces</strong> — driveway cracks, patio joints, walkway seams, and curb edges</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-400 text-sm"><strong className="text-white">Full-spectrum formula</strong> — kills both broadleaf weeds and unwanted grasses in one pass</span>
                                </li>
                            </ul>
                        </div>

                        {/* Step 2: Inspect & Follow Up */}
                        <div className="bg-gray-800/50 border border-gray-700 hover:border-emerald-500/50 rounded-2xl p-8 transition-all hover:shadow-[0_0_30px_rgba(57,181,74,0.12)] group">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-14 h-14 rounded-xl bg-emerald-500/15 flex items-center justify-center group-hover:bg-emerald-500/25 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </span>
                                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-500 transition-colors">Step 2: Inspect & Follow Up</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                On follow-up mowing visits, crews walk the property to verify every treated area and take action:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-400 text-sm"><strong className="text-white">Visual verification</strong> — confirm spray was effective and weeds are dying back</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-400 text-sm"><strong className="text-white">Re-spray missed weeds</strong> — any weed still green and growing gets hit again immediately</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-400 text-sm"><strong className="text-white">Physical removal</strong> — larger dead or dying weeds are pulled so they&apos;re never an eyesore</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ── The Neatness Factor ── */}
                <section className="px-4 py-16 max-w-4xl mx-auto w-full">
                    <div className="bg-gradient-to-br from-emerald-900/30 to-gray-800/50 border border-emerald-500/20 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />
                        <div className="relative z-10">
                            <span className="inline-block text-xs font-bold tracking-widest text-emerald-500 uppercase mb-4">The Lush Difference</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                                The Neatness <span className="text-emerald-500">Factor</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                                Here&apos;s the advantage of being a weekly mowing client: because our crews are on your property <strong className="text-white">every single week</strong>, we can visually inspect every treated area, <span className="text-emerald-500 font-semibold">re-spray anything still green, and physically remove dead weeds</span> so your property always looks pristine.
                            </p>
                            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
                                This creates a compounding effect. Each cycle, fewer weeds survive because the seed bank in your soil diminishes — nothing is left alive long enough to flower and deposit new seeds. By mid-season, your beds and hardscapes are virtually weed-free through consistent spray-and-verify cycles.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <div className="bg-gray-800/60 border border-gray-700 rounded-xl px-6 py-4 text-center">
                                    <span className="block text-3xl font-extrabold text-emerald-500">Spray</span>
                                    <span className="text-xs text-gray-400 uppercase tracking-wider">Treatment visit</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500/40 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                <div className="sm:hidden w-0.5 h-6 bg-emerald-500/30 rounded-full" />
                                <div className="bg-gray-800/60 border border-gray-700 rounded-xl px-6 py-4 text-center">
                                    <span className="block text-3xl font-extrabold text-emerald-500">Inspect</span>
                                    <span className="text-xs text-gray-400 uppercase tracking-wider">Follow-up visit</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500/40 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                <div className="sm:hidden w-0.5 h-6 bg-emerald-500/30 rounded-full" />
                                <div className="bg-gray-800/60 border border-gray-700 rounded-xl px-6 py-4 text-center">
                                    <span className="block text-3xl font-extrabold text-emerald-500">Repeat</span>
                                    <span className="text-xs text-gray-400 uppercase tracking-wider">Every cycle</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Feature Grid ── */}
                <section className="px-4 py-16 max-w-6xl mx-auto w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">What Sets Us <span className="text-emerald-500">Apart</span></h2>
                        <p className="text-gray-400 max-w-xl mx-auto">Six reasons our weekly weed control delivers results other providers can&apos;t match.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {features.map((feature, idx) => (
                            <div key={idx} className="bg-gray-800/50 border border-gray-700 hover:border-emerald-500/50 p-8 rounded-2xl transition-all hover:shadow-[0_0_30px_rgba(57,181,74,0.12)] group flex flex-col gap-4">
                                <span className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center group-hover:bg-emerald-500/25 transition-colors">
                                    {feature.icon}
                                </span>
                                <h3 className="text-xl font-bold text-white group-hover:text-emerald-500 transition-colors">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Final CTA ── */}
                <section className="px-4 py-20 max-w-3xl mx-auto text-center w-full">
                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-emerald-500/20 rounded-3xl p-10 md:p-14 shadow-[0_0_60px_rgba(57,181,74,0.08)]">
                        <span className="inline-block text-xs font-bold tracking-widest text-emerald-500 uppercase mb-4">Total Property Neatness · Boise Area</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                            Ready for a Property That&apos;s <br className="hidden md:block" />
                            <span className="text-emerald-500">Always Immaculate?</span>
                        </h2>
                        <p className="text-gray-400 mb-10 leading-relaxed max-w-md mx-auto">
                            Bed weeds, crack weeds, border weeds — we spray, inspect, remove, and repeat. No trip fee. Just consistent results.
                        </p>
                        <CallToAction redirectOnQuote={true} />
                    </div>
                </section>

            </div>
        </div>
    );
}
