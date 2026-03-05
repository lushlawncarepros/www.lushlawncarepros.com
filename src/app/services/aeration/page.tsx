import Image from 'next/image';
import React from 'react';
import { CallToAction } from '@/components/CallToAction';
import { Navigation } from '@/components/Navigation';
import { Settings, Droplets, Wind } from 'lucide-react';

export const metadata = {
    title: 'Core Aeration | Fall-Only Mandate for Boise Clay Soils',
    description: 'Transform your Boise clay soil with our Fall-Only Core Aeration. Unlock deep root penetration and essential atmospheric exchange.',
  alternates: { canonical: '/services/aeration' }
};

export default function Aeration() {
    return (
        <div className="min-h-screen bg-[#36454F] text-white font-sans overflow-x-hidden relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[120px]" />
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
                        <span className="text-emerald-500">Fall-Only</span> Core Aeration
                    </h1>
                    <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                        Boise's heavy clay soils require a specific approach to compaction. Our Fall-only mandate ensures optimal recovery and root development just in time for winter hardiness.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full">
                        <div className="bg-[#2D3A42] p-6 rounded-xl border border-emerald-900/30 flex flex-col items-center text-center hover:border-emerald-500/50 transition-colors">
                            <Settings className="w-12 h-12 text-emerald-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Boise Clay Specialist</h3>
                            <p className="text-gray-400 text-sm">Strategic plug removal shatters hardpan clay, allowing essential resources to finally reach the root zone.</p>
                        </div>
                        <div className="bg-[#2D3A42] p-6 rounded-xl border border-emerald-900/30 flex flex-col items-center text-center hover:border-emerald-500/50 transition-colors">
                            <Wind className="w-12 h-12 text-emerald-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Atmospheric Exchange</h3>
                            <p className="text-gray-400 text-sm">Release trapped toxic turf gases and flood the root system with life-giving oxygen for explosive spring green-up.</p>
                        </div>
                        <div className="bg-[#2D3A42] p-6 rounded-xl border border-emerald-900/30 flex flex-col items-center text-center hover:border-emerald-500/50 transition-colors">
                            <Droplets className="w-12 h-12 text-emerald-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Deep Root Penetration</h3>
                            <p className="text-gray-400 text-sm">Water and vital nutrients can naturally cascade deeper into the soil profile, creating drought-resistant turf.</p>
                        </div>
                    </div>

                    {/* Section 1: The Fall-Only Mandate */}
                    <div className="w-full bg-[#2D3A42] rounded-2xl p-8 md:p-12 border border-emerald-900/30 mb-16 text-left shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/5 rounded-full blur-[80px] pointer-events-none" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-500 text-center">The Fall-Only Mandate</h2>
                        <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-lg">
                            <p>
                                Unlike other regions, Boise’s heavy clay soil naturally locks up over the hot, dry summer. If you aerate in the spring, you are merely opening wounds that invite summer weeds and disease exactly when the soil is trying to defend itself against the upcoming heat.
                            </p>
                            <p>
                                <strong>Why Fall?</strong> As soil temperatures cool and the intense summer heat breaks, your lawn enters a massive recovery growth phase. Fall aeration creates essential openings for root expansion just as the plant is desperately seeking resources to store for winter dormancy. This is also the perfect time to pair aeration with overseeding, allowing seeds to nestle securely into freshly pulled core holes for maximum germination.
                            </p>
                        </div>
                        <div className="mt-10 flex flex-col items-center">
                            <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-xl overflow-hidden border-2 border-emerald-900/50 shadow-xl">
                                <Image
                                    src="/Info%20Graphics/Fall%20Mandate%20Infographic.png"
                                    alt="Fall Aeration Mandate Infographic"
                                    fill
                                    className="object-contain bg-white/5"
                                    sizes="(max-width: 768px) 100vw, 600px"
                                />
                            </div>
                            <p className="text-sm text-gray-400 mt-4 italic text-center">
                                Maximizing root recovery before winter dormancy.
                            </p>
                        </div>
                    </div>

                    {/* Section 2: The Core Aeration Process Infographic */}
                    <div className="w-full mb-16 px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">See the Difference</h2>
                        <div className="mt-10 flex flex-col items-center">
                            <div className="relative w-full max-w-[800px] aspect-[16/9] rounded-xl overflow-hidden border-2 border-emerald-900/50 shadow-xl bg-white">
                                <Image
                                    src="/Info%20Graphics/Aeration-before-after-infographic.png"
                                    alt="The Science of a Greener Lawn: The Core Aeration Process"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 800px) 100vw, 800px"
                                />
                            </div>
                            <p className="text-sm text-gray-400 mt-6 italic text-center max-w-2xl">
                                From compacted clay to a deep, resilient root system. Our core aeration process breaks the thatch barrier and allows life-giving resources to reach the root zone.
                            </p>
                        </div>
                    </div>

                    {/* Section 3: FAQ */}
                    <div className="w-full mb-16 text-left max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Common Questions</h2>
                        <div className="space-y-4">
                            <details className="group bg-[#2D3A42] p-6 rounded-xl border border-emerald-900/30 cursor-pointer hover:border-emerald-500/50 transition-colors [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex justify-between items-center font-bold text-lg text-white">
                                    Why fall only?
                                    <span className="text-emerald-500 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                                </summary>
                                <p className="mt-4 text-gray-300 leading-relaxed border-t border-gray-700 pt-4">
                                    Spring aeration opens the soil to weed seeds and puts stress on your grass just as the intense summer heat approaches. Fall provides cool temperatures, active root growth phases, and natural protection against invasive weeds, making it the mathematically perfect time to disrupt the soil structure safely.
                                </p>
                            </details>

                            <details className="group bg-[#2D3A42] p-6 rounded-xl border border-emerald-900/30 cursor-pointer hover:border-emerald-500/50 transition-colors [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex justify-between items-center font-bold text-lg text-white">
                                    Does aeration hurt a healthy lawn?
                                    <span className="text-emerald-500 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                                </summary>
                                <p className="mt-4 text-gray-300 leading-relaxed border-t border-gray-700 pt-4">
                                    No, it is a crucial therapy. While pulling plugs causes temporary turf stress, a healthy lawn aggressively responds by sending roots deeper into the newly opened channels, ultimately creating a thicker, more drought-resistant canopy.
                                </p>
                            </details>

                            <details className="group bg-[#2D3A42] p-6 rounded-xl border border-emerald-900/30 cursor-pointer hover:border-emerald-500/50 transition-colors [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex justify-between items-center font-bold text-lg text-white">
                                    Can I mow right after aeration?
                                    <span className="text-emerald-500 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                                </summary>
                                <p className="mt-4 text-gray-300 leading-relaxed border-t border-gray-700 pt-4">
                                    We recommend waiting at least 2-3 days before mowing to let the freshly exposed roots settle. When you do mow, you can just mow right over the soil plugs—they will naturally break down and reintegrate vital nutrients back into your turf over a couple of weeks.
                                </p>
                            </details>
                        </div>
                    </div>

                    <CallToAction redirectOnQuote={true} />
                </section>
            </div>
        </div>
    );
}
