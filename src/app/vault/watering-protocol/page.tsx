import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { getArticleBySlug } from '@/data/vault';
import { ShieldCheck, Droplet } from 'lucide-react';

export const metadata = {
    title: 'The Deep & Infrequent Protocol | Lush Knowledge Vault',
    description: 'Master the Golden Ratio of Irrigation for Boise Turf. Learn how to prevent runoff, push deep roots, and save water.',
  alternates: { canonical: '/vault/watering-protocol' }
};

export default function WateringProtocolArticle() {
    const article = getArticleBySlug('watering-protocol');

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


                <article className="px-4 py-16 w-full max-w-4xl mx-auto flex flex-col items-center">
                    <header className="w-full text-center mb-12 animate-in slide-in-from-bottom-4 fade-in duration-500">
                        <div className="flex justify-center gap-3 mb-6">
                            <span className="flex items-center gap-2 text-xs font-bold text-[#39B54A] uppercase tracking-wider bg-[#39B54A]/10 px-4 py-2 rounded-full border border-[#39B54A]/20 shadow-[0_0_15px_rgba(57,181,74,0.1)]">
                                <Droplet size={16} /> {article.category}
                            </span>
                            <span className="text-xs text-gray-400 font-bold tracking-widest border border-gray-600/50 bg-gray-800/50 px-4 py-2 rounded-full uppercase">
                                {article.readTime} Read
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight text-white">
                            The Deep & Infrequent Protocol:<br />
                            <span className="text-gray-300 font-extrabold text-3xl md:text-4xl block mt-2">Mastering the Golden Ratio for Boise Turf</span>
                        </h1>

                        {/* Author Block */}
                        <div className="text-sm font-medium text-gray-400 border-b border-[#39B54A]/30 pb-8 flex justify-center items-center gap-4 uppercase tracking-widest">
                            By <span className="text-[#39B54A] font-bold">{article.author}</span>
                        </div>
                    </header>

                    <div className="w-full max-w-3xl mx-auto animate-in slide-in-from-bottom-8 fade-in duration-700 font-serif" style={{ animationDelay: '150ms', animationFillMode: 'both' }}>

                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-12 italic border-l-4 border-[#39B54A] pl-6">
                            "{article.excerpt}"
                        </p>

                        <div className="prose prose-invert prose-emerald prose-lg max-w-none text-gray-300">

                            {/* Infographic Hero */}
                            <div className="my-12 relative w-full rounded-2xl overflow-hidden border border-[#39B54A]/30 shadow-[0_0_30px_rgba(57,181,74,0.15)] group bg-[#111]">
                                <Image
                                    src="/Info Graphics/Irrigation Infographic.png"
                                    alt="Lush 10 Golden Ratio Infographic: Cycle and Soak irrigation protocol for Boise, ID. Explaining 0.35-inch daily water loss and 10-minute runoff threshold."
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-contain"
                                    priority
                                    unoptimized
                                />
                                <div className="p-4 bg-gray-900 border-t border-gray-800 text-center">
                                    <p className="text-sm text-gray-400 italic font-sans m-0">
                                        Figure 1: The Golden Ratio. Cycle and Soak irrigation protocol for the high-desert Treasure Valley environment.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-16 mb-6 uppercase tracking-wider">The Atmospheric Demand</h2>
                            <p className="mb-6 leading-relaxed">
                                In the harsh, high-desert climate of the Treasure Valley, a blazing 100°F July day results in an average daily moisture loss (evapotranspiration) of roughly <strong className="text-white">0.35 inches</strong>.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                This massive atmospheric demand means the average residential lawn requires 1.5 to 2.0 inches of water per week just to stay alive. The problem is that most outdated sprinkler clocks try to replace this loss in entirely the wrong way.
                            </p>

                            <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider">The Infiltration Mismatch</h2>
                            <p className="mb-6 leading-relaxed">
                                Let's look at the "Ada Series" soil composition common throughout Boise and Meridian. This heavy clay-loam structure has an <strong className="text-white">infiltration rate of roughly 0.15 inches per hour</strong>.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                Meanwhile, standard spray heads dump water at a staggering <strong className="text-white">1.5+ inches per hour</strong>. This creates the <strong className="text-white">10-Minute Runoff Threshold</strong>. After approximately 10 minutes of runtime, the topsoil clogs. Any additional water immediately runs off into the gutter, carrying away expensive fertilizers while doing absolutely nothing for the grass.
                            </p>

                            {/* Data Card 1 */}
                            <div className="my-10 bg-gray-900 border-l-4 border-orange-500 p-6 rounded-r-xl shadow-lg">
                                <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">The Runoff Clock</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Running a spray head for 20 straight minutes assumes the soil is a sponge. In reality, the final 10 minutes are physically repelled by the ground. You are literally washing money down the storm drain.
                                </p>
                            </div>

                            <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider">The Cycle and Soak Protocol</h2>
                            <p className="mb-6 leading-relaxed">
                                The scientific solution is staggering the delivery. To achieve the necessary 20-minute water volume without runoff, we utilize capillary forces via <strong className="text-white">Cycle and Soak</strong>.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                Instead of one 20-minute cycle, the zone is programmed for <strong className="text-white">two 10-minute cycles separated by a full 1-hour "soak" period</strong>. During that hour of rest, the initial water volume slowly percolates deeper into the soil profile via capillary action, opening the pores of the soil so that the second 10-minute pass absorbs instantly without pooling.
                            </p>

                            <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider">The Golden Ratio</h2>
                            <p className="mb-8 leading-relaxed">
                                This builds the formula for the undisputed Lush Standard: <strong className="text-white">1.5 inches of water per week, delivered intensely over exactly 3 watering days</strong> (0.50 inches per event).
                            </p>

                            {/* Data Card 2 */}
                            <div className="my-10 bg-gray-900 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-lg">
                                <h4 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2">The 6-Inch Wetting Front</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    The "Lush Standard" for root health validation: After a cycle-and-soak event, a standard 6-inch screwdriver should easily sink to its hilt into the soil. If it stops at 2 inches, your wetting front has failed.
                                </p>
                            </div>

                            <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider">Biological Consequences</h2>
                            <p className="mb-8 leading-relaxed">
                                If you ignore the Golden Ratio and water a little bit every single day, you create a constantly damp surface environment. This is the exact biological trigger required by <strong className="text-white">Necrotic Ring Spot</strong> fungus and invasive <strong className="text-white">Annual Bluegrass (Poa Annua)</strong>. By abandoning daily watering and forcing the soil to dry out between deep soakings, you suffocate shallow-rooted weeds and starve fungal diseases while forcing your turf's primary root system deep into the subterranean thermal shield.
                            </p>

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
