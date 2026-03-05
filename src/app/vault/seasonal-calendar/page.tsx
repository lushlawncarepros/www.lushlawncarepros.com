import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { Sprout, DollarSign, ShieldCheck, Thermometer, AlertTriangle, Layers, CalendarClock, Shield } from 'lucide-react';
import { getArticleBySlug } from '@/data/vault';

export const metadata: Metadata = {
    title: 'The Precision Clockwork: Boise’s Truth-Based Turf Calendar | Lush 2026',
    description: 'The grass doesn’t have a calendar; it has a thermometer. Discover why the "55°F Threshold" and seasonal height shifts are the difference between a $450 season and a $3,200 renovation tax.',
  alternates: { canonical: '/vault/seasonal-calendar' }
};

export default function SeasonalCalendarArticle() {
    const article = getArticleBySlug('seasonal-calendar');

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
                            The Precision Clockwork:<br />
                            <span className="text-gray-300 font-extrabold text-3xl md:text-4xl block mt-2">Boise’s Truth-Based Turf Calendar</span>
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
                                src="/Info Graphics/Lush Calendar Infographic.png"
                                alt="Lush 10 Precision Clockwork: Agronomic Calendar mapped to Boise's soil temperature milestones and the 55°F threshold."
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                                priority
                            />
                        </div>
                    </section>

                    <article className="prose prose-invert prose-emerald prose-lg max-w-3xl w-full text-gray-300">

                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-12 italic border-l-4 border-[#39B54A] pl-6">
                            "The grass doesn’t have a calendar; it has a thermometer. Discover why the '55°F Threshold' and seasonal height shifts are the difference between a $450 season and a $3,200 renovation tax."
                        </p>

                        {/* The Thermometer Standard */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <Thermometer className="text-[#39B54A]" size={28} />
                            The Thermometer Standard (Biological)
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            Nature operates on thermal energy, not the Gregorian calendar. It is a common mistake to apply pre-emergents on arbitrary dates like "April 1st," hoping it aligns with weed germination. In reality, Boise's extreme micro-climates render calendar dates irrelevant.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            The true biological trigger for Crabgrass and Spurge germination is a sustained <strong className="text-white">soil temperature of 55°F</strong> for 72 consecutive hours. We call tracking this <strong className="text-white">The Thermometer Standard</strong>. A preventative barrier must be perfectly timed to this thermal milestone to stop the vegetative cycle before a single weed breaches the canopy. Missing this window by even four days can result in zero effectiveness. While Lush focuses strictly on precision mowing, we highly advise aligning any weed prevention strategy to this exact biological clock.
                        </p>

                        {/* Visual Data Card: Soil Temp Milestones */}
                        <div className="my-10 bg-[#2A363E] border border-gray-600/50 rounded-2xl p-6 shadow-xl">
                            <h4 className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm border-b border-gray-600/50 pb-3 mb-6">
                                <Thermometer size={18} className="text-orange-400" /> Key Soil Temp Milestones
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl border-l-4 border-yellow-500">
                                    <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 border border-yellow-500/50">
                                        <span className="font-bold text-yellow-500 text-lg">55°F</span>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white text-md">The Shield Window</h5>
                                        <p className="text-sm text-gray-400 line-clamp-2">Pre-emergent barrier required. Crabgrass germination initiated in top soil layer.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl border-l-4 border-emerald-500">
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/50">
                                        <span className="font-bold text-emerald-500 text-lg">65°F</span>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white text-md">Golden Ratio Irrigation</h5>
                                        <p className="text-sm text-gray-400 line-clamp-2">Kentucky Bluegrass entering optimal metabolic efficiency. Deep cycling required.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl border-l-4 border-blue-500">
                                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/50">
                                        <span className="font-bold text-blue-500 text-lg">50°F</span>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white text-md">Metabolic Dormancy</h5>
                                        <p className="text-sm text-gray-400 line-clamp-2">Top-growth ceases. Root accumulation begins. Proceed with Winterization Cut.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* The Spring Flush Trap */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <AlertTriangle className="text-[#39B54A]" size={28} />
                            The Spring Flush Trap (Financial/Biological)
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            It is a common marketing tactic to apply heavy, salt-based nitrogen the moment the snow melts to force a vibrant, artificial green color. We call this the <strong className="text-white">Spring Flush Trap</strong>.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Forcing explosive top-growth early in the season acts as a hidden <strong className="text-white">Mowing Tax</strong>, doubling your necessary cuts. More critically, it demands that the plant expend all stored carbohydrate resources on leaves rather than roots. When July brings 102°F temperatures, these synthetically pushed, shallow-rooted lawns experience a total "Summer Collapse" that costs thousands in aeration, over-seeding, and excess water to rescue.
                        </p>

                        {/* The Dynamic Mowing Curve */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <Layers className="text-[#39B54A]" size={28} />
                            The Dynamic Mowing Curve (Financial)
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            A stationary mowing deck is the hallmark of an amateur service. The height of the turf canopy directly regulates the temperature of the soil and the depth of the root system. Lush technicians adjust deck heights on a strict, bi-weekly biological curve.
                        </p>

                        {/* Visual Data Card: The Lush Mowing Curve */}
                        <div className="my-10 bg-gradient-to-br from-[#2A363E] to-[#1E272D] border border-[#39B54A]/30 rounded-2xl p-6 shadow-xl">
                            <h4 className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm border-b border-gray-600/50 pb-3 mb-6">
                                <Layers size={18} className="text-[#39B54A]" /> The Lush Mowing Curve
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-black/40 border border-gray-600/50 rounded-xl p-4 text-center hover:border-[#39B54A]/50 transition-colors">
                                    <div className="text-xl font-bold text-gray-400 mb-1">March-April</div>
                                    <div className="text-3xl font-black text-white mb-2">2.5"</div>
                                    <div className="text-xs text-[#39B54A] font-bold uppercase tracking-widest mb-2">Spring Wake-Up</div>
                                    <p className="text-xs text-gray-400">Allows sunlight to penetrate the canopy, rapidly warming the soil to break dormancy naturally.</p>
                                </div>

                                <div className="bg-[#39B54A]/10 border border-[#39B54A]/40 rounded-xl p-4 text-center transform md:scale-105 shadow-[0_0_20px_rgba(57,181,74,0.1)]">
                                    <div className="text-xl font-bold text-[#39B54A] mb-1">June-August</div>
                                    <div className="text-4xl font-black text-white mb-2">3.5" - 4.0"</div>
                                    <div className="text-xs text-[#39B54A] font-bold uppercase tracking-widest mb-2">Summer Heat Shield</div>
                                    <p className="text-xs text-gray-300">Casts a micro-shadow that drops soil temperatures by 20°F and slashes irrigation costs by 30%.</p>
                                </div>

                                <div className="bg-black/40 border border-gray-600/50 rounded-xl p-4 text-center hover:border-blue-500/50 transition-colors">
                                    <div className="text-xl font-bold text-gray-400 mb-1">November</div>
                                    <div className="text-3xl font-black text-white mb-2">2.5" - 3"</div>
                                    <div className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-2">Winterization Cut</div>
                                    <p className="text-xs text-gray-400">Removes matted growth and prevents fungal activity (Snow Mold) under the winter snowpack.</p>
                                </div>
                            </div>
                        </div>

                        {/* The Recovery Window */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <CalendarClock className="text-[#39B54A]" size={28} />
                            The Recovery Window
                        </h2>
                        <p className="mb-8 leading-relaxed">
                            True agronomic mastery involves utilizing environmental stress as a tool. Between <strong className="text-white">Sept 1st and Oct 15th</strong>, we enter the "Golden Window." By inducing calculated "Labor Day Drought Stress," we weaponize the dehydration to naturally eradicate newly hatched Crane Fly larvae in the topsoil before they burrow deep for the winter—a completely biological pest control method that saves hundreds in insecticide applications.
                        </p>

                        {/* Prevention vs. Rescue */}
                        <h2 className="text-[#39B54A] text-2xl md:text-3xl font-bold mt-12 mb-6 uppercase tracking-wider flex items-center gap-3">
                            <Shield className="text-[#39B54A]" size={28} />
                            Prevention vs. Rescue (The 60% Financial Hook)
                        </h2>
                        <p className="mb-8 leading-relaxed">
                            Attempting to "rescue" a lawn after ignoring biological milestones is an unwinnable, expensive war. Fixing a lawn that collapsed due to a poor physiological foundation involves mechanical aeration, hundreds of pounds of seed, and months of waiting. At Lush, we believe in radical prevention.
                        </p>

                        {/* Visual Data Card: The Financial Delta */}
                        <div className="my-10 bg-[#2A363E] border border-red-500/20 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                            <h4 className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm border-b border-gray-600/50 pb-3 mb-6">
                                <DollarSign size={18} className="text-red-400" /> The Financial Delta
                            </h4>

                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Reactive Renovation */}
                                <div className="flex-1 bg-black/30 p-5 rounded-xl border border-red-500/30">
                                    <div className="flex justify-between items-center mb-4">
                                        <h5 className="font-bold text-red-400 uppercase text-xs tracking-wider">Reactive Renovation</h5>
                                        <span className="text-red-400 text-xl font-black">~$3,200</span>
                                    </div>
                                    <ul className="text-sm text-gray-300 space-y-3">
                                        <li className="flex justify-between border-b border-gray-700/50 pb-2"><span>Sod Cutting & Tear-out</span> <span className="font-mono text-gray-400">$600</span></li>
                                        <li className="flex justify-between border-b border-gray-700/50 pb-2"><span>Soil Prep & Compost</span> <span className="font-mono text-gray-400">$400</span></li>
                                        <li className="flex justify-between border-b border-gray-700/50 pb-2"><span>New KBG Sod & Install</span> <span className="font-mono text-gray-400">$2,000</span></li>
                                        <li className="flex justify-between border-b border-gray-700/50 pb-2"><span>Establishment Watering</span> <span className="font-mono text-gray-400">$200+</span></li>
                                    </ul>
                                </div>

                                {/* Lush Prevention */}
                                <div className="flex-1 bg-black/30 p-5 rounded-xl border border-[#39B54A]">
                                    <div className="flex justify-between items-center mb-4">
                                        <h5 className="font-bold text-[#39B54A] uppercase text-xs tracking-wider">Lush Preventative Shield</h5>
                                        <span className="text-[#39B54A] text-xl font-black">~$450/yr</span>
                                    </div>
                                    <ul className="text-sm text-gray-300 space-y-3">
                                        <li className="flex justify-between border-b border-gray-700/50 pb-2"><span>Strategic Intervention</span> <span className="font-mono text-gray-400">Included</span></li>
                                        <li className="flex justify-between border-b border-gray-700/50 pb-2"><span>Microbial Defense</span> <span className="font-mono text-gray-400">Included</span></li>
                                        <li className="flex justify-between border-b border-gray-700/50 pb-2"><span>Dynamic Curve Mowing</span> <span className="font-mono text-gray-400">Included</span></li>
                                        <li className="flex justify-between border-b border-gray-700/50 pb-2"><span>Result</span> <span className="font-bold text-[#39B54A]">Zero Collapse</span></li>
                                    </ul>
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
