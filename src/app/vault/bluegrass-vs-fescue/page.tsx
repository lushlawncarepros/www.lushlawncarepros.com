import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { getArticleBySlug } from '@/data/vault';
import { ShieldCheck, Leaf } from 'lucide-react';

export const metadata = {
    title: 'The Bluegrass vs. Fescue Ultimatum | Lush Knowledge Vault',
    description: 'Discover why the deep roots of modern Turf-Type Tall Fescue (TTTF) provide a massive evolutionary advantage over traditional Kentucky Bluegrass (KBG) in Boise.',
  alternates: { canonical: '/vault/bluegrass-vs-fescue' }
};

export default function BluegrassVsFescueArticle() {
    const article = getArticleBySlug('bluegrass-vs-fescue');

    if (!article) return null;

    return (
        <div className="min-h-screen bg-[#111111] text-white font-sans overflow-x-hidden relative">
            {/* Deep Charcoal / Emerald Aesthetic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#39B54A]/5 blur-[120px]" />
                <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#2A363E]/80 blur-[150px]" />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">
                <Navigation />


                <article className="px-4 py-16 w-full max-w-4xl mx-auto flex flex-col items-center">
                    <header className="w-full text-center mb-12 animate-in slide-in-from-bottom-4 fade-in duration-500">
                        <div className="flex justify-center gap-3 mb-6">
                            <span className="flex items-center gap-2 text-xs font-bold text-[#39B54A] uppercase tracking-wider bg-[#39B54A]/10 px-4 py-2 rounded-full border border-[#39B54A]/20 shadow-[0_0_15px_rgba(57,181,74,0.1)]">
                                <Leaf size={16} /> {article.category}
                            </span>
                            <span className="text-xs text-gray-400 font-bold tracking-widest border border-gray-600/50 bg-gray-800/50 px-4 py-2 rounded-full uppercase">
                                {article.readTime} Read
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight text-white">
                            The Bluegrass vs. Fescue Ultimatum:<br />
                            <span className="text-gray-300 font-extrabold text-3xl md:text-4xl block mt-2">Surviving the Boise Micro-Climate</span>
                        </h1>

                        {/* Author Block */}
                        <div className="text-sm font-medium text-gray-400 border-b border-[#39B54A]/30 pb-8 flex justify-center items-center gap-4 uppercase tracking-widest">
                            By <span className="text-[#39B54A] font-bold">{article.author}</span>
                        </div>
                    </header>

                    <div className="w-full max-w-3xl mx-auto animate-in slide-in-from-bottom-8 fade-in duration-700 font-serif" style={{ animationDelay: '150ms', animationFillMode: 'both' }}>

                        {/* Precision Summary Box */}
                        <div className="mb-12 bg-gray-800/50 backdrop-blur-md border border-gray-700 p-8 rounded-2xl shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#39B54A]"></div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-[#39B54A] font-sans">Precision Summary</h3>
                            <p className="text-lg text-gray-300 leading-relaxed font-light m-0">
                                Boise&apos;s 100°F summers and alkaline clay soils demand a specific biological response. Discover why the deep roots of modern Turf-Type Tall Fescue (TTTF) provide a massive evolutionary advantage over the shallow rhizomes of traditional Kentucky Bluegrass (KBG), and how it saves homeowners an average of $29.00/month.
                            </p>
                        </div>

                        <div className="prose prose-invert prose-emerald prose-lg max-w-none text-gray-300">

                            <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-16 mb-6 uppercase tracking-wider font-sans">The &quot;Water Tax&quot;: Surviving Evapotranspiration</h2>
                            <p className="mb-6 leading-relaxed">
                                Irrigation management in Boise is not merely a task of supplementing rainfall but of managing a continuous, high-volume water demand. The &quot;Water Tax&quot; refers to the differential in water consumption required to keep various turf species green during the peak evapotranspiration period of June through August.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                Because traditional Kentucky Bluegrass (KBG) has a shallow root system, it cannot sustain the plant through even minor moisture deficits in the upper soil. To keep KBG green and actively growing in Boise, a homeowner must apply water more frequently—often 3 to 4 times per week, demanding massive water volume.
                            </p>

                            {/* Water Tax Comparison Module */}
                            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                                <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl flex flex-col items-center text-center shadow-lg">
                                    <h4 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">Kentucky Bluegrass (KBG)</h4>
                                    <div className="text-5xl font-black text-white mb-2">33.3</div>
                                    <div className="text-gray-500 font-medium mb-6">CCF / Month (July)</div>
                                    <p className="text-sm text-gray-400">High volume required to offset surface evaporation and shallow root depth.</p>
                                </div>
                                <div className="bg-[#2A363E]/80 border border-[#39B54A]/50 p-8 rounded-2xl flex flex-col items-center text-center shadow-[0_0_30px_rgba(57,181,74,0.15)] relative overflow-hidden">
                                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#39B54A]/20 rounded-full blur-xl pointer-events-none"></div>
                                    <h4 className="text-[#39B54A] font-bold uppercase tracking-widest text-sm mb-4">Turf-Type Tall Fescue (TTTF)</h4>
                                    <div className="text-5xl font-black text-white mb-2">21.6</div>
                                    <div className="text-[#39B54A] font-bold mb-6">CCF / Month (July)</div>
                                    <div className="bg-[#39B54A]/20 text-[#39B54A] font-bold px-4 py-1 rounded-full text-sm">
                                        ~$29.00 / Mo Savings
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-16 mb-6 uppercase tracking-wider font-sans">The Underground Advantage: Roots in Alkaline Clay</h2>
                            <p className="mb-6 leading-relaxed">
                                The fundamental difference in the performance of KBG and TTTF in the high desert lies in their respective hydraulic strategies. In the Boise micro-climate, the ability to exploit deep soil moisture is the primary determinant of drought avoidance.
                            </p>

                            {/* Infographic Visual Element */}
                            <div className="my-12 relative w-full rounded-2xl overflow-hidden border border-[#39B54A]/30 shadow-[0_0_30px_rgba(57,181,74,0.15)] group bg-[#111]">
                                <Image
                                    src="/Info Graphics/Bluegrass vs TTTF.png"
                                    alt="Root depth comparison of Kentucky Bluegrass (6-12 inches) vs Turf-Type Tall Fescue (24-48 inches) in Boise clay soil."
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-contain"
                                    priority
                                    unoptimized
                                />
                                <div className="p-4 bg-gray-900 border-t border-gray-800 text-center">
                                    <p className="text-sm text-gray-400 italic font-sans m-0">
                                        Figure 1: The Root Depth Dichotomy. TTTF taps into deep subterranean moisture entirely bypassing the severe 100°F surface heat experienced by KBG rhizomes.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-16 mb-6 uppercase tracking-wider font-sans">Aesthetic vs. Resilience: Modern Genetics</h2>
                            <p className="mb-6 leading-relaxed">
                                Historically, Kentucky Bluegrass was the undisputed king of aesthetics in the Intermountain West due to its fine texture and self-repairing rhizomes, while Fescue was viewed as a coarse, clumpy pasture grass. However, 30 years of turfgrass breeding have fundamentally shifted this paradigm.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                Modern TTTF cultivars possess significantly finer leaf blades that approach the aesthetic profile of KBG. Furthermore, Rhizomatous Tall Fescue (RTF) represents a genetic leap, producing true underground rhizomes that allow for lateral spread. This bridges the gap between fescue&apos;s deep-rooted durability and bluegrass&apos;s self-healing capabilities without the severe water penalty.
                            </p>

                            <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-16 mb-8 uppercase tracking-wider text-center font-sans">The Lush Verdict: The Smartest Investment</h2>
                            <p className="mb-10 leading-relaxed text-center">
                                Based on the synthesis of climatological data, edaphic constraints, and economic modeling for the Treasure Valley, here is the definitive scorecard for the Boise micro-climate.
                            </p>

                            {/* Lush Verdict Scorecard */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 font-sans">
                                <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold">1</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Water Scarcity Resilience</h4>
                                        <p className="text-sm text-gray-400">Deep-rooted architecture provides survival insurance against increasing drought frequencies.</p>
                                    </div>
                                </div>
                                <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-bold">2</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Economic Sustainability</h4>
                                        <p className="text-sm text-gray-400">A ~35% reduction in summer water use yields significant annual savings on Veolia utility bills.</p>
                                    </div>
                                </div>
                                <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center font-bold">3</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Aesthetic Competitiveness</h4>
                                        <p className="text-sm text-gray-400">RTF technology eliminates clumping and bridges the gap in side-by-side color and density comparisons.</p>
                                    </div>
                                </div>
                                <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold">4</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Soil Adaptability</h4>
                                        <p className="text-sm text-gray-400">Handles alkaline, clay-heavy soils easily, showing drastically fewer signs of iron chlorosis than KBG.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#39B54A]/10 border border-[#39B54A] p-6 rounded-2xl text-center shadow-[0_0_20px_rgba(57,181,74,0.15)] font-sans">
                                <h3 className="text-[#39B54A] font-black text-2xl uppercase tracking-widest mb-2">Definitive Winner</h3>
                                <p className="text-white text-xl font-bold">Turf-Type Tall Fescue (TTTF)</p>
                            </div>

                        </div>

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
                    </div>
                </article>
            </div>
        </div>
    );
}
