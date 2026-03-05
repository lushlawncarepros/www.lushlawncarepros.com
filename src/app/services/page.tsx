import Link from 'next/link';
import React from 'react';
import { CallToAction } from '@/components/CallToAction';
import { Navigation } from '@/components/Navigation';
import Image from 'next/image';

export const metadata = {
    title: 'Professional Lawn Services | Lush Lawn Care Pros',
    description: 'Premium lawn care services in Boise, Meridian, and the Treasure Valley. Expert weekly mowing, fertilization, aeration, weed control, and seasonal maintenance tailored for Idaho landscapes.',
  alternates: { canonical: '/services' }
};

const services = [
    {
        name: 'Weekly Mowing',
        href: '/services/mowing',
        desc: 'Consistent weekly cuts with 10-point SOP — pattern rotation, edging, and zero clippings left.',
        accent: 'emerald',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-[#39B54A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M9 10v11M15 10v11" />
            </svg>
        ),
        iconBg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
        titleHover: 'group-hover:text-[#39B54A]',
        cardHover: 'hover:border-[#39B54A]/50 hover:shadow-[0_0_20px_rgba(57,181,74,0.15)]',
    },
    {
        name: 'Fertilization',
        href: '/services/fertilization',
        desc: 'Soil-science-driven nutrition programs calibrated to Treasure Valley turf and soil chemistry.',
        accent: 'emerald',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-[#39B54A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        ),
        iconBg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
        titleHover: 'group-hover:text-[#39B54A]',
        cardHover: 'hover:border-[#39B54A]/50 hover:shadow-[0_0_20px_rgba(57,181,74,0.15)]',
    },
    {
        name: 'Weed Control',
        href: '/services/weed-control',
        desc: 'Pre- and post-emergent applications targeting broadleaf and grassy weeds at the root level.',
        accent: 'emerald',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-[#39B54A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
        ),
        iconBg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
        titleHover: 'group-hover:text-[#39B54A]',
        cardHover: 'hover:border-[#39B54A]/50 hover:shadow-[0_0_20px_rgba(57,181,74,0.15)]',
    },
    {
        name: 'Core Aeration',
        href: '/services/aeration',
        desc: 'Fall-only mandate. Relieve Boise\'s clay compaction for deep root penetration and atmospheric exchange.',
        accent: 'emerald',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-[#39B54A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
        ),
        iconBg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
        titleHover: 'group-hover:text-[#39B54A]',
        cardHover: 'hover:border-[#39B54A]/50 hover:shadow-[0_0_20px_rgba(57,181,74,0.15)]',
    },
    {
        name: 'Sprinkler Blowout',
        href: '/services/sprinkler-blowout',
        desc: 'High-CFM compressor-volume winterization protecting your irrigation system from freeze damage.',
        accent: 'blue',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        iconBg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
        titleHover: 'group-hover:text-blue-400',
        cardHover: 'hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(96,165,250,0.12)]',
    },
    {
        name: 'Shrub Care',
        href: '/services/shrub-care',
        desc: 'Species-specific structural pruning for optimal ornamental health throughout the growing season.',
        accent: 'orange',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        iconBg: 'bg-orange-500/10 group-hover:bg-orange-500/20',
        titleHover: 'group-hover:text-orange-400',
        cardHover: 'hover:border-orange-500/40 hover:shadow-[0_0_20px_rgba(251,146,60,0.12)]',
    },
];

export default function ServicesHub() {
    return (
        <div className="min-h-screen bg-[#36454F] text-white font-sans overflow-x-hidden relative">
            {/* Background glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#39B54A]/10 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-[#39B54A]/5 blur-[100px]" />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">
                <Navigation />

                {/* Hero */}
                <section className="px-4 pb-8 pt-2 text-center w-full max-w-4xl mx-auto flex flex-col items-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 mt-2 leading-tight">
                        Precision{' '}
                        <span className="text-[#39B54A]">Property Management</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-2xl">
                        At Lush, we don&apos;t just mow grass; we manage complex biological systems. Select a service below to learn about our scientific approach to turf health in the Treasure Valley.
                    </p>
                </section>

                {/* Trust Strip */}
                <section className="px-4 pb-12 w-full max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="rounded-xl overflow-hidden shadow-lg bg-gray-800/40 border border-gray-700/50 flex flex-col">
                            <div className="relative h-48 w-full">
                                <Image
                                    src="/Images/MowerRideon.png"
                                    alt="Commercial-Grade Equipment"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <p className="text-[#39B54A] font-semibold tracking-wide">Commercial-Grade Equipment</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-xl overflow-hidden shadow-lg bg-gray-800/40 border border-gray-700/50 flex flex-col">
                            <div className="relative h-48 w-full">
                                <Image
                                    src="/Images/Core-Aeration-300x200.jpg"
                                    alt="Deep Core Aeration"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <p className="text-[#39B54A] font-semibold tracking-wide">Deep Core Aeration</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-xl overflow-hidden shadow-lg bg-gray-800/40 border border-gray-700/50 flex flex-col">
                            <div className="relative h-48 w-full">
                                <Image
                                    src="/Images/pruners.png"
                                    alt="Precision Detail Work"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <p className="text-[#39B54A] font-semibold tracking-wide">Precision Detail Work</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Grid */}
                <section className="px-4 pb-16 w-full max-w-6xl mx-auto">
                    {/* Intro blurb */}
                    <p className="text-center text-sm font-semibold tracking-widest text-[#39B54A] uppercase mb-10">
                        At Lush, every service is a precision system, not a task.&nbsp; Weekly-only by design.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-6 duration-500">
                        {services.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className={`bg-gray-800/50 border border-gray-700 ${service.cardHover} p-6 md:p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] text-center flex flex-col items-center gap-4 group cursor-pointer shadow-lg relative overflow-hidden`}
                            >
                                {/* Subtle top-left glow on hover */}
                                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                                {/* Icon circle */}
                                <span className={`w-16 h-16 rounded-full ${service.iconBg} flex items-center justify-center transition-colors duration-300 z-10`}>
                                    {service.icon}
                                </span>

                                {/* Text */}
                                <div className="z-10">
                                    <h2 className={`text-base md:text-lg font-bold text-white mb-1.5 ${service.titleHover} transition-colors duration-300 leading-snug`}>
                                        {service.name}
                                    </h2>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>

                                {/* Arrow hint */}
                                <span className="text-gray-600 group-hover:text-gray-400 transition-colors text-xs font-medium tracking-wide mt-auto z-10">
                                    Learn more →
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="px-4 pb-20 w-full max-w-lg mx-auto flex flex-col items-center">
                    <div className="text-center mb-8">
                        <p className="text-gray-400 text-sm">
                            Ready to get started? We service Boise, Meridian, and surrounding Treasure Valley areas.
                        </p>
                    </div>
                    <CallToAction redirectOnQuote={true} />
                </section>
            </div>
        </div>
    );
}
