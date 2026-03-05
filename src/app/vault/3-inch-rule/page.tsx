import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { getArticleBySlug } from '@/data/vault';
import { ShieldCheck, Target } from 'lucide-react';

export const metadata = {
    title: 'The 3-Inch Rule | Lush Knowledge Vault',
    description: 'In the 100°F Boise heat, your lawn is a thermal buffer. Discover why a 2-inch cut is cooking your roots and fueling Puncturevine growth.',
  alternates: { canonical: '/vault/3-inch-rule' }
};

export default function ThreeInchRuleArticle() {
    const article = getArticleBySlug('3-inch-rule');

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
                                <Target size={16} /> {article.category}
                            </span>
                            <span className="text-xs text-gray-400 font-bold tracking-widest border border-gray-600/50 bg-gray-800/50 px-4 py-2 rounded-full uppercase">
                                {article.readTime} Read
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight text-white">
                            The 3-Inch Rule:<br />
                            <span className="text-gray-300 font-extrabold text-3xl md:text-4xl block mt-2">Why Mowing Height is the Secret to a Weed-Free Lawn</span>
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
                                    src="/Info Graphics/High Cut Infographic.png"
                                    alt="Lush 10 Turf Science: 4-inch vs 2-inch mowing height comparison for Boise, Idaho lawns."
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-contain"
                                    priority
                                    unoptimized
                                />
                                <div className="p-4 bg-gray-900 border-t border-gray-800 text-center">
                                    <p className="text-sm text-gray-400 italic font-sans m-0">
                                        Figure 1: The Bio-Thermal Shield. Scientific analysis of canopy height effects on soil temperature and root-to-shoot ratios in the high-desert Treasure Valley.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-16 mb-6 uppercase tracking-wider">The Root-to-Shoot Factory</h2>
                            <p className="mb-6 leading-relaxed">
                                In turfgrass science, there is an undisputed principle known as <strong className="text-white">Rhizosphere Engineering</strong>. The depth of a plant's root system is directly mirrored by the height of its canopy.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                When you maintain turf at a lush <strong className="text-white">4.0"</strong>, the plant is signaled to push its root systems <strong className="text-white">12-20"</strong> deep into the soil. Conversely, frequent 2.0" cuts physically stunt this process. The infrastructure comparison illustrates the <strong className="text-white">94% root mass entrapment</strong> found in commercial-cut turf.
                            </p>

                            {/* Data Card 1 */}
                            <div className="my-10 bg-gray-900 border-l-4 border-red-500 p-6 rounded-r-xl shadow-lg">
                                <h4 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2">Infrastructure Deficit</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-white font-bold text-lg">2.0" Cut</p>
                                        <p className="text-gray-400 text-sm">Shallow Roots, Thirsty, Stressed.</p>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-lg">4.0" Cut</p>
                                        <p className="text-[#39B54A] text-sm font-semibold">Deep-Well Roots, Resilient.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider">The 70-Degree Rule</h2>
                            <p className="mb-6 leading-relaxed">
                                Cool-season grasses experience physiological shutdown when soil temperatures exceed <strong className="text-white">70°F</strong>. During a 100°F Boise summer, exposed soil practically bakes.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                As visualized in the Bio-Thermal Shield data above, the <strong className="text-white">20°F temperature delta</strong> generated by a 4" canopy acts as a crucial biological air conditioner for the rhizosphere, allowing roots to continue growing and uptaking nutrients while short-mown lawns forcefully enter heat dormancy.
                            </p>

                            {/* Data Card 2 */}
                            <div className="my-10 bg-gray-900 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-lg">
                                <h4 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2">Thermal Shield</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    A tall canopy shades the soil, dropping ground temperatures by up to 20°F and dramatically reducing moisture evaporation rates.
                                </p>
                            </div>

                            <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider">Competitive Exclusion</h2>
                            <p className="mb-6 leading-relaxed">
                                Weeds like Crabgrass and Puncturevine (Goatheads) require intense sunlight and bare, warm soil to germinate. A dense, tall canopy utilizes the principle of <strong className="text-white">Competitive Exclusion</strong>. By physically blocking light and heat from reaching the soil surface, weed seeds remain dormant. A thick lawn is its own pre-emergent herbicide.
                            </p>

                            <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider">Hydrological Efficiency</h2>
                            <p className="mb-8 leading-relaxed">
                                Short-mown lawns require shallow, daily watering cycles just to survive the heat, creating weak, dependent plants. A 3-to-4 inch canopy with deep roots thrives on <strong className="text-[#39B54A]">Deep and Infrequent</strong> irrigation. This pulls roots further down, saving massive amounts of water while creating a fortress of green turf that outcompetes local weeds.
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
