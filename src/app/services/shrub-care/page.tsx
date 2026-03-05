import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CallToAction } from '@/components/CallToAction';
import { Navigation } from '@/components/Navigation';
import { Scissors, TreeDeciduous, Leaf, CheckCircle2, Clock, HelpCircle } from 'lucide-react';

export const metadata = {
    title: 'Expert Shrub Pruning | Boise Ornamental Care',
    description: 'Precision, species-specific shrub pruning and ornamental care designed for optimal health and landscape aesthetics in Boise.',
  alternates: { canonical: '/services/shrub-care' }
};

export default function ShrubCare() {
    return (
        <div className="min-h-screen bg-[#36454F] text-white font-sans overflow-x-hidden relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/10 blur-[120px]" />
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
                        Expert <span className="text-emerald-500">Shrub & Ornamental</span> Care
                    </h1>
                    <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                        We don't just hedge-trim everything into boxes. Our approach prioritizes structural integrity, species-appropriate reduction, and the long-term vitality of your landscape.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full">
                        <div className="bg-[#2D3A42] p-6 rounded-xl border border-emerald-900/30 flex flex-col items-center text-center hover:border-emerald-500/50 transition-colors">
                            <Scissors className="w-12 h-12 text-emerald-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Species-Specific Trimming</h3>
                            <p className="text-gray-400 text-sm">Every plant has different bloom cycles and growth habits. We prune at the right time in the right way for each specific species.</p>
                        </div>
                        <div className="bg-[#2D3A42] p-6 rounded-xl border border-emerald-900/30 flex flex-col items-center text-center hover:border-emerald-500/50 transition-colors">
                            <TreeDeciduous className="w-12 h-12 text-emerald-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Structural Pruning</h3>
                            <p className="text-gray-400 text-sm">Removing dead, diseased, or crossing interior branches to promote better airflow, light penetration, and structural soundness.</p>
                        </div>
                        <div className="bg-[#2D3A42] p-6 rounded-xl border border-emerald-900/30 flex flex-col items-center text-center hover:border-emerald-500/50 transition-colors">
                            <Leaf className="w-12 h-12 text-emerald-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Ornamental Health</h3>
                            <p className="text-gray-400 text-sm">Regular, expert care extends the lifespan of your ornamental plants and keeps your entire landscape looking deeply manicured.</p>
                        </div>
                    </div>

                    {/* Before & After */}
                    {/* Precision Pruning Visual */}
                    <div className="w-full mb-16 px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">See the <span className="text-emerald-500">Difference</span></h2>
                        <div className="flex flex-col items-center">
                            <div className="relative w-full max-w-2xl h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl border border-emerald-900/30">
                                <Image
                                    src="/Images/pruners.png"
                                    alt="Precision shrub pruning in action"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 42rem"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                                    <p className="font-bold text-white text-center text-lg">Precision Pruning in Action</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The Timing Principle */}
                    <div className="w-full bg-[#2D3A42]/80 rounded-2xl p-8 border border-emerald-600/30 mb-16 relative overflow-hidden text-left shadow-xl">
                        <div className="absolute -right-10 -top-10 text-emerald-900/20">
                            <Clock className="w-48 h-48" />
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold mb-4 text-emerald-500">The Timing Principle</h2>
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    Generic &quot;cut-and-run&quot; services often trim whatever is in front of them, whenever they show up. But true ornamental care relies on understanding the unique growth and bloom cycles of each species.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    For instance, pruning spring-blooming shrubs in the fall removes next year&apos;s flowers. Cutting back certain ornamental grasses too early in spring exposes them to fatal rot. Our specialists know precisely <strong>when</strong> to prune, ensuring your landscape isn&apos;t just neat—it&apos;s thriving.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* What's Included */}
                    <div className="w-full mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">What&apos;s <span className="text-emerald-500">Included</span></h2>
                        <div className="bg-[#1e272d] rounded-2xl p-6 md:p-8 border border-emerald-900/50 shadow-xl max-w-3xl mx-auto">
                            <ul className="space-y-4 text-left">
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-bold text-white block">Deciduous Shrubs &amp; Evergreen Hedges</span>
                                        <span className="text-sm text-gray-400">Careful shaping and size reduction tailored to the plant type.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-bold text-white block">Ornamental Grasses</span>
                                        <span className="text-sm text-gray-400">Strategic cutbacks timed for the ideal season to prevent core rot and encourage flush new growth.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-bold text-white block">Rose Bushes (Light Tidy)</span>
                                        <span className="text-sm text-gray-400">Gentle pruning to remove spent blooms and maintain aesthetic form during the active season.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-bold text-white block">Decline Management</span>
                                        <span className="text-sm text-gray-400">Targeted removal of dead stems, diseased wood, and crossing branches to open up the canopy for better health.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="w-full max-w-4xl mx-auto mb-16 text-left">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">Frequently Asked <span className="text-emerald-500">Questions</span></h2>
                        <div className="space-y-6">
                            <div className="bg-[#2D3A42]/50 rounded-xl p-6 border border-emerald-900/20 shadow-sm hover:border-emerald-500/30 transition-colors">
                                <h4 className="text-xl font-bold mb-3 flex items-center text-emerald-400">
                                    <HelpCircle className="w-5 h-5 mr-2" />
                                    How often are shrubs trimmed?
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    The frequency depends heavily on the species and its growth rate. Fast-growing hedges may require trimming 2-3 times per season to maintain a formal look, whereas many flowering shrubs benefit from just one carefully timed prune per year. We monitor your property during our weekly visits and recommend trimming exactly when it&apos;s needed for optimal plant health.
                                </p>
                            </div>
                            <div className="bg-[#2D3A42]/50 rounded-xl p-6 border border-emerald-900/20 shadow-sm hover:border-emerald-500/30 transition-colors">
                                <h4 className="text-xl font-bold mb-3 flex items-center text-emerald-400">
                                    <HelpCircle className="w-5 h-5 mr-2" />
                                    Will you trim my roses?
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    We provide a light tidying and deadheading service for roses to keep them looking pristine during the growing season. However, specialized, heavy dormant pruning for highly cultivated rose varieties often requires a dedicated rosarian, so our service is focused on aesthetic maintenance and structural tidying.
                                </p>
                            </div>
                            <div className="bg-[#2D3A42]/50 rounded-xl p-6 border border-emerald-900/20 shadow-sm hover:border-emerald-500/30 transition-colors">
                                <h4 className="text-xl font-bold mb-3 flex items-center text-emerald-400">
                                    <HelpCircle className="w-5 h-5 mr-2" />
                                    What if a shrub needs major removal?
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    If a shrub is severely diseased, fundamentally overgrown, or dying, standard pruning won&apos;t fix it. In these cases, we will assess the situation and recommend structural rejuvenation pruning if viable, or complete removal. We are equipped to handle removal and root-ball extraction to prep the space for new planting.
                                </p>
                            </div>
                        </div>
                    </div>

                    <CallToAction redirectOnQuote={true} />
                </section>
            </div>
        </div>
    );
}
