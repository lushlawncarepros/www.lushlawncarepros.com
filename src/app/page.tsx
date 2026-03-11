import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CallToAction } from '@/components/CallToAction';
import { Navigation } from '@/components/Navigation';

export const metadata = {
  title: "Lush Lawn Care Pros | Boise & Meridian Lawn Care",
  description: "Premium weekly lawn care in Boise & Meridian, Idaho. Expert mowing, fertilization, aeration, and weed control in the Treasure Valley. Get a free quote today.",
  keywords: ["lawn care Boise", "lawn mowing Meridian Idaho", "weekly lawn service Boise", "lawn fertilization Treasure Valley", "Lush Lawn Care Pros"],
  alternates: { canonical: '/' }
};

export default function App() {
  const lush10 = [
    { title: "Gates Verified", desc: "Secured before & after." },
    { title: "Debris Sweep", desc: "Toys & sticks cleared." },
    { title: "Pattern Rotation", desc: "Prevents rutting." },
    { title: "String-Trimming", desc: "Detailed perimeter work." },
    { title: "Vertical Edging", desc: "Crisp hardscape lines." },
    { title: "Power-Blowing", desc: "Zero clippings left." },
    { title: "Cut Height", desc: "Optimal seasonal cut." },
    { title: "Property Audit", desc: "Verified damage-free." },
    { title: "Digital Alert", desc: "Instant completion text." },
    { title: "Blade Check", desc: "Sharpened weekly." }
  ];

  return (
    <main className="min-h-screen bg-[#36454F] text-white font-sans overflow-x-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#39B54A]/10 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#39B54A]/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navigation />


        {/* HERO SECTION */}
        <section id="quote" className="relative pt-2 pb-16 px-4 text-center max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            The Boise & Meridian lawn service <span className="text-[#39B54A]">you can set your watch by.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
            Experience unmatched precision and reliability. We show up on time, every time, and deliver a pristine yard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CallToAction isPrimary={true} />
          </div>
        </section>

        {/* PHOTO STRIP */}
        <section className="px-4 pb-8 flex justify-center">
          <div className="relative w-full max-w-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-700/50">
            <Image
              src="/Images/MowerRideon.png"
              alt="Toro Grandstand mower servicing a Boise residential lawn"
              width={400}
              height={267}
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </section>

        {/* TESTIMONIALS / SOCIAL PROOF */}
        <section id="reviews" className="px-4 py-16 max-w-6xl mx-auto scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The Verdict from the <span className="text-[#39B54A]">Neighborhood</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">See what our partners say about the Lush Signature Experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="bg-gray-800/30 border border-gray-700/50 p-6 rounded-2xl flex flex-col justify-between h-full hover:border-[#39B54A]/30 transition-colors">
              <div>
                <svg className="w-8 h-8 text-emerald-600 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                  "Ethan is the BEST! His team is thorough, fast and does an excellent job. The team is very nice and easy to deal with in every way. I highly recommend this company."
                </p>
              </div>
              <p className="font-bold text-white text-sm">Diane M.</p>
            </div>

            <div className="bg-gray-800/30 border border-gray-700/50 p-6 rounded-2xl flex flex-col justify-between h-full hover:border-[#39B54A]/30 transition-colors">
              <div>
                <svg className="w-8 h-8 text-emerald-600 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                  "Ethan is incredibly knowledgeable and helpful. He is an effective communicator and his work is detail oriented and thorough. We have had other companies and they don't hold a candle to Lush. We highly recommend Lush!!!"
                </p>
              </div>
              <p className="font-bold text-white text-sm">Carolyn J.</p>
            </div>

            <div className="bg-gray-800/30 border border-gray-700/50 p-6 rounded-2xl flex flex-col justify-between h-full hover:border-[#39B54A]/30 transition-colors">
              <div>
                <svg className="w-8 h-8 text-emerald-600 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                  "Lush is a five star company. They are amazing at communicating and letting you know what to expect. The crews do a fabulous job... the yard looks immaculate when they leave."
                </p>
              </div>
              <p className="font-bold text-white text-sm">Heather A.</p>
            </div>

            <div className="bg-gray-800/30 border border-gray-700/50 p-6 rounded-2xl flex flex-col justify-between h-full hover:border-[#39B54A]/30 transition-colors">
              <div>
                <svg className="w-8 h-8 text-emerald-600 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                  "Ethan and his team have been wonderful. I have a large yard that was becoming too much for one person and they've made it a non-issue."
                </p>
              </div>
              <p className="font-bold text-white text-sm">Sara C.</p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="https://share.google/HcZTXSe6UQaucbm4u"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-500 font-semibold hover:underline transition-all text-sm md:text-base group"
            >
              See all our 5-star reviews on Google
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>

        {/* IRON-CLAD GUARANTEE */}
        <section className="px-4 py-16 flex justify-center">
          <div className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-700 relative max-w-4xl transform transition-all duration-500 hover:scale-[1.02] w-full hover:border-[#39B54A]/30 hover:shadow-[0_0_30px_var(--color-lush-emerald)]">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 border border-emerald-600/50 text-emerald-600 px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase shadow-md text-center max-w-[95%] w-max">
              THE IRON-CLAD GUARANTEE
            </div>
            <div className="mt-4 flex flex-col items-center text-center">
              <p className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-snug">
                &quot;If you aren&apos;t 100% satisfied with our precision, we will pay a competitor of your choice to fix it.&quot;
              </p>
              <p className="text-[#39B54A] font-medium flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No Questions Asked.
              </p>
            </div>
          </div>
        </section>

        {/* LUSH 10 SOP */}
        <section className="px-4 py-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The Lush 10 <span className="text-[#39B54A]">SOP</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Our 10-point Standard Operating Procedure ensures nothing is missed.</p>
          </div>
          {/* Optimized Grid: 2 columns on mobile, 5 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {lush10.map((item, idx) => (
              <div key={idx} className="bg-gray-800/50 border border-gray-700 hover:border-[#39B54A]/50 p-6 rounded-2xl transition-colors text-left flex flex-col h-full">
                <span className="w-8 h-8 rounded-full bg-[#39B54A]/20 text-[#39B54A] flex items-center justify-center font-bold text-sm mb-4">{idx + 1}</span>
                <h3 className="font-bold text-base text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* KNOWLEDGE VAULT TEASER */}
        <section className="px-4 py-16 max-w-5xl mx-auto">
          <div className="w-full relative overflow-hidden rounded-3xl bg-gray-800/50 border border-[#39B54A]/30 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_30px_var(--color-lush-emerald)]">
            <div className="p-10 md:p-14 flex flex-col items-center text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                We Don't Just <span className="text-[#39B54A]">Mow and Go.</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl">
                Lawn care isn't just about cutting grass; it's about agronomic science. From identifying emerging pests to diagnosing precise soil chemistry, our highly trained technicians understand the biology behind a thriving Boise property. We empower our partners with deep-dive industry research.
              </p>
              <Link
                href="/vault"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-[#39B54A] text-[#39B54A] px-8 py-4 rounded-full font-bold hover:bg-[#39B54A] hover:text-[#111111] transition-all uppercase tracking-wider shadow-[0_0_15px_var(--color-lush-emerald)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                Explore The Knowledge Vault
              </Link>
            </div>
            {/* Soft decorative blur */}
            <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#39B54A]/10 blur-[80px] pointer-events-none" />
          </div>
        </section>

        {/* MOTIVATED PROS */}
        <section className="px-4 py-16 max-w-5xl mx-auto">
          <div className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-[#39B54A]/20">
            <div className="p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 relative z-10 text-left">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                  Motivated <span className="text-[#39B54A]">Pros.</span><br />
                  Pristine <span className="text-[#39B54A]">Lawns.</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  We believe exceptional quality comes from exceptional people. That&apos;s why our technicians aren&apos;t just employees—they&apos;re <strong className="text-white">Partners</strong>.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Using our <strong className="text-[#39B54A]">Pay for Performance (P4P)</strong> model, our team&apos;s compensation is directly tied to the quality of their work and your satisfaction. When your property looks its absolute best, our Pros succeed. It&apos;s total alignment.
                </p>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-full border-4 border-[#39B54A]/50 flex items-center justify-center bg-[#39B54A]/10 shadow-[0_0_50px_var(--color-lush-emerald)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#39B54A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-4 py-16 text-center max-w-3xl mx-auto flex flex-col items-center border-t border-gray-700/50">
          <h3 className="text-2xl md:text-3xl font-black mb-8 text-white tracking-wide uppercase">
            Ready for the <span className="text-[#39B54A]">Lush Standard?</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <CallToAction />
          </div>
        </section>

      </div>
    </main>
  );
}
