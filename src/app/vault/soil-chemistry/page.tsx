import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { FlaskConical, ShieldAlert, DollarSign, Pickaxe, Banknote, ShieldCheck, Activity } from 'lucide-react';
import { getArticleBySlug } from '@/data/vault';

export const metadata: Metadata = {
    title: 'The Alkaline Battle: Bypassing the Boise Soil Lock-out | Lush 2026',
    description: 'Boise soil is a chemical bank vault. Discover why 60% of standard fertilizer vanishes into thin air and how "Chelated" science unlocks hidden nutrients.',
  alternates: { canonical: '/vault/soil-chemistry' }
};

export default function SoilChemistryArticle() {
    const article = getArticleBySlug('soil-chemistry');

    if (!article) return null;

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
                                <FlaskConical size={16} /> {article.category}
                            </span>
                            <span className="text-xs text-gray-400 font-bold tracking-widest border border-gray-600/50 bg-gray-800/50 px-4 py-2 rounded-full uppercase">
                                {article.readTime} Read
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight text-white">
                            The Alkaline Battle:<br />
                            <span className="text-gray-300 font-extrabold text-3xl md:text-4xl block mt-2">Bypassing the Boise Soil Lock-out</span>
                        </h1>

                        {/* Author Block */}
                        <div className="text-sm font-medium text-gray-400 border-b border-[#39B54A]/30 pb-8 flex justify-center items-center gap-4 uppercase tracking-widest">
                            By <span className="text-[#39B54A] font-bold">{article.author}</span>
                        </div>
                    </header>

                    {/* Infographic Integration */}
                    <section className="w-full mb-16 animate-in slide-in-from-bottom-8 fade-in duration-700 font-serif pt-2" style={{ animationDelay: '150ms', animationFillMode: 'both' }}>
                        <div className="relative w-full rounded-2xl overflow-hidden border border-[#39B54A]/30 shadow-[0_0_30px_rgba(57,181,74,0.1)] group bg-[#2A363E]">
                            <Image
                                src="/Info Graphics/Soil Lock-out Infographic.png"
                                alt="Lush 10 Soil Chemistry Infographic: Explaining the &quot;Bank Vault&quot; nutrient lockout and nitrogen volatilization in Boise, ID high-pH soils."
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                                priority
                            />
                        </div>
                    </section>

                    <article className="prose prose-invert prose-emerald prose-lg max-w-3xl w-full text-gray-300">

                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-12 italic border-l-4 border-[#39B54A] pl-6">
                            "In the high-alkaline environment of the Treasure Valley, your soil isn't just a growing medium—it's a chemical defense system that locks your nutrients away."
                        </p>

                        {/* The Bank Vault Reality */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <ShieldAlert className="text-[#39B54A]" size={28} />
                            The Bank Vault Reality (Biological)
                        </h2>
                        <p className="mb-8 leading-relaxed">
                            Boise soil is <strong className="text-white">10x to 50x more alkaline</strong> than the ideal environment turfgrass prefers. Typical cool-season grasses thrive in a pH of 6.5. In Ada and Canyon counties, our soil pH routinely hits <strong className="text-white">7.5 to 8.5</strong>. This intense alkalinity acts like a steel door, chemically binding essential micronutrients like Iron, Manganese, and Phosphorus directly into the soil structure, making them 100% unavailable to the plant roots—even if the soil is packed with them.
                        </p>

                        {/* Visual Data Card: The pH Scale Card */}
                        <div className="my-10 bg-[#2A363E] border border-gray-600/50 rounded-2xl p-6 shadow-xl">
                            <h4 className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm border-b border-gray-600/50 pb-3 mb-4">
                                <Activity size={18} className="text-[#39B54A]" /> The pH Scale Lockout Zones
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-1/4 text-right font-bold text-[#39B54A]">pH 6.5</div>
                                    <div className="w-3/4 bg-black/30 p-3 rounded-lg border-l-4 border-[#39B54A] text-sm text-gray-300">
                                        <strong className="text-white">Turf Ideal:</strong> Near 100% nutrient availability. Roots feed freely.
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-1/4 text-right font-bold text-orange-400">pH 7.5</div>
                                    <div className="w-3/4 bg-black/30 p-3 rounded-lg border-l-4 border-orange-500 text-sm text-gray-300">
                                        <strong className="text-white">Boise Baseline:</strong> Iron begins to heavily oxidize. Roots struggle.
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-1/4 text-right font-bold text-red-500">pH 8.5</div>
                                    <div className="w-3/4 bg-black/30 p-3 rounded-lg border-l-4 border-red-500 text-sm text-gray-300">
                                        <strong className="text-white">Treasure Valley Peak:</strong> Critical lockout. Manganese and Phosphorus are chemically trapped.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* The $100 Gas Leak */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <DollarSign className="text-[#39B54A]" size={28} />
                            The $100 Gas Leak (Financial Focus)
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            When standard, agricultural-grade Urea fertilizer hits Boise's alkaline soil on a hot day, a violent chemical reaction occurs known as <strong className="text-white">volatilization</strong>.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Because the pH is so high, the Nitrogen instantly converts into Ammonia Gas (NH3) rather than absorbing into the moisture profile. Up to <strong className="text-white">60% of the Nitrogen you paid for</strong> literally evaporates into thin air before the plant can consume a single ounce of it. This is why cheap fertilizer applications often show zero green-up in July.
                        </p>

                        {/* The Iron Rust Trap */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <Banknote className="text-[#39B54A]" size={28} />
                            The Iron Rust Trap (Financial Focus)
                        </h2>
                        <p className="mb-8 leading-relaxed">
                            Iron is required for deep-green chlorophyll production. To fix yellowing lawns, generic companies dump cheap <strong className="text-white">Iron Sulfate</strong>. However, turning bare Iron Sulfate into our high-pH, high-calcium soil causes it to rapidly oxidize. You are essentially paying for green grass, but chemically generating useless rust sediment.
                        </p>

                        {/* Visual Data Card: The Efficiency Drain */}
                        <div className="my-10 bg-gradient-to-br from-[#2A363E] to-[#1E272D] border border-[#39B54A]/30 rounded-2xl p-6 shadow-xl">
                            <h4 className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm border-b border-gray-600/50 pb-3 mb-4">
                                <Activity size={18} className="text-[#39B54A]" /> The Efficiency Drain
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-black/20 p-5 rounded-xl border border-red-500/20">
                                    <h5 className="font-bold text-red-400 mb-2">Standard Fertilizer</h5>
                                    <ul className="text-sm text-gray-300 space-y-2">
                                        <li>• <strong className="text-white">Nitrogen:</strong> Up to 60% lost to gas.</li>
                                        <li>• <strong className="text-white">Iron:</strong> Oxidizes to rust in hours.</li>
                                        <li>• <strong className="text-white">Financial Yield:</strong> Poor ROI.</li>
                                    </ul>
                                </div>
                                <div className="bg-black/20 p-5 rounded-xl border border-[#39B54A]/20">
                                    <h5 className="font-bold text-[#39B54A] mb-2">The Lush Standard</h5>
                                    <ul className="text-sm text-gray-300 space-y-2">
                                        <li>• <strong className="text-white">Labor Cost:</strong> Controlled growth (~$1,274/yr)</li>
                                        <li>• <strong className="text-white">Utility Cost:</strong> Optimized baseline watering</li>
                                        <li>• <strong className="text-white">Result:</strong> Deep root resilience & dark color</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* The Caliche Barrier */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <Pickaxe className="text-[#39B54A]" size={28} />
                            The Caliche Barrier
                        </h2>
                        <p className="mb-8 leading-relaxed">
                            Throughout Ada County, heavy irrigation eventually pushes calcium down through the soil profile until it hits a stopping point. Over decades, this calcium cements together, forming <strong className="text-white">Indurated Calcium Carbonate</strong>, locally known as Hardpan or Caliche. This impenetrable layer stops root penetration dead in its tracks and ruins soil drainage.
                        </p>

                        {/* The Lush Keycard */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <FlaskConical className="text-[#39B54A]" size={28} />
                            The Lush Keycard
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            We beat the bank vault by changing the locks. Instead of fighting the high pH, Lush utilizes <strong className="text-[#39B54A]">Fe-EDDHA Chelated Nutrients</strong>.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            A chelate (from the Greek word for 'Claw') is a specialized organic molecule that wraps around the raw mineral—protecting it from the surrounding alkaline soil. This chelated structure acts as an all-access keycard, allowing the nutrients to confidently bypass the alkaline door and feed the plant directly, remaining perfectly soluble and bio-available even in absurd pH ranges approaching 9.0.
                        </p>

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
