import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { CallToAction } from '@/components/CallToAction';

export const metadata = {
    title: 'Seasonal Services | Lush Lawn Care Pros',
    description: 'Specialized seasonal services in the Treasure Valley: Aeration, Sprinkler Blowouts, and Expert Shrub Care.',
  alternates: { canonical: '/services/seasonal' }
};

export default function SeasonalHub() {
    return (
        <div className="min-h-screen bg-[#36454F] text-white font-sans overflow-x-hidden relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#39B54A]/5 blur-[120px]" />
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


                <section className="px-4 pb-16 pt-2 text-center w-full max-w-5xl mx-auto flex flex-col items-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 mt-2">
                        Precision <span className="text-[#39B54A]">Seasonal Care</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl">
                        Because the high desert operates on extreme chronological shifts, calendar-based care fails. At Lush, we execute deep agronomic shifts timed perfectly with the Boise weather matrix.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-16 animate-in fade-in slide-in-from-bottom-6 duration-500">
                        {/* Aeration Tile */}
                        <Link href="/services/aeration" className="bg-gray-800/50 border border-gray-700 hover:border-[#39B54A]/50 p-8 rounded-2xl transition-all hover:scale-[1.02] text-center flex flex-col items-center gap-4 group cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(57,181,74,0.15)] relative overflow-hidden">
                            <span className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all z-10 overflow-hidden">
                                <Image 
                                    src="/icons/Core Aeration.png" 
                                    alt="Core Aeration" 
                                    width={96} 
                                    height={96} 
                                    className="object-contain w-full h-full"
                                    unoptimized
                                />
                            </span>
                            <div className="z-10">
                                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#39B54A] transition-colors">Core Aeration</h2>
                                <p className="text-gray-400 text-sm leading-relaxed">The Fall-Only Mandate. Relieve Boise's extreme clay compaction allowing deep root penetration and atmospheric exchange.</p>
                            </div>
                        </Link>

                        {/* Blowout Tile */}
                        <Link href="/services/sprinkler-blowout" className="bg-gray-800/50 border border-gray-700 hover:border-[#39B54A]/50 p-8 rounded-2xl transition-all hover:scale-[1.02] text-center flex flex-col items-center gap-4 group cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(57,181,74,0.15)] relative overflow-hidden">
                            <span className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all z-10 overflow-hidden">
                                <Image 
                                    src="/icons/Seasonal Sprinkler Icon.png" 
                                    alt="Sprinkler Blowouts" 
                                    width={96} 
                                    height={96} 
                                    className="object-contain w-full h-full"
                                    unoptimized
                                />
                            </span>
                            <div className="z-10">
                                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#39B54A] transition-colors">Sprinkler Blowouts</h2>
                                <p className="text-gray-400 text-sm leading-relaxed">Protect your high-value irrigation infrastructure from catastrophic winter freeze damage with high-CFM compressor volume.</p>
                            </div>
                        </Link>

                        {/* Shrub Care Tile */}
                        <Link href="/services/shrub-care" className="bg-gray-800/50 border border-gray-700 hover:border-[#39B54A]/50 p-8 rounded-2xl transition-all hover:scale-[1.02] text-center flex flex-col items-center gap-4 group cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(57,181,74,0.15)] relative overflow-hidden">
                            <span className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all z-10 overflow-hidden">
                                <Image 
                                    src="/icons/Hand Pruners.png" 
                                    alt="Shrub Pruning" 
                                    width={96} 
                                    height={96} 
                                    className="object-contain w-full h-full"
                                    unoptimized
                                />
                            </span>
                            <div className="z-10">
                                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#39B54A] transition-colors">Shrub Pruning</h2>
                                <p className="text-gray-400 text-sm leading-relaxed">Species-specific trimming and structural pruning for optimal ornamental health throughout the growing season.</p>
                            </div>
                        </Link>
                    </div>

                    <div className="w-full max-w-lg mt-8">
                        <CallToAction redirectOnQuote={true} />
                    </div>
                </section>
            </div>
        </div>
    );
}
