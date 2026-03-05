import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { vaultArticles } from '@/data/vault';

export const metadata = {
    title: 'Lush Knowledge Vault | Science of Idaho Turf',
    description: 'Expert insights, science-backed strategies, and the Lush precision approach to lawn care in the Treasure Valley.',
  alternates: { canonical: '/vault' }
};

export default function KnowledgeVaultHub() {
    return (
        <div className="min-h-screen bg-[#111111] text-white font-sans overflow-x-hidden relative">
            {/* Deep Charcoal / Emerald Aesthetic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#39B54A]/6 blur-[120px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#2A363E]/80 blur-[150px]" />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">
                <Navigation />


                <section className="px-4 pb-16 pt-2 w-full max-w-6xl mx-auto flex flex-col items-center">
                    <div className="text-center mb-20 animate-in slide-in-from-bottom-4 fade-in duration-500">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
                            The Lush <span className="text-[#39B54A]">Knowledge Vault</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed border-b border-[#39B54A]/30 pb-10">
                            The Science of Idaho Turf. Expert insights, precision strategies, and proven tactics for a flawless property in the Treasure Valley.
                        </p>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {vaultArticles.map((article, idx) => (
                            <Link
                                href={`/vault/${article.slug}`}
                                key={article.id}
                                className="group bg-gray-900 border border-gray-800 hover:border-[#39B54A] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(57,181,74,0.15)] hover:-translate-y-1 block animate-in fade-in slide-in-from-bottom-8 relative"
                                style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}
                            >
                                <div className="p-8 flex flex-col h-full relative z-10">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-xs font-bold text-white uppercase tracking-wider bg-[#39B54A] px-3 py-1 rounded-sm shadow-sm">
                                            {article.category}
                                        </span>
                                        <span className="text-xs text-gray-400 font-medium tracking-wide">
                                            {article.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-100 group-hover:text-white mb-4 leading-tight transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-8 line-clamp-3 leading-relaxed flex-grow">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center text-[#39B54A] text-sm font-bold group-hover:gap-2 transition-all">
                                        Open Dossier <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 pointer-events-none group-hover:opacity-0 transition-opacity" />
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
