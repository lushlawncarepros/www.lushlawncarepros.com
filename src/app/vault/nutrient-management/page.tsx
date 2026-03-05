import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { Sprout, DollarSign, Droplet, ShieldCheck, Activity, Key, TrendingDown, FlaskConical } from 'lucide-react';
import { getArticleBySlug } from '@/data/vault';

export const metadata: Metadata = {
    title: 'Beyond N-P-K: The Hidden "Growth Tax" of Standard Fertilizers | Lush 2026',
    description: 'Stop paying the "Growth Tax." Discover why cheap urea is the most expensive habit in Boise and how our microbial "Safe Crackers" unlock your soil’s hidden gold.',
  alternates: { canonical: '/vault/nutrient-management' }
};

export default function NutrientManagementArticle() {
    const article = getArticleBySlug('nutrient-management');

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
                                <Sprout size={16} /> {article.category}
                            </span>
                            <span className="text-xs text-gray-400 font-bold tracking-widest border border-gray-600/50 bg-gray-800/50 px-4 py-2 rounded-full uppercase">
                                {article.readTime} Read
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight text-white">
                            Beyond N-P-K:<br />
                            <span className="text-gray-300 font-extrabold text-3xl md:text-4xl block mt-2">The Hidden "Growth Tax" of Standard Fertilizers</span>
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
                                src="/Info Graphics/Soil Nutrient Infographic.png"
                                alt="Lush 10 Soil Nutrient Management: Beyond N-P-K. Showing microbial interactions and the failure of synthetic salt fertilizers."
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                                priority
                            />
                        </div>
                    </section>

                    <article className="prose prose-invert prose-emerald prose-lg max-w-3xl w-full text-gray-300">

                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-12 italic border-l-4 border-[#39B54A] pl-6">
                            "Stop paying the Growth Tax. Discover why cheap urea is the most expensive habit in Boise and how our microbial Safe Crackers unlock your soil’s hidden gold."
                        </p>

                        {/* The Growth Tax */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <TrendingDown className="text-[#39B54A]" size={28} />
                            The Growth Tax (Financial Focus)
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            Most homeowners believe that faster growth equals a healthier lawn. This is a fundamental agronomical error. When you apply standard, high-Nitrogen (N) urea from a big-box store, you are forcing the plant into a violent, vertical growth spike.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            This creates <strong className="text-white">Physiological Debt</strong>. The turf exhausts its carbohydrate reserves to push weak, watery top-growth, abandoning its root system entirely. The financial result? Your mowing frequency doubles, and the weak cellular structure requires <strong className="text-white">30% higher water consumption</strong>. You are literally paying an extra <strong className="text-[#39B54A]">$637–$1,274 per season</strong> in labor and utilities just to manage the forced growth you paid to create.
                        </p>

                        {/* Visual Data Card: The Growth Tax Audit */}
                        <div className="my-10 bg-[#2A363E] border border-gray-600/50 rounded-2xl p-6 shadow-xl">
                            <h4 className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm border-b border-gray-600/50 pb-3 mb-4">
                                <DollarSign size={18} className="text-[#39B54A]" /> The Growth Tax Audit
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-black/20 p-5 rounded-xl border border-red-500/20">
                                    <h5 className="font-bold text-red-400 mb-2">High-N Program (Standard)</h5>
                                    <ul className="text-sm text-gray-300 space-y-2">
                                        <li>• <strong className="text-white">Labor Cost:</strong> Extraneous mowing (~$2,548/yr)</li>
                                        <li>• <strong className="text-white">Utility Cost:</strong> 30% water hike due to shallow roots</li>
                                        <li>• <strong className="text-white">Result:</strong> High maintenance, low heat tolerance</li>
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

                        {/* Osmotic Dehydration */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <Droplet className="text-[#39B54A]" size={28} />
                            Osmotic Dehydration (Biological)
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            Synthetic fertilizers are manufactured as highly concentrated salts. When applied to turf, they trigger the <strong className="text-white">Salt Index Trap</strong>. The salt crystals draw moisture out of the surrounding environment through osmosis.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            This doesn't just burn the grass blades; it chemically dehydrates and eradicates the beneficial soil biology. Regular application of synthetic salts reduces microbial richness by <strong className="text-white">over 14% per season</strong>, stripping the soil of its natural nutrient-cycling factory and creating a permanent chemical dependency.
                        </p>

                        {/* The Safe Crackers */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <Key className="text-[#39B54A]" size={28} />
                            The Safe Crackers (Biological)
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            Boise soil is inherently rich in Phosphorus (P), but our high pH (7.5-8.5) actively binds it to Calcium, rendering it 100% molecularly unavailable to the turf. Most companies try to solve this by dumping more Phosphorus, which simply binds to more Calcium.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            While not included in our standard maintenance programs, we highly recommend homeowners adopt the strategy of utilizing agronomical "Safe Crackers." By independently inoculating your soil with <strong className="text-white">Bacillus subtilis</strong> and <strong className="text-white">Arbuscular Mycorrhizal Fungi (AMF)</strong>, you can bypass the chemistry problem with a biological solution. These microbes secrete specialized phosphatase enzymes that actively dissolve the Calcium bonds, unlocking the "Phosphorus Gold" the soil already owns.
                        </p>

                        {/* Visual Data Card: The Microbiome Roster */}
                        <div className="my-10 bg-gradient-to-br from-[#2A363E] to-[#1E272D] border border-[#39B54A]/30 rounded-2xl p-6 shadow-xl">
                            <h4 className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm border-b border-gray-600/50 pb-3 mb-4">
                                <Activity size={18} className="text-[#39B54A]" /> The Microbiome Roster
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-1/4 text-right font-bold text-gray-300">Bacillus subtilis</div>
                                    <div className="w-3/4 bg-black/30 p-3 rounded-lg border-l-4 border-[#39B54A] text-sm text-gray-300">
                                        <strong className="text-white">The Enzyme Factory:</strong> Secretes phosphatase to break calcium-phosphorus bonds, freeing native nutrients.
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-1/4 text-right font-bold text-gray-300">Mycorrhizae (AMF)</div>
                                    <div className="w-3/4 bg-black/30 p-3 rounded-lg border-l-4 border-blue-500 text-sm text-gray-300">
                                        <strong className="text-white">The Root Extension:</strong> Physically fuses with turf roots, expanding surface area by 300% for extreme drought tolerance.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* The VIP Pass */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <FlaskConical className="text-[#39B54A]" size={28} />
                            The VIP Pass (Financial & Biological)
                        </h2>
                        <p className="mb-8 leading-relaxed">
                            When nutrients must be supplemented, delivery mechanics matter more than volume. Standard salt fertilizers rely on passive diffusion—meaning only <strong className="text-white">~30%</strong> actually enters the plant, while 70% washes into the storm drain. Lush utilizes <strong className="text-[#39B54A]">Amino Acid Chelates</strong>. Because amino acids are the building blocks of protein, the turf's cellular wall recognizes the molecule as "Food" rather than a synthetic chemical. The plant actively pulls the chelated payload inside (active transport), achieving a <strong className="text-white">90%+ absorption rate</strong>. We call this the biological VIP Pass.
                        </p>

                        {/* Visual Data Card: Absorption Efficiency */}
                        <div className="my-10 bg-[#2A363E] border border-[#39B54A]/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#39B54A]/5 rounded-bl-[100px] pointer-events-none" />
                            <h4 className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm border-b border-gray-600/50 pb-3 mb-6">
                                <Activity size={18} className="text-[#39B54A]" /> Foliar Absorption Efficiency
                            </h4>

                            <div className="space-y-6">
                                {/* Synthetic Salts */}
                                <div>
                                    <div className="flex justify-between text-sm font-bold mb-2">
                                        <span className="text-red-400">Standard Synthetic Salts</span>
                                        <span className="text-red-400">30%</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-3">
                                        <div className="bg-red-500/80 h-3 rounded-full" style={{ width: '30%' }}></div>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2 italic text-right">Requires passive diffusion; highly inefficient.</p>
                                </div>

                                {/* Amino Acid Chelates */}
                                <div>
                                    <div className="flex justify-between text-sm font-bold mb-2">
                                        <span className="text-[#39B54A]">Lush Amino Acid Chelates</span>
                                        <span className="text-[#39B54A]">90%+</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-3">
                                        <div className="bg-gradient-to-r from-[#39B54A] to-[#33FF00] h-3 rounded-full shadow-[0_0_10px_rgba(57,181,74,0.5)]" style={{ width: '92%' }}></div>
                                    </div>
                                    <p className="text-xs text-[#39B54A]/70 mt-2 italic text-right text-shadow">Active transport; recognized as organic food.</p>
                                </div>
                            </div>
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
