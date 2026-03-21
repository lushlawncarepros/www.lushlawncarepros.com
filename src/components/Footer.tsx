'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <footer className="w-full bg-gray-900 border-t border-gray-800 pt-6 pb-6 px-4 z-[10000] relative mt-auto text-gray-300 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col">

                {/* Expanded Links Area */}
                <div
                    className={`transition-all duration-300 overflow-hidden ${isOpen
                        ? 'max-h-[1000px] opacity-100 mb-8 border-b border-gray-800 pb-8'
                        : 'max-h-0 opacity-0 mb-0 border-b-0 border-transparent pb-0'
                        }`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Column 1: Quick Links */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#39B54A] inline-block"></span>
                                Quick Links
                            </h4>
                            <nav className="flex flex-col gap-4">
                                <Link href="/" className="text-gray-400 hover:text-[#39B54A] transition-colors text-sm font-semibold hover:underline underline-offset-4 decoration-[#39B54A]">Home</Link>
                                <Link href="/services" className="text-gray-400 hover:text-[#39B54A] transition-colors text-sm font-semibold hover:underline underline-offset-4 decoration-[#39B54A]">Services</Link>
                                <Link href="/vault" className="text-[#39B54A] hover:text-[#2ce000] transition-colors text-sm font-bold uppercase tracking-wider">Lush Knowledge Vault</Link>
                                <Link href="/about" className="text-gray-400 hover:text-[#39B54A] transition-colors text-sm font-semibold hover:underline underline-offset-4 decoration-[#39B54A]">About</Link>
                                <Link href="/contact" className="text-gray-400 hover:text-[#39B54A] transition-colors text-sm font-semibold hover:underline underline-offset-4 decoration-[#39B54A]">Contact</Link>
                            </nav>
                        </div>

                        {/* Column 2: Service Area */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#39B54A] inline-block"></span>
                                Service Area
                            </h4>
                            <p className="text-sm text-gray-400 mb-6 leading-relaxed font-medium">
                                Proudly serving Boise & Meridian in the Treasure Valley
                            </p>
                            <a
                                href="https://share.google/HcZTXSe6UQaucbm4u"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center border-2 border-[#39B54A]/50 bg-[#39B54A]/10 text-[#39B54A] hover:bg-[#39B54A] hover:text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(57,181,74,0.1)] hover:shadow-[0_0_20px_rgba(57,181,74,0.3)]"
                            >
                                View Google Profile
                            </a>
                        </div>

                        {/* Column 3: Contact Info */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#39B54A] inline-block"></span>
                                Contact Info
                            </h4>
                            <div className="flex flex-col gap-4">
                                <div className="text-white font-bold text-sm tracking-wide">
                                    Lush Lawn Care Pros
                                </div>
                                <a href="tel:2089063220" className="flex items-center gap-3 text-gray-400 hover:text-[#39B54A] transition-colors text-sm font-semibold group">
                                    <Phone className="w-4 h-4 text-[#39B54A] group-hover:scale-110 transition-transform" />
                                    (208) 906-3220
                                </a>
                                <a href="mailto:lushlawncarepros@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-[#39B54A] transition-colors text-sm font-semibold group">
                                    <Mail className="w-4 h-4 text-[#39B54A] group-hover:scale-110 transition-transform" />
                                    lushlawncarepros@gmail.com
                                </a>
                                <div className="flex items-start gap-3 text-gray-400 text-sm font-semibold leading-relaxed">
                                    <MapPin className="w-4 h-4 text-[#39B54A] mt-0.5" />
                                    <span>Boise, ID 83709</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Logo, Copyright, Menu Toggle */}
                <div className="flex items-center justify-between">
                    {/* Left: Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="inline-block" onClick={() => setIsOpen(false)}>
                            <Image
                                src="/lush-logo.png"
                                alt="Lush Lawn Care Pros Logo"
                                width={120}
                                height={40}
                                className="w-auto h-auto max-h-10 object-contain"
                            />
                        </Link>
                    </div>

                    {/* Center: Copyright */}
                    <div className="flex-1 text-center px-4 flex flex-col sm:flex-row justify-center items-center gap-2">
                        <p className="text-[10px] sm:text-xs text-gray-500 font-medium">
                            &copy; {(new Date()).getFullYear()} Lush Lawn Care Pros.
                        </p>
                        <span className="hidden sm:inline text-gray-700">|</span>
                        <Link href="/privacy" className="text-[10px] sm:text-xs text-gray-500 hover:text-[#39B54A] font-medium transition-colors">
                            Privacy Policy
                        </Link>
                        <span className="hidden sm:inline text-gray-700">|</span>
                        <Link href="/terms" className="text-[10px] sm:text-xs text-gray-500 hover:text-[#39B54A] font-medium transition-colors">
                            Terms of Service
                        </Link>
                    </div>

                    {/* Right: Hamburger */}
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="group flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-[#39B54A]/20 rounded-full transition-all duration-300 border border-gray-700 hover:border-[#39B54A]/50 backdrop-blur-sm"
                            aria-expanded={isOpen}
                            aria-label="Toggle Footer Menu"
                        >
                            {isOpen ? (
                                <X className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-90" />
                            ) : (
                                <Menu className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                            )}
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
}
