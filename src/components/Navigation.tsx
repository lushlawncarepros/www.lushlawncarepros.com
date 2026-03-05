'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Knowledge Vault', path: '/vault' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <nav className="w-full relative pt-6 pb-2 min-h-[100px] flex items-center justify-center">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">

                    {/* Centered Logo */}
                    <div className="flex justify-center items-center">
                        <Link
                            href="/"
                            className="transition-transform duration-300 hover:scale-105"
                            onClick={() => setIsOpen(false)}
                            aria-label="Go to homepage"
                        >
                            <Image
                                src="/lush-logo.png"
                                alt="Lush Lawn Care Pros Logo"
                                width={250}
                                height={75}
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Absolutely positioned Hamburger Menu (Right) - Shifted 24px over and 24px up from center */}
                    <div className="absolute right-10 top-[26px] z-[60] pointer-events-auto">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="group flex flex-col items-center justify-center w-11 h-11 bg-black/20 hover:bg-black/40 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 pointer-events-auto"
                            aria-expanded={isOpen}
                            aria-label="Toggle Navigation Menu"
                        >
                            {isOpen ? (
                                <X className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-90" />
                            ) : (
                                <Menu className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Full-screen Overlay Menu */}
            <div
                className={`fixed inset-0 z-40 bg-[#36454F] backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
                aria-hidden={!isOpen}
            >
                {/* Decorative background element */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#36454F] to-[#1a2228] opacity-90"></div>

                <div className="w-full max-w-lg px-6 relative z-50">
                    <ul className="flex flex-col items-center gap-6 sm:gap-8">
                        {navLinks.map((link, index) => (
                            <li key={link.path}
                                className={`transform transition-all duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${isOpen ? index * 75 + 100 : 0}ms` }}
                            >
                                <Link
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight hover:text-[#39B54A] transition-colors duration-300 py-2 inline-block group relative"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#39B54A] transition-all duration-300 group-hover:w-full rounded-full"></span>
                                </Link>
                            </li>
                        ))}

                        {/* Mobile CTA */}
                        <li
                            className={`mt-6 transform transition-all duration-500 sm:hidden ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                                }`}
                            style={{ transitionDelay: `${isOpen ? navLinks.length * 75 + 100 : 0}ms` }}
                        >
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    // Smooth scroll and click the CTA button if it's on page
                                    const ctaBtn = document.querySelector('button.bg-\\[radial-gradient\\(ellipse_at_center\\,_\\#33FF00_0\\%\\,_var\\(--color-lush-emerald\\)_100\\%\\)\\]');
                                    if (ctaBtn) {
                                        (ctaBtn as HTMLButtonElement).click();
                                    } else {
                                        window.location.href = '/#quote';
                                    }
                                }}
                                className="bg-[#39B54A] hover:bg-[#2e933c] text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all duration-300 inline-block shadow-[0_0_15px_rgba(57,181,74,0.3)] hover:shadow-[0_0_20px_rgba(57,181,74,0.5)] active:scale-95"
                            >
                                Get Free Quote
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
