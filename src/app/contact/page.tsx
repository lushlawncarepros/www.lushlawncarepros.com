import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CallToAction } from '@/components/CallToAction';
import { Navigation } from '@/components/Navigation';

export const metadata = {
    title: 'Contact Lush Lawn Care Pros | Boise & Meridian Idaho',
    description:
        'Get in touch with Lush Lawn Care Pros. Serving Boise & Meridian, Idaho with premium weekly lawn care. Get your free quote today.',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#36454F] text-white font-sans overflow-x-hidden relative">
            {/* Background decorative blurs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#39B54A]/10 blur-[120px]" />
                <div className="absolute bottom-[20%] right-[-15%] w-[35%] h-[35%] rounded-full bg-[#39B54A]/5 blur-[120px]" />
            </div>

            <div className="relative z-10">
                <Navigation />


                {/* ═══════════════════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════════════════ */}
                <section className="relative pt-2 pb-12 px-4 text-center max-w-5xl mx-auto flex flex-col items-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        Contact <span className="text-[#39B54A]">Lush Lawn Care Pros</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
                        Ready for the precision your property deserves? Reach out—we&apos;d love to hear from you.
                    </p>
                </section>

                {/* ═══════════════════════════════════════════════════════════════════
            CONTACT GRID — Info + CTA
        ═══════════════════════════════════════════════════════════════════ */}
                <section className="px-4 py-12 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                        {/* Left column — Contact info */}
                        <div className="space-y-8">

                            {/* Service Area Card */}
                            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-[#39B54A]/30 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-12 h-12 rounded-full bg-[#39B54A]/15 text-[#39B54A] flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">Service Area</h2>
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    We proudly serve <strong className="text-white">Boise &amp; Meridian, Idaho</strong>—the
                                    heart of the Treasure Valley. Our weekly-only model means we stay local, stay focused,
                                    and deliver consistent precision to every property in our service area.
                                </p>
                                <p className="text-gray-400 text-sm">
                                    Not sure if you&apos;re in our zone? Enter your address in the quote form and we&apos;ll
                                    let you know instantly.
                                </p>
                            </div>

                            {/* Google Business Profile Card */}
                            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-[#39B54A]/30 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-12 h-12 rounded-full bg-[#39B54A]/15 text-[#39B54A] flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">Reviews &amp; Profile</h2>
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-5">
                                    See why our partners trust us with their properties. Check out our verified reviews
                                    and learn more about Lush on our Google Business Profile.
                                </p>
                                <a
                                    href="https://share.google/HcZTXSe6UQaucbm4u"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-transparent border-2 border-[#39B54A] text-[#39B54A] px-6 py-3 rounded-full font-semibold hover:bg-[#39B54A] hover:text-[#111111] transition-all duration-300 text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(57,181,74,0.2)] hover:shadow-[0_0_20px_rgba(57,181,74,0.4)]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    View on Google
                                </a>
                            </div>

                        </div>

                        {/* Right column — CTA form and Communication */}
                        <div className="space-y-8 lg:sticky lg:top-8">
                            {/* Merged Communication & Quote Card */}
                            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-[#39B54A]/30 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-12 h-12 rounded-full bg-[#39B54A]/15 text-[#39B54A] flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">Get Your Free Quote</h2>
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    We keep it simple and responsive. Submit a quote request through the form and our team
                                    will reach out directly—typically within a few hours. We communicate primarily via email
                                    for fast, transparent updates before, during, and after every visit.
                                </p>
                                <div className="border-t border-gray-700 pt-6 mt-6">
                                    <CallToAction hideServices={true} sourceOverride="Main Contact Quote Form" />
                                </div>
                            </div>

                            {/* Secondary CTA Card (Restored) */}
                            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-[#39B54A]/30 transition-all duration-300 flex flex-col items-center">
                                <h2 className="text-2xl font-bold text-white mb-6 text-center">Current Customer Form</h2>
                                <CallToAction hideServices={true} buttonText="Request Additional Services" variant="subtle" skipSieve={true} sourceOverride="Current Customer Form" />
                            </div>
                        </div>

                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════════════
            SERVICE AREA BANNER
        ═══════════════════════════════════════════════════════════════════ */}
                <section className="px-4 py-16 max-w-5xl mx-auto">
                    <div className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-[#39B54A]/20">
                        <div className="p-10 md:p-14 flex flex-col md:flex-row items-center gap-8 relative z-10">
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                                    Proudly Serving the <span className="text-[#39B54A]">Treasure Valley</span>
                                </h2>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Boise &amp; Meridian, Idaho. Local roots, premium results. Our tight service area
                                    means faster response times, consistent crews, and a team that truly knows your
                                    neighborhood.
                                </p>
                            </div>
                            <div className="w-full md:w-auto flex justify-center">
                                <div className="w-32 h-32 rounded-full border-4 border-[#39B54A]/50 flex items-center justify-center bg-[#39B54A]/10 shadow-[0_0_50px_rgba(57,181,74,0.15)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#39B54A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/* Decorative blur */}
                        <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#39B54A]/10 blur-[80px] pointer-events-none" />
                    </div>
                </section>
            </div>
        </div>
    );
}
