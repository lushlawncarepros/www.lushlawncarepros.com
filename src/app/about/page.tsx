import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { CallToAction } from '@/components/CallToAction';
import { Navigation } from '@/components/Navigation';

export const metadata = {
    title: 'About Lush Lawn Care Pros | Boise Premium Lawn Care',
    description:
        'Meet the family behind the Lush Precision Standard. Learn about our Pay for Performance model, Iron-Clad Guarantee, and why Boise & Meridian trust us with their properties.',
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
    const values = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Reliability',
            desc: 'Same day, same crew, every single week. You can set your watch by us.',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Precision',
            desc: 'Every visit follows our 10-point SOP. No shortcuts, no skipped steps—ever.',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
            title: 'Transparency',
            desc: 'Real-time communication, honest pricing, and a guarantee we put our money behind.',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            title: 'Agronomic Excellence',
            desc: 'We don\'t just mow grass—we study turf science, soil biology, and Treasure Valley ecosystems.',
        },
    ];

    const p4pSteps = [
        {
            num: '01',
            title: 'Quality Scoring',
            desc: 'Every property is scored after each visit using our internal quality audit. Clean edges, proper cut height, zero debris—each criterion matters.',
        },
        {
            num: '02',
            title: 'Compensation Alignment',
            desc: 'Our crew\'s pay is directly tied to these quality scores. Higher scores mean higher earnings. Their success and your satisfaction are the same thing.',
        },
        {
            num: '03',
            title: 'Continuous Improvement',
            desc: 'Weekly performance data drives ongoing training. Our team doesn\'t plateau—they compound excellence, season over season.',
        },
    ];

    return (
        <div className="min-h-screen bg-[#36454F] text-white font-sans overflow-x-hidden relative">
            {/* Background decorative blurs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#39B54A]/10 blur-[120px]" />
                <div className="absolute bottom-[30%] right-[-15%] w-[40%] h-[40%] rounded-full bg-[#39B54A]/5 blur-[120px]" />
            </div>

            <div className="relative z-10">
                <Navigation />


                {/* ═══════════════════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════════════════ */}
                <section className="relative pt-2 pb-16 px-4 text-center max-w-5xl mx-auto flex flex-col items-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        The Lush <span className="text-[#39B54A]">Precision Standard</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 mb-4 max-w-3xl leading-relaxed">
                        A family-built promise of agronomic excellence—delivered to your door every single week.
                    </p>
                </section>

                {/* ═══════════════════════════════════════════════════════════════════
            OUR STORY
        ═══════════════════════════════════════════════════════════════════ */}
                <section className="px-4 py-16 max-w-5xl mx-auto">
                    <div className="w-full relative overflow-hidden rounded-3xl bg-gray-800/50 border border-gray-700 transition-all duration-500 hover:border-[#39B54A]/30">
                        <div className="p-8 md:p-14 relative z-10">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
                                Our <span className="text-[#39B54A]">Story</span>
                            </h2>
                            <div className="flex flex-col md:flex-row gap-10 items-start">
                                {/* Photo */}
                                <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                                    <div className="relative w-full max-w-[340px] rounded-2xl overflow-hidden shadow-xl border border-gray-700/50">
                                        <Image
                                            src="/Images/Family Picture.png"
                                            alt="Ethan and the Lush Lawn Care Pros family in Boise Idaho"
                                            width={340}
                                            height={255}
                                            sizes="(max-width: 768px) 100vw, 340px"
                                            className="object-cover w-full h-auto"
                                        />
                                    </div>
                                </div>
                                {/* Text */}
                                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                                    <p>
                                        Lush Lawn Care Pros started where most good things do—around the family table. Ethan
                                        and his family saw something broken in how lawn care worked in the Treasure Valley:
                                        inconsistent crews, skipped weeks, corners cut on properties people loved. They
                                        decided to build the opposite.
                                    </p>
                                    <p>
                                        What began as a commitment to serve a handful of neighbors in Boise has grown into
                                        a premium, <strong className="text-white">weekly-only</strong> lawn care service
                                        trusted across Boise and Meridian. We chose &ldquo;weekly only&rdquo; on purpose—not
                                        because it&apos;s easier, but because turf science demands it. Consistent mowing at the
                                        correct height, at the correct interval, is the single most impactful thing you can
                                        do for a Treasure Valley lawn.
                                    </p>
                                    <p>
                                        We&apos;re not a franchise. We&apos;re not backed by venture capital. We&apos;re a local
                                        family pouring agronomic knowledge and genuine care into every property we touch.
                                        When you partner with Lush, you&apos;re partnering with people who live in your
                                        community, shop at your stores, and take personal pride in the way your yard looks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative blur */}
                        <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#39B54A]/10 blur-[80px] pointer-events-none" />
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════════════
            PAY FOR PERFORMANCE (P4P)
        ═══════════════════════════════════════════════════════════════════ */}
                <section className="px-4 py-16 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            Pay for <span className="text-[#39B54A]">Performance</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Most lawn companies pay by the hour. We pay by the result. Our crew&apos;s compensation
                            is directly tied to the quality of their work and your satisfaction—total alignment between
                            your property looking pristine and our team succeeding.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {p4pSteps.map((step) => (
                            <div
                                key={step.num}
                                className="bg-gray-800/50 border border-gray-700 hover:border-[#39B54A]/50 p-8 rounded-2xl transition-all duration-300 flex flex-col h-full group"
                            >
                                <span className="text-[#39B54A] font-extrabold text-4xl mb-4 opacity-60 group-hover:opacity-100 transition-opacity">
                                    {step.num}
                                </span>
                                <h3 className="font-bold text-xl text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            The result? Crews that are genuinely motivated to deliver excellence—not just clock in and
                            clock out. When your lawn looks its absolute best, our Pros succeed. That&apos;s the Lush
                            difference.
                        </p>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════════════
            IRON-CLAD GUARANTEE
        ═══════════════════════════════════════════════════════════════════ */}
                <section className="px-4 py-16 flex justify-center">
                    <div className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-700 relative max-w-4xl transform transition-all duration-500 hover:scale-[1.02] w-full hover:border-[#39B54A]/30 hover:shadow-[0_0_30px_var(--color-lush-emerald)]">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 border border-emerald-600/50 text-emerald-600 px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase shadow-md text-center max-w-[95%] w-max">
                            THE IRON-CLAD GUARANTEE
                        </div>
                        <div className="mt-4 flex flex-col items-center text-center">
                            <p className="text-2xl md:text-3xl font-semibold text-white mb-6 leading-snug">
                                &quot;If you aren&apos;t 100% satisfied with our precision, we will pay a competitor of your choice to fix it.&quot;
                            </p>
                            <p className="text-gray-400 max-w-2xl mb-6 leading-relaxed">
                                This isn&apos;t marketing fluff. We will literally write a check to another lawn company
                                if we fail to meet our standard. We&apos;ve never had to—but knowing it exists keeps
                                our crews laser-focused on delivering perfection every single visit.
                            </p>
                            <p className="text-[#39B54A] font-medium flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                No Questions Asked.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════════════
            OUR VALUES
        ═══════════════════════════════════════════════════════════════════ */}
                <section className="px-4 py-16 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            What We <span className="text-[#39B54A]">Stand For</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Four pillars that drive every decision we make, every property we touch.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v) => (
                            <div
                                key={v.title}
                                className="bg-gray-800/50 border border-gray-700 hover:border-[#39B54A]/50 p-8 rounded-2xl transition-all duration-300 text-center flex flex-col items-center h-full group"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#39B54A]/15 text-[#39B54A] flex items-center justify-center mb-5 group-hover:bg-[#39B54A]/25 transition-colors">
                                    {v.icon}
                                </div>
                                <h3 className="font-bold text-lg text-white mb-3">{v.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════════════
            FINAL CTA
        ═══════════════════════════════════════════════════════════════════ */}
                <section className="px-4 py-16 text-center max-w-3xl mx-auto flex flex-col items-center border-t border-gray-700/50">
                    <h3 className="text-2xl md:text-3xl font-black mb-8 text-white tracking-wide uppercase">
                        Ready to experience the <span className="text-[#39B54A]">Lush Difference?</span>
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                        <CallToAction />
                    </div>
                </section>
            </div>
        </div>
    );
}
