import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { Microscope, Bug, Target, Activity, ShieldCheck, Clock, Sprout, Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'The Pest Audit: Precision Diagnostics for Treasure Valley Turf | Lush 2026',
    description: 'Don\'t mistake Billbugs for drought stress. Learn the "Tug Test" diagnostic protocol and how we protect the Boise soil microbiome using "Soft Chemistry" standards.',
  alternates: { canonical: '/vault/pest-audit' }
};

export default function PestAuditArticle() {
    return (
        <div className="min-h-screen bg-[#111111] text-white font-sans overflow-x-hidden relative">
            {/* Deep Charcoal / Emerald Aesthetic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#39B54A]/5 blur-[120px]" />
                <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#2A363E]/80 blur-[150px]" />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">
                <Navigation />


                <main className="px-4 py-16 w-full max-w-4xl mx-auto flex flex-col items-center">

                    {/* Header Section */}
                    <header className="w-full text-center mb-12 animate-in slide-in-from-bottom-4 fade-in duration-500">
                        <div className="flex justify-center gap-3 mb-6">
                            <span className="flex items-center gap-2 text-xs font-bold text-[#39B54A] uppercase tracking-wider bg-[#39B54A]/10 px-4 py-2 rounded-full border border-[#39B54A]/20 shadow-[0_0_15px_rgba(57,181,74,0.1)]">
                                <Microscope size={16} /> Entomology
                            </span>
                            <span className="text-xs text-gray-400 font-bold tracking-widest border border-gray-600/50 bg-gray-800/50 px-4 py-2 rounded-full uppercase">
                                12 Min Read
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight text-white">
                            The Pest Audit:<br />
                            <span className="text-gray-300 font-extrabold text-3xl md:text-4xl block mt-2">Precision Diagnostics for Treasure Valley Turf</span>
                        </h1>

                        {/* Author Block */}
                        <div className="text-sm font-medium text-gray-400 border-b border-[#39B54A]/30 pb-8 flex justify-center items-center gap-4 uppercase tracking-widest">
                            By <span className="text-[#39B54A] font-bold">Ethan Petersen, Chief Turf Strategist</span>
                        </div>
                    </header>

                    {/* Infographic Integration */}
                    <section className="w-full mb-16 animate-in slide-in-from-bottom-8 fade-in duration-700 font-serif pt-2" style={{ animationDelay: '150ms', animationFillMode: 'both' }}>
                        <div className="relative w-full rounded-2xl overflow-hidden border border-[#39B54A]/30 shadow-[0_0_30px_rgba(57,181,74,0.1)] group bg-[#2A363E]">
                            <Image
                                src="/Info Graphics/Pest Infographic.png"
                                alt="Lush 10 Pest Audit Infographic: Identification of Bluegrass Billbugs, Cranefly Leatherjackets, and Sod Webworms in Boise, ID. Explaining the Tug Test diagnostic protocol."
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                                unoptimized
                                priority
                            />
                        </div>
                    </section>

                    <article className="prose prose-invert prose-emerald prose-lg max-w-3xl w-full text-gray-300">

                        {/* The Diagnostic Trap */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <Target className="text-[#39B54A]" size={28} />
                            The Diagnostic Trap
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            Every July in the Treasure Valley, lawns suddenly develop massive brown, irregular patches. The immediate instinct for most homeowners is to dramatically increase irrigation run times, assuming extreme drought stress. This is the <strong className="text-white">Diagnostic Trap</strong>.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Often, this is not a water issue—it is biological sheer. Bluegrass Billbug larvae are actively severing the turf canopy from its root system. No amount of water will save a plant with a severed vascular system. To accurately diagnose this, we utilize the <strong className="text-white">"Tug Test" Protocol</strong>. If the brown stems break away with zero resistance and reveal sawdust-like frass (waste) at the crown, you have a Billbug infestation, not a dry spot.
                        </p>

                        {/* Visual Data Card: Diagnostic Matrix */}
                        <div className="my-10 bg-[#2A363E] border border-gray-600/50 rounded-2xl p-6 shadow-xl">
                            <h4 className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm border-b border-gray-600/50 pb-3 mb-4">
                                <Activity size={18} className="text-[#39B54A]" /> Diagnostic Matrix
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-black/20 p-5 rounded-xl border border-red-500/20">
                                    <h5 className="font-bold text-red-400 mb-2">Biological (Billbugs)</h5>
                                    <ul className="text-sm text-gray-300 space-y-2">
                                        <li>• <strong className="text-white">Tug Test:</strong> Stems sheer off easily.</li>
                                        <li>• <strong className="text-white">Sign:</strong> Sawdust-like frass at base.</li>
                                        <li>• <strong className="text-white">Pattern:</strong> Rapid, irregular spreading.</li>
                                    </ul>
                                </div>
                                <div className="bg-black/20 p-5 rounded-xl border border-orange-500/30">
                                    <h5 className="font-bold text-orange-400 mb-2">Biological (Chinch Bugs)</h5>
                                    <ul className="text-sm text-gray-300 space-y-2">
                                        <li>• <strong className="text-white">Tug Test:</strong> Roots hold firm (unlike Billbugs).</li>
                                        <li>• <strong className="text-white">Sign:</strong> Withered blades despite wet soil; visible 'piercing' at the crown.</li>
                                        <li>• <strong className="text-white">Pattern:</strong> Rapidly expanding yellow patches in hottest, sunniest areas.</li>
                                    </ul>
                                </div>
                                <div className="bg-black/20 p-5 rounded-xl border border-[#39B54A]/20">
                                    <h5 className="font-bold text-[#39B54A] mb-2">Pathological (NRS)</h5>
                                    <ul className="text-sm text-gray-300 space-y-2">
                                        <li>• <strong className="text-white">Tug Test:</strong> Roots hold firm against pull.</li>
                                        <li>• <strong className="text-white">Sign:</strong> Blackened, rotted roots.</li>
                                        <li>• <strong className="text-white">Pattern:</strong> Classic 'Frog-Eye' circular rings.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* The Growing Concern: Hairy Chinch Bugs */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <Search className="text-[#39B54A]" size={28} />
                            The Growing Concern: Hairy Chinch Bugs
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            While not part of Boise's "Original 3" primary turf pests, Chinch bugs represent a <strong className="text-white">Climate-Driven Escalation</strong> in the Treasure Valley.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-4 tracking-wider flex items-center gap-2 text-white">The Vascular Clog</h3>
                        <p className="mb-6 leading-relaxed">
                            Chinch bugs don't just eat the grass; they physically pierce the plant collar and inject a phytotoxin that <strong className="text-[#39B54A]">clogs the vascular tissue</strong>. The plant is chemically blocked from absorbing moisture, leading to rapid decline.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-4 tracking-wider flex items-center gap-2 text-white">The Financial Hook: Ghost Drought</h3>
                        <p className="mb-8 leading-relaxed">
                            Because the damage mimics severe dehydration, this is the #1 cause of <strong className="text-white">"Ghost Drought"</strong> in the Treasure Valley. Homeowners routinely waste thousands of gallons of water trying to green up a lawn that cannot physically drink due to these toxins.
                        </p>

                        {/* Visual Data Card: Species Differentiation */}
                        <div className="my-10 bg-gradient-to-br from-[#2A363E] to-[#1E272D] border border-[#39B54A]/30 rounded-2xl p-6 shadow-xl">
                            <h4 className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm border-b border-gray-600/50 pb-3 mb-4">
                                <Bug size={18} className="text-[#39B54A]" /> Species Differentiation
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-black/20 p-5 rounded-xl border border-gray-500/50">
                                    <h5 className="font-bold text-gray-300 mb-2">False Chinch Bug <span className="text-sm font-normal italic">(Nysius raphanus)</span></h5>
                                    <p className="text-sm text-gray-400 mb-2 italic">The "Boise Nuisance"</p>
                                    <ul className="text-sm text-gray-300 space-y-2">
                                        <li>• <strong className="text-white">Behavior:</strong> Swarms walls, foundations, and gardens in massive numbers.</li>
                                        <li>• <strong className="text-white">Impact:</strong> Zero turf damage. Mostly a cosmetic annoyance.</li>
                                    </ul>
                                </div>
                                <div className="bg-black/20 p-5 rounded-xl border border-red-500/30">
                                    <h5 className="font-bold text-red-400 mb-2">Hairy Chinch Bug <span className="text-sm font-normal italic text-red-300/70">(Blissus hirtus)</span></h5>
                                    <p className="text-sm text-red-300/80 mb-2 italic">The "Turf Killer"</p>
                                    <ul className="text-sm text-gray-300 space-y-2">
                                        <li>• <strong className="text-white">Behavior:</strong> Targets Kentucky Bluegrass & Fescue specifically.</li>
                                        <li>• <strong className="text-white">Impact:</strong> Widespread localized collapse; requires precision intervention.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* The GDD Window */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <Activity className="text-[#39B54A]" size={28} />
                            The GDD Window (Ada County)
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            Preventative entomology is a game of mathematics, not calendar dates. At Lush, we utilize <strong className="text-white">Growing Degree Days (GDD)</strong> based on a 50°F threshold to predict exact insect emergence.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            For Bluegrass Billbugs in Ada County, adult emergence from overwintering sites mathematically triggers between <strong className="text-white bg-[#39B54A]/20 px-2 py-1 rounded">560-624 GDD</strong>. Applying traditional contact insecticides outside of this highly specific biological window is ineffective and environmentally irresponsible.
                        </p>

                        {/* The Emerging Threat */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <Bug className="text-[#39B54A]" size={28} />
                            The Emerging Threat
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            Historically, Boise turf was primarily threatened by Billbugs and Webworms. However, modern over-irrigation practices have fueled the rise of the <strong className="text-white">Common Crane Fly (Leatherjackets)</strong>. These larvae thrive in perpetually soggy soils, aggressively feeding on root crowns in early spring.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Our primary cultural defense against Leatherjackets is the <strong className="text-white">Labor Day Drought Stress</strong> method. By intentionally withholding water for 7-10 days in early September, we dry out the top inch of the soil profile, creating a hostile environment precisely when adult Crane Flies are attempting to lay eggs.
                        </p>

                        {/* Visual Data Card: The Lifecycle Clock */}
                        <div className="my-10 bg-gradient-to-br from-[#2A363E] to-[#1E272D] border border-[#39B54A]/30 rounded-2xl p-6 shadow-xl">
                            <h4 className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm border-b border-gray-600/50 pb-3 mb-4">
                                <Clock size={18} className="text-[#39B54A]" /> The Lifecycle Clock
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-1/3 text-right font-bold text-gray-300">April - May</div>
                                    <div className="w-2/3 bg-black/30 p-3 rounded-lg border-l-4 border-blue-500 text-sm text-gray-300">
                                        <strong className="text-white">Crane Fly Larvae:</strong> Spring root feeding active.
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-1/3 text-right font-bold text-gray-300">July - August</div>
                                    <div className="w-2/3 bg-black/30 p-3 rounded-lg border-l-4 border-red-500 text-sm text-gray-300">
                                        <strong className="text-white">Bluegrass Billbugs:</strong> Peak vascular damage.
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-1/3 text-right font-bold text-gray-300">Aug - Sept</div>
                                    <div className="w-2/3 bg-black/30 p-3 rounded-lg border-l-4 border-orange-500 text-sm text-gray-300">
                                        <strong className="text-white">Sod Webworms:</strong> High moth flight and silk tunneling.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* The Soft Chemistry Standard & Microbiome */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <ShieldCheck className="text-[#39B54A]" size={28} />
                            The Soft Chemistry Standard
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            When intervention is mathematically required, Lush relies exclusively on <strong className="text-white">Soft Chemistry</strong>. Legacy organophosphates indiscriminately sterilized the soil. We utilize advanced localized systemics like Chlorantraniliprole (Acelepryn), which targets the specific ryanodine receptors of chewing insects while bypassing predatory organisms entirely.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            Crucially, this early-season Acelepryn protocol for Billbugs provides <strong className="text-white">Synergistic Suppression</strong> for Chinch bug populations, stopping both threats simultaneously and preventing peak summer collapse.
                        </p>

                        <div className="bg-[#39B54A]/10 border border-[#39B54A]/20 p-6 rounded-xl my-8">
                            <h4 className="flex items-center gap-2 text-[#39B54A] font-bold uppercase tracking-widest text-sm mb-3">
                                <Sprout size={18} /> Microbiome Synergy
                            </h4>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                Preserving the soil microbiome is critical. Soft chemistry allows beneficial predatory nematodes to survive and hunt surviving larvae. Furthermore, it protects <strong className="text-white">Arbuscular Mycorrhizal Fungi (AMF)</strong> networks, which geometrically expand the root system's ability to scavenge water—providing essential stress tolerance to turf recovering from pest feeding.
                            </p>
                        </div>
                    </article>

                    {/* Final CTA */}
                    <div className="mt-20 text-center animate-in slide-in-from-bottom-4 fade-in duration-700 w-full max-w-3xl mx-auto border-t border-gray-700/50 pt-16" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
                        <h3 className="text-2xl md:text-3xl font-black mb-8 text-white tracking-wide uppercase">
                            Ready for the <span className="text-[#39B54A]">Lush Standard?</span>
                        </h3>
                        <Link
                            href="/?quote=true"
                            className="inline-flex items-center gap-3 bg-[radial-gradient(ellipse_at_center,_#33FF00_0%,_#39B54A_100%)] px-10 py-5 rounded-full font-extrabold text-[#36454F] hover:scale-105 hover:bg-[radial-gradient(ellipse_at_center,_#2ce000_0%,_#32a042_100%)] transition-all shadow-[0_0_25px_rgba(51,255,0,0.4)] border border-[#006600] text-lg uppercase tracking-wider"
                        >
                            <ShieldCheck size={24} />
                            Request Free Quote
                        </Link>
                    </div>

                </main>
            </div>
        </div>
    );
}
