import React from 'react';
import Image from 'next/image';
import { CallToAction } from '@/components/CallToAction';
import { Navigation } from '@/components/Navigation';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Lawn Fertilization Program & Full-Season Weed Control',
    description: 'Our Synchronized Nutrition approach. We optimize the nutrients because we manage the cut.',
  alternates: { canonical: '/services/fertilization' }
};

export default function Fertilization() {
    const rounds = [
        {
            round: 1,
            season: "April",
            title: "Fertilizer + Pre-Emergent",
            desc: "W/ Dimension Pre-Emergent: Fertilizes and creates a barrier to prevent germination of new weed seeds.",
        },
        {
            round: 2,
            season: "May",
            title: "Fertilizer + Broadleaf Weed Control",
            desc: "W/ Surge for Broadleaf Weed Control to eliminate spring weeds at peak vulnerability.",
        },
        {
            round: 3,
            season: "June",
            title: "Fertilizer + Broadleaf Weed Control",
            desc: "W/ Surge for Broadleaf Weed Control to eliminate spring weeds at peak vulnerability.",
        },
        {
            round: 4,
            season: "August",
            title: "Slow Release Fertilizer + Weed Spot Spray",
            desc: "High-nitrogen Slow Release Application to maintain color and resilience through the heat of summer.",
        },
        {
            round: 5,
            season: "October",
            title: "Winterizer Application + Weed Spot Spray",
            desc: "Slow Release Application formulated for root development for strong winter growth.",
        },
    ];

    const whyItWorks = [
        {
            title: "Mow Height Drives Uptake",
            desc: "Blade length determines photosynthesis capacity. Because we control the cut height week-to-week, we know exactly how much nutrient the plant can metabolize — preventing burn and waste.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
        },
        {
            title: "Two Systems, One Schedule",
            desc: "By combining both the mechanical (mowing) and nutritional (fertilization) sides of turf management, we synchronize application timing with mow-day rotations so products aren't disturbed prematurely.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
        },
        {
            title: "Clippings Feed the Next Round",
            desc: "Weekly mowing produces fine clippings that decompose in 48 hours, returning up to 25% of the lawn's nitrogen needs organically. We factor this into every application rate — you get precision, not excess.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
            ),
        },
    ];

    const included = [
        "5 precision-timed fertilizer applications (Spring → Winter)",
        "Weekly visual inspections for proactive adjustments & optimal lawn health",
        "Pre-emergent crabgrass & annual weed barrier",
        "Broadleaf weed treatment every round",
        "Granular + liquid application methods",
        "Zero separate service-call fees",
    ];

    return (
        <div className="min-h-screen bg-[#36454F] text-white font-sans overflow-x-hidden relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[120px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/5 blur-[100px]" />
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
                        The <span className="text-emerald-500">Lush Carpet</span> Guarantee
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                        Experience our <strong>Synchronized Nutrition</strong> approach. We can precisely optimize the nutrients in your turf because we manage the weekly cut.
                    </p>
                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                        A comprehensive Lawn Fertilization Program and Full-Season Weed Control, synchronized perfectly with our weekly mowing schedule.
                    </p>
                    <CallToAction redirectOnQuote={true} />
                    <div className="mt-10 flex justify-center w-full">
                        <div className="relative w-full max-w-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-700/60">
                            <Image
                                src="/Images/fertilization-weed-control-300x200.jpg"
                                alt="Lush Lawn Care Pros fertilization and weed control application in the Treasure Valley"
                                width={400}
                                height={267}
                                sizes="(max-width: 640px) 100vw, 400px"
                                className="object-cover w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* ── 5-Application-Round Program Breakdown ── */}
                <section className="px-2 md:px-4 py-16 max-w-6xl mx-auto w-full">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold mb-4">The 5-Round <span className="text-emerald-500">Program</span></h2>
                        <p className="text-gray-400 max-w-xl mx-auto">A full-season fertilization schedule engineered for Boise&apos;s unique climate — from first thaw to final freeze.</p>
                    </div>

                    {/* Timeline — vertical stack on mobile, horizontal on desktop */}
                    <div className="flex flex-col md:flex-row items-stretch gap-0 relative">
                        {rounds.map((round, idx) => (
                            <React.Fragment key={idx}>
                                <div className="flex-1 flex flex-col items-center text-center px-3 py-8 bg-gray-800/40 border border-gray-700 hover:border-emerald-500/40 rounded-2xl transition-all hover:shadow-[0_0_24px_rgba(57,181,74,0.1)] relative md:mx-1 first:md:ml-0 last:md:mr-0 group">
                                    {/* Round number bubble */}
                                    <span className="w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 text-emerald-500 flex items-center justify-center font-extrabold text-lg mb-4 group-hover:bg-emerald-500/30 transition-colors">
                                        {round.round}
                                    </span>
                                    <span className="text-xs font-semibold tracking-widest text-emerald-500 uppercase mb-2">{round.season}</span>
                                    <h3 className="text-base font-bold text-white mb-3 leading-snug">{round.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{round.desc}</p>
                                </div>

                                {/* Connector arrow (desktop) */}
                                {idx < rounds.length - 1 && (
                                    <div className="hidden md:flex items-center justify-center flex-shrink-0 -mx-1 z-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}

                                {/* Connector line (mobile) */}
                                {idx < rounds.length - 1 && (
                                    <div className="md:hidden flex justify-center py-2">
                                        <div className="w-0.5 h-8 bg-emerald-500/30 rounded-full" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </section>

                {/* ── Why Managed Chemistry Works ── */}
                <section className="px-4 py-16 max-w-6xl mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                        {/* Left: Messaging */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-4xl font-bold mb-6">
                                Why <span className="text-emerald-500">Synchronized Nutrition</span> Works
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                Most fertilizer companies apply product and leave. They have no idea what height the grass was cut yesterday, whether clippings were bagged or mulched, or when the next mow is scheduled.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Because we combine <strong className="text-white">both the mowing process AND the nutrient schedule</strong>, the two systems are perfectly synchronized. The cut informs the nutrition. The nutrition informs the cut.
                            </p>
                        </div>

                        {/* Right: Fact cards */}
                        <div className="flex flex-col gap-4">
                            {whyItWorks.map((card, idx) => (
                                <div key={idx} className="bg-gray-800/50 border border-gray-700 hover:border-emerald-500/50 p-6 rounded-2xl transition-all hover:shadow-[0_0_30px_rgba(57,181,74,0.12)] group flex items-start gap-4">
                                    <span className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/25 transition-colors">
                                        {card.icon}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-500 transition-colors mb-1">{card.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── What's Included ── */}
                <section className="px-4 py-16 max-w-4xl mx-auto w-full">
                    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            What&apos;s <span className="text-emerald-500">Included</span>
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {included.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="mt-1 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ── Final CTA ── */}
                <section className="px-4 py-20 max-w-3xl mx-auto text-center w-full">
                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-emerald-500/20 rounded-3xl p-10 md:p-14 shadow-[0_0_60px_rgba(57,181,74,0.08)]">
                        <span className="inline-block text-xs font-bold tracking-widest text-emerald-500 uppercase mb-4">Synchronized Nutrition · Boise Area</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                            Ready for the Greenest Lawn <br className="hidden md:block" />
                            <span className="text-emerald-500">On Your Street?</span>
                        </h2>
                        <p className="text-gray-400 mb-10 leading-relaxed max-w-md mx-auto">
                            Join Treasure Valley homeowners who&apos;ve upgraded to a synchronized mow + feed program. Five rounds. Zero guesswork. Visible results by Round 2.
                        </p>
                        <CallToAction redirectOnQuote={true} />
                    </div>
                </section>

            </div>
        </div>
    );
}
