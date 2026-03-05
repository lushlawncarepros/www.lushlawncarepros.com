import React from 'react';
import Image from 'next/image';
import { CallToAction } from '@/components/CallToAction';
import { Navigation } from '@/components/Navigation';

export const metadata = {
    title: 'Reliable Weekly Mowing | Precision Property Management',
    description: 'Lush Lawn Care Pros is Weekly Only to maintain elite turf health. Explore our 10-point checklist.',
  alternates: { canonical: '/services/mowing' }
};

export default function Mowing() {
    const lush10 = [
        { title: "Gates Verified", desc: "Secured before & after." },
        { title: "Debris Sweep", desc: "Toys & sticks cleared." },
        { title: "Pattern Rotation", desc: "Prevents rutting." },
        { title: "String-Trimming", desc: "Detailed perimeter work." },
        { title: "Vertical Edging", desc: "Crisp hardscape lines." },
        { title: "Power-Blowing", desc: "Zero clippings left." },
        { title: "Cut Height", desc: "Optimal seasonal cut." },
        { title: "Property Audit", desc: "Verified damage-free." },
        { title: "Digital Alert", desc: "Instant completion text." },
        { title: "Blade Check", desc: "Sharpened weekly." }
    ];

    const whyWeeklyCards = [
        {
            title: "The One-Third Rule",
            body: "Turfgrass science is unambiguous: removing more than one-third of the blade in a single cut triggers a stress response that diverts energy from root growth to emergency shoot recovery. Weekly visits keep grass in the optimal growth band — never scalped, always thriving.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#39B54A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18M3 12h18M7.05 7.05l9.9 9.9M16.95 7.05l-9.9 9.9" />
                </svg>
            ),
        },
        {
            title: "Preventing Thatch Buildup",
            body: "Bi-weekly or monthly mowing deposits thick clipping layers that mat into thatch — a spongy barrier that blocks water, fertilizer, and oxygen from reaching the root zone. Weekly frequency keeps clippings short enough to decompose naturally and feed the soil.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#39B54A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h18M3 12h18M3 17h18" />
                </svg>
            ),
        },
        {
            title: "Stress Avoidance",
            body: "Irregular mowing creates a boom-and-bust cycle: grass grows long, gets scalped, and enters drought shock — all without a single hot day. A consistent weekly schedule means the plant never experiences the physiological trauma of sudden, drastic height reduction.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#39B54A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
    ];

    const timelineSteps = [
        {
            label: "Before Visit",
            heading: "Fixed Mowing Day",
            body: "Your property is assigned to a specific day of the week and we always mow on that day — no scheduling surprises. If a rain delay or emergency ever prevents us from showing up, you'll receive an email notification proactively.",
        },
        {
            label: "During Visit",
            heading: "Lush 10 Execution",
            body: "Our crew runs the full 10-point SOP — mow, trim, edge, blow — in a precise sequence. Average on-site time: 30–45 minutes depending on property size.",
        },
        {
            label: "After Visit",
            heading: "Digital Completion Alert",
            body: "The moment we close the gate, you receive an email confirmation. No wondering if we showed up — you always know.",
        },
    ];

    const faqs = [
        {
            q: "Why weekly only?",
            a: "Our weekly-only policy isn't upselling — it's agronomics. The one-third rule dictates that skipping a week forces a drastic cut on the return visit, triggering stress and root regression across the entire lawn. Weekly service is the only cadence that keeps turf in perpetual optimal health."
        },
        {
            q: "What cut height do you use?",
            a: "We default to 3–3.5 inches for Boise's predominant cool-season grasses (tall fescue and Kentucky bluegrass). This height shades the soil to retain moisture, suppresses weed germination, and keeps the leaf blade in its highest photosynthesis band. We adjust seasonally — slightly shorter in cool spring, never below 3\" in summer heat."
        },
        {
            q: "What if it rains?",
            a: "Light rain: we still show up — wet grass cuts cleanly with sharp blades and actually disperses clippings better. Heavy rain or standing water: we skip that day and bump your service to our Friday buffer day. We schedule Mon–Thu specifically so Friday stays open as a makeup slot. You'll receive an email notification any time your regular day is affected. We never mow saturated turf, which causes ruts and soil compaction."
        },
        {
            q: "Do I need to be home?",
            a: "No. The only requirement is unlocked gate access on service day. We operate completely independently, complete the full Lush 10 SOP, and send you a confirmation text when we're done. Many of our clients are at work all day and have never personally met the crew — the proof is in the lawn."
        },
    ];

    return (
        <div className="min-h-screen bg-[#36454F] text-white font-sans overflow-x-hidden relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#39B54A]/10 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#39B54A]/5 blur-[100px]" />
            </div>

            <div className="relative z-10">
                <Navigation />

                {/* ── Hero ── */}
                <section className="px-4 pb-4 pt-2 text-center max-w-4xl mx-auto flex flex-col items-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 mt-2">
                        Reliable <span className="text-[#39B54A]">Weekly Mowing</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                        At Lush, we are strictly &ldquo;Weekly Only.&rdquo; Consistency is the foundation of elite turf health. By servicing your property every week, we ensure precision property management without compromise.
                    </p>
                    <CallToAction redirectOnQuote={true} />
                    <div className="mt-10 flex justify-center w-full">
                        <div className="relative w-full max-w-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-700/50">
                            <Image
                                src="/Images/MowerRideon.png"
                                alt="Toro Grandstand mower servicing a Boise residential lawn"
                                width={400}
                                height={267}
                                sizes="(max-width: 640px) 100vw, 400px"
                                className="object-cover w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* ── Lush 10 SOP ── */}
                <section className="px-4 py-16 max-w-6xl mx-auto mb-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">The Lush 10 <span className="text-[#39B54A]">SOP</span></h2>
                        <p className="text-gray-400 max-w-xl mx-auto">Our 10-point Standard Operating Procedure ensures nothing is missed during our weekly visits.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {lush10.map((item, idx) => (
                            <div key={idx} className="bg-gray-800/50 border border-gray-700 hover:border-[#39B54A]/50 p-6 rounded-2xl transition-colors text-left flex flex-col h-full">
                                <span className="w-8 h-8 rounded-full bg-[#39B54A]/20 text-[#39B54A] flex items-center justify-center font-bold text-sm mb-4">{idx + 1}</span>
                                <h3 className="font-bold text-base text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Why Weekly Matters ── */}
                <section className="px-4 py-16 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Why Weekly <span className="text-[#39B54A]">Matters</span></h2>
                        <p className="text-gray-400 max-w-xl mx-auto">The science behind our Weekly-Only policy — it&apos;s not a business decision, it&apos;s agronomy.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {whyWeeklyCards.map((card, idx) => (
                            <div key={idx} className="bg-gray-800/50 border border-gray-700 hover:border-[#39B54A]/50 p-8 rounded-2xl transition-all hover:shadow-[0_0_30px_rgba(57,181,74,0.12)] group flex flex-col gap-4">
                                <span className="w-12 h-12 rounded-xl bg-[#39B54A]/15 flex items-center justify-center group-hover:bg-[#39B54A]/25 transition-colors">
                                    {card.icon}
                                </span>
                                <h3 className="text-xl font-bold text-white group-hover:text-[#39B54A] transition-colors">{card.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{card.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── What to Expect: Timeline ── */}
                <section className="px-4 py-16 max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold mb-4">What to <span className="text-[#39B54A]">Expect</span></h2>
                        <p className="text-gray-400 max-w-xl mx-auto">A transparent look at every Lush service visit from first ping to final confirmation.</p>
                    </div>

                    {/* Mobile: vertical stack | Desktop: horizontal steps */}
                    <div className="flex flex-col md:flex-row items-stretch gap-0 relative">
                        {timelineSteps.map((step, idx) => (
                            <React.Fragment key={idx}>
                                <div className="flex-1 flex flex-col items-center text-center px-4 py-8 bg-gray-800/40 border border-gray-700 hover:border-[#39B54A]/40 rounded-2xl transition-all hover:shadow-[0_0_24px_rgba(57,181,74,0.1)] relative md:mx-2 first:md:ml-0 last:md:mr-0 group">
                                    {/* Step number bubble */}
                                    <span className="w-12 h-12 rounded-full bg-[#39B54A]/20 border-2 border-[#39B54A]/50 text-[#39B54A] flex items-center justify-center font-extrabold text-lg mb-4 group-hover:bg-[#39B54A]/30 transition-colors">
                                        {idx + 1}
                                    </span>
                                    <span className="text-xs font-semibold tracking-widest text-[#39B54A] uppercase mb-2">{step.label}</span>
                                    <h3 className="text-lg font-bold text-white mb-3">{step.heading}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{step.body}</p>
                                </div>

                                {/* Connector arrow between steps (desktop only) */}
                                {idx < timelineSteps.length - 1 && (
                                    <div className="hidden md:flex items-center justify-center flex-shrink-0 -mx-2 z-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#39B54A]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}

                                {/* Connector line between steps (mobile only) */}
                                {idx < timelineSteps.length - 1 && (
                                    <div className="md:hidden flex justify-center py-2">
                                        <div className="w-0.5 h-8 bg-[#39B54A]/30 rounded-full" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="px-4 py-16 max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Common <span className="text-[#39B54A]">Questions</span></h2>
                        <p className="text-gray-400">Straight answers. No fluff.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, idx) => (
                            <details
                                key={idx}
                                className="group bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden transition-all open:border-[#39B54A]/40 open:shadow-[0_0_20px_rgba(57,181,74,0.08)]"
                            >
                                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer select-none list-none font-semibold text-white hover:text-[#39B54A] transition-colors gap-4">
                                    <span>{faq.q}</span>
                                    {/* Chevron icon rotates when open */}
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#39B54A]/15 flex items-center justify-center transition-transform duration-300 group-open:rotate-180">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-[#39B54A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 pt-1 text-gray-400 text-sm leading-relaxed border-t border-gray-700/50">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                {/* ── Final CTA ── */}
                <section className="px-4 py-20 max-w-3xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-[#39B54A]/20 rounded-3xl p-10 md:p-14 shadow-[0_0_60px_rgba(57,181,74,0.08)]">
                        <span className="inline-block text-xs font-bold tracking-widest text-[#39B54A] uppercase mb-4">Elite Lawn Care · Boise Area</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                            Ready for a Lawn That&apos;s <br className="hidden md:block" />
                            <span className="text-[#39B54A]">Always Dialed In?</span>
                        </h2>
                        <p className="text-gray-400 mb-10 leading-relaxed max-w-md mx-auto">
                            Join homeowners across the Treasure Valley who&apos;ve upgraded to the Lush standard. Weekly service. Zero guesswork. Real results.
                        </p>
                        <CallToAction redirectOnQuote={true} />
                    </div>
                </section>

            </div>
        </div>
    );
}
