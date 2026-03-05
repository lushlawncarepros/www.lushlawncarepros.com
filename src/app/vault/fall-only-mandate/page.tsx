import { ShieldAlert, ThermometerSnowflake, Droplets, Calendar, DollarSign, ChevronRight, CheckCircle2, Sprout, AlertTriangle, Timer, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { vaultArticles } from '@/data/vault';
import { Navigation } from '@/components/Navigation';

export default function FallOnlyMandate() {
    const article = vaultArticles.find(a => a.slug === 'fall-only-mandate');

    if (!article) return null;

    return (
        <div className="min-h-screen bg-[#111111] text-white font-sans relative">
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
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tighter text-white">
                            {article.title}
                        </h1>

                        {/* Author Block */}
                        <div className="text-sm font-medium text-gray-400 border-b border-[#39B54A]/30 pb-8 flex justify-center items-center gap-4 uppercase tracking-widest">
                            By <span className="text-[#39B54A] font-bold">{article.author}</span>
                        </div>
                    </header>

                    {/* Infographic Integration */}
                    <section className="w-full mb-16 animate-in slide-in-from-bottom-8 fade-in duration-700 font-serif pt-2" style={{ animationDelay: '150ms', animationFillMode: 'both' }}>
                        <div className="bg-[#1A1A1A] border border-emerald-500/20 rounded-2xl p-2 md:p-4 opacity-90 hover:opacity-100 transition-opacity duration-500">
                            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden">
                                <Image
                                    src="/Info Graphics/Fall Mandate Infographic.png"
                                    alt="The Fall-Only Mandate Infographic"
                                    fill
                                    className="object-cover md:object-contain object-center"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </section>

                    {/* Main Content (60/40 Ratio) */}
                    <div className="w-full text-left relative z-20">
                        <p className="text-xl text-gray-300 font-light leading-relaxed border-l-4 border-[#39B54A] pl-6 py-2 mb-4">
                            {article.excerpt}
                        </p>
                        <p className="text-lg text-[#39B54A] font-medium leading-relaxed mb-12 italic">
                            In the Treasure Valley, spring aeration isn&apos;t a service—it&apos;s a self-inflicted wound to your property’s defensive perimeter.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                            {/* Left Column (60% - Financial/Strategic) */}
                            <div className="md:col-span-7 space-y-12">
                                {/* H2: The Broken Shield (Financial Focus) */}
                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-red-500/10 rounded-xl">
                                            <ShieldAlert className="w-6 h-6 text-red-500" />
                                        </div>
                                        <h2 className="text-2xl font-bold tracking-wider uppercase">The Broken Shield (Financial Focus)</h2>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                                        Aeration physically removes soil cores. When you aerate in the spring, you are removing up to <strong className="text-white">9.2% of the protective pre-emergent barrier</strong> you just paid to have applied.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                                        Homeowners are paying for a chemical 'seal' to block crabgrass and spurge, and then paying a second time to physically punch 30,000 holes in it. It is the definition of financial churn.
                                    </p>
                                </section>

                                {/* H2: The Thermal Trap (Biological) */}
                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-emerald-500/10 rounded-xl">
                                            <ThermometerSnowflake className="w-6 h-6 text-[#39B54A]" />
                                        </div>
                                        <h2 className="text-2xl font-bold tracking-wider uppercase">The Thermal Trap (Biological)</h2>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                                        Seed requires thermal energy to germinate. In April, Boise presents 'Cold Soil / Warming Air'—the exact opposite of what a seed needs to root deeply. Seed sits dormant, rotting in cold mud, or is quickly outcompeted by spring weeds.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                                        In September, Boise provides 'Warm Soil / Cooling Air'. The soil has stored months of solar radiation, acting as a germination incubator, while the cooling air prevents canopy stress. Fall provides <strong className="text-[#39B54A]">300% faster germination velocity</strong>.
                                    </p>
                                </section>

                                {/* H2: The Sidewall Smearing Trap (Local Truth) */}
                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-amber-500/10 rounded-xl">
                                            <AlertTriangle className="w-6 h-6 text-amber-500" />
                                        </div>
                                        <h2 className="text-2xl font-bold tracking-wider uppercase">The Sidewall Smearing Trap</h2>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                                        Boise sits on the Ada Series Clay profile. When this heavy clay is aerated in wet spring conditions, the tines create 'glazed' hole walls—a process known as sidewall smearing.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                                        Instead of alleviating compaction, wet spring aeration creates 30,000 miniature clay pots in your lawn, structurally blocking root penetration and creating a shallow, heat-susceptible root system.
                                    </p>
                                </section>

                                {/* H2: The 210-Day Head Start (Biological) */}
                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-[#39B54A]/10 rounded-xl">
                                            <Timer className="w-6 h-6 text-[#39B54A]" />
                                        </div>
                                        <h2 className="text-2xl font-bold tracking-wider uppercase">The 210-Day Head Start</h2>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                                        A spring-seeded plant has approximately 60 days to develop a root system capable of surviving the 'Boise Heat Wall' in July. Biologically, this is an impossible task for Kentucky Bluegrass.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                                        Fall seeding gives the plant <strong className="text-white">210 days</strong> of cool-season development before it ever faces a 100°F day. It survives the winter, establishes deep rhizomatic networks in early spring, and enters summer fully fortified.
                                    </p>
                                </section>

                                {/* H2: The $648.00 Annual Washout (The 60% Financial Hook) */}
                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-red-500/10 rounded-xl">
                                            <DollarSign className="w-6 h-6 text-red-500" />
                                        </div>
                                        <h2 className="text-2xl font-bold tracking-wider uppercase">The $648.00 Annual Washout</h2>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                                        Standard lawn care companies push spring aeration because it fits their cash flow schedule, not your agronomic needs. The result is a cycle of financial loss for the homeowner.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                                        When factoring in the compromised weed barrier, redundant labor, neutralized seed, and wasted water trying to force spring germination, the average Boise homeowner bleeds <strong className="text-red-400 font-mono">$648.00</strong> into the ground every spring. The mandate is clear: Aerate and overseed aggressively, but <strong className="text-[#39B54A]">only in exactly the right window.</strong>
                                    </p>
                                </section>
                            </div>

                            {/* Right Column (40% - Data & Analytics) */}
                            <div className="md:col-span-5 lg:sticky lg:top-24 space-y-6">
                                {/* Visual Data Card: The Spring Washout Audit */}
                                <div className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-6 shadow-2xl">
                                    <h3 className="text-xl font-bold mb-4 font-mono text-white flex items-center gap-2">
                                        <DollarSign className="w-5 h-5 text-red-500" /> The Spring Washout Audit
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="bg-black/40 border border-gray-700/50 rounded-xl p-4">
                                            <ul className="text-sm text-gray-300 space-y-3">
                                                <li className="flex justify-between border-b border-gray-700/50 pb-2"><span>Barrier Loss (9.2%)</span> <span className="font-mono text-red-400 shrink-0">-$38.00</span></li>
                                                <li className="flex justify-between border-b border-gray-700/50 pb-2"><span>Redundant Labor</span> <span className="font-mono text-red-400 shrink-0">-$145.00</span></li>
                                                <li className="flex justify-between border-b border-gray-700/50 pb-2"><span>Neutralized Seed</span> <span className="font-mono text-red-400 shrink-0">-$405.00</span></li>
                                                <li className="flex justify-between border-b border-gray-700/50 pb-2"><span>Wasted Irrigation</span> <span className="font-mono text-red-400 shrink-0">-$60.00</span></li>
                                                <li className="flex justify-between pt-2">
                                                    <span className="font-bold text-white">Total Annual Waste</span>
                                                    <span className="font-black text-red-500 font-mono">-$648.00</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Visual Data Card: Thermal Velocity Chart */}
                                    <h3 className="text-xl font-bold mb-4 mt-8 font-mono text-white flex items-center gap-2">
                                        <ThermometerSnowflake className="w-5 h-5 text-[#39B54A]" /> Thermal Velocity Chart
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        <div className="bg-black/40 border border-red-900/30 rounded-xl p-4 text-center">
                                            <div className="text-sm font-bold text-gray-400 mb-1">April Seeding</div>
                                            <div className="text-3xl font-black text-red-400 mb-2">60 Days</div>
                                            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Rooting Window</div>
                                        </div>
                                        <div className="bg-[#39B54A]/10 border border-[#39B54A]/40 rounded-xl p-4 text-center shadow-[0_0_15px_rgba(57,181,74,0.1)]">
                                            <div className="text-sm font-bold text-[#39B54A] mb-1">Sept Seeding</div>
                                            <div className="text-3xl font-black text-white mb-2">210 Days</div>
                                            <div className="text-[10px] text-[#39B54A] uppercase tracking-widest font-bold">Rooting Window</div>
                                        </div>
                                    </div>

                                    {/* Visual Data Card: The Competitive Phenology */}
                                    <h3 className="text-xl font-bold mb-4 font-mono text-white flex items-center gap-2">
                                        <Calendar className="w-5 h-5 text-gray-400" /> Competitive Phenology
                                    </h3>
                                    <div className="bg-black/40 border border-gray-700/50 rounded-xl p-4">
                                        <ul className="text-sm text-gray-300 space-y-3">
                                            <li className="flex justify-between border-b border-gray-700/50 pb-2 items-center">
                                                <span className="text-red-400 font-bold">C4 Weeds (Crabgrass)</span>
                                                <span className="font-mono text-gray-400 bg-gray-800 px-2 py-1 rounded text-xs">55°F - 85°F</span>
                                            </li>
                                            <li className="flex justify-between pt-1 items-center">
                                                <span className="text-[#39B54A] font-bold">C3 Turf (Bluegrass)</span>
                                                <span className="font-mono text-emerald-400 bg-emerald-900/30 px-2 py-1 rounded text-xs border border-emerald-500/30">65°F - 75°F</span>
                                            </li>
                                        </ul>
                                        <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                                            Spring seeding places juvenile turf directly into the optimal germination window for aggressive summer weeds.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                    </div>
                </main>
            </div >
        </div >
    );
}
