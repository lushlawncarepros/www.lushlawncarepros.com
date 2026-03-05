import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CallToAction } from '@/components/CallToAction';
import { Navigation } from '@/components/Navigation';
import { Snowflake, ShieldCheck, Gauge, CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react';

export const metadata = {
    title: 'Sprinkler Blowouts | Treasure Valley Winter Prep',
    description: 'Protect your irrigation infrastructure with our high-CFM winterization services in the Treasure Valley.',
  alternates: { canonical: '/services/sprinkler-blowout' }
};

export default function SprinklerBlowout() {
    return (
        <div className="min-h-screen bg-[#36454F] text-white font-sans overflow-x-hidden relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[120px]" />
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

                <section className="px-4 pb-8 pt-2 text-center max-w-5xl mx-auto flex flex-col items-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Professional <span className="text-emerald-500">Sprinkler Blowouts</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                        Don't let Treasure Valley freezes destroy your irrigation investment. Our winterization process relies on high-volume air, not high pressure, for safe and complete clearing.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full">
                        <div className="bg-[#2D3A42] p-6 rounded-xl border border-emerald-900/30 flex flex-col items-center text-center hover:border-emerald-500/50 transition-colors">
                            <Gauge className="w-12 h-12 text-emerald-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">High-CFM Compressors</h3>
                            <p className="text-gray-400 text-sm">We use tow-behind, high-volume compressors that clear lines quickly and safely without exceeding PVC pressure ratings.</p>
                        </div>
                        <div className="bg-[#2D3A42] p-6 rounded-xl border border-emerald-900/30 flex flex-col items-center text-center hover:border-emerald-500/50 transition-colors">
                            <Snowflake className="w-12 h-12 text-emerald-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Freeze Protection</h3>
                            <p className="text-gray-400 text-sm">Evacuating all residual water from your backflow preventer, manifold, and laterals completely mitigates winter expansion damage.</p>
                        </div>
                        <div className="bg-[#2D3A42] p-6 rounded-xl border border-emerald-900/30 flex flex-col items-center text-center hover:border-emerald-500/50 transition-colors">
                            <ShieldCheck className="w-12 h-12 text-emerald-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Infrastructure Safety</h3>
                            <p className="text-gray-400 text-sm">Proper blowout techniques protect your expensive sprinkler heads, valves, and pipes, extending the life of your entire system.</p>
                        </div>
                    </div>

                    {/* 1. Why High-CFM Volume Matters */}
                    <div className="w-full mb-16 pt-8 border-t border-emerald-900/30">
                        <div className="flex flex-col md:flex-row items-center gap-10 text-left">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-bold mb-4">Why High-CFM <span className="text-emerald-500">Volume Matters</span></h2>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    A common mistake is using high pressure to blow out sprinkler lines. Standard garage air compressors might hit 120+ PSI, but they lack the volume (CFM) to sustain it. This high-pressure burst can shatter PVC fittings and damage sensitive valves.
                                </p>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    Our commercial tow-behind compressors operate at a safe, regulated pressure (typically under 60 PSI for residential systems) but deliver a massive volume of air (high CFM). This sustained volume pushes the water out continuously without putting explosive stress on your irrigation infrastructure.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="rounded-xl overflow-hidden shadow-2xl border border-emerald-900/40 relative aspect-[16/10] group">
                                    <Image
                                        src="/Images/watering.png"
                                        alt="A Boise lawn sprinkler head operating under professional high-volume air pressure"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 italic text-center md:text-left">
                                    Commercial-grade volume ensures a complete purge without explosive pressure.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2. The Boise Freeze Window */}
                    <div className="w-full bg-[#2D3A42] p-8 md:p-10 rounded-2xl border border-rose-900/30 mb-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-[50px]"></div>
                        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                            <div className="flex-shrink-0 bg-rose-500/20 p-4 rounded-full">
                                <AlertTriangle className="w-10 h-10 text-rose-400" />
                            </div>
                            <div className="text-left flex-grow">
                                <h2 className="text-2xl font-bold mb-2">The Boise Freeze Window</h2>
                                <p className="text-gray-300">
                                    In the Treasure Valley, we typically experience our first hard freezes between late October and early November. Once ground temperatures plummet, lingering water in your system expands, causing potentially thousands of dollars in hidden damage. <strong className="text-white">Don't wait until the freeze warning hits the news.</strong> Our schedule fills rapidly in October.
                                </p>
                            </div>
                            <div className="flex-shrink-0 text-center">
                                <Link href="/?quote=true" className="inline-block bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap shadow-lg shadow-rose-900/20">
                                    Book Your Slot Lock
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* 3. What's Protected (Visual Checklist) */}
                    <div className="w-full mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">Comprehensive <span className="text-emerald-500">System Protection</span></h2>
                        <div className="bg-[#2D3A42] rounded-xl border border-emerald-900/30 p-8 max-w-3xl mx-auto shadow-xl">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-left">
                                {[
                                    "Backflow Preventer (PVB/RPZ)",
                                    "Zone Manifolds & Valves",
                                    "Mainline & Lateral Lines",
                                    "Pop-up Sprinkler Heads",
                                    "Rotors & Impact Heads",
                                    "Drip Lines & Emitters"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                                        <span className="text-gray-200 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 4. FAQ */}
                    <div className="w-full mb-16 text-left">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">Sprinkler Blowout <span className="text-emerald-500">FAQ</span></h2>
                        <div className="space-y-4 max-w-3xl mx-auto">
                            {[
                                {
                                    q: "When should I book my blowout?",
                                    a: "We recommend booking by late September. Our routes run heavily throughout October to ensure all client properties are winterized before the hard freezes hit early November."
                                },
                                {
                                    q: "How long does the service take?",
                                    a: "Most residential systems take between 20 to 40 minutes, depending on the number of zones. Our high-CFM compressors make the process highly efficient."
                                },
                                {
                                    q: "Can I do it myself with my garage compressor?",
                                    a: "It's highly discouraged. Garage compressors don't produce enough CFM (volume) to effectively clear lines, often leaving water sitting in low spots. You also risk over-pressurizing the system, which can blow apart PVC joints and break heads."
                                },
                                {
                                    q: "Is my system safe after the blowout?",
                                    a: "Yes. Once our commercial compressor stops spitting mist from the farthest heads, we know the lines are evacuated of any volume of water that could cause expansion damage when frozen."
                                }
                            ].map((faq, idx) => (
                                <div key={idx} className="bg-[#2D3A42] rounded-lg p-6 border border-emerald-900/20">
                                    <h4 className="text-xl font-bold text-white mb-2 flex items-start gap-3">
                                        <HelpCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-gray-400 ml-9">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 5. Infographic & Final CTA */}
                    <div className="w-full mb-12 flex flex-col items-center">
                        <div className="w-full max-w-2xl mx-auto mb-10 overflow-hidden rounded-xl border-4 border-[#2D3A42] shadow-2xl">
                            <Image
                                src="/Info%20Graphics/Irrigation%20Infographic.png"
                                alt="Irrigation System Winterization Infographic"
                                width={800}
                                height={1200}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    <CallToAction redirectOnQuote={true} />
                </section>
            </div>
        </div>
    );
}
