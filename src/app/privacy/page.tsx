import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Lush Lawn Care Pros',
  description: 'Privacy Policy for Lush Lawn Care Pros.',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 mt-16 text-gray-300 bg-lush-charcoal shadow-2xl rounded-2xl border border-white/10">
      <h1 className="text-4xl md:text-5xl font-black text-[#39B54A] mb-8 uppercase tracking-tight">Privacy Policy</h1>
      
      <div className="space-y-8 text-lg leading-relaxed font-medium">
        <p>
          At Lush Lawn Care Pros, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website or request our services.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">Information Collection and Use</h2>
          <p>
            We collect personal information that you provide to us directly through our website, such as when you fill out a quote request form, contact us, or sign up for our services. This information may include your name, email address, phone number, and property details.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2 uppercase tracking-tight">SMS & Mobile Data Policy</h2>
          <div className="font-semibold text-[#39B54A] bg-[#39B54A]/10 p-6 rounded-2xl border border-[#39B54A]/30 shadow-[0_0_30px_rgba(57,181,74,0.1)] mb-4 leading-relaxed">
            No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All personal data categories exclude text messaging originator opt-in data and consent; this opt-in information will strictly not be shared with any third parties.
          </div>
          <p className="text-sm italic text-gray-400">
            By checking the &quot;I agree to receive text messages&quot; box on our forms, you consent to receive SMS communications from Lush Lawn Care Pros regarding your quote, service updates, and account information. You can opt-out at any time by replying STOP to any of our text messages.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">Contact Us</h2>
          <p className="mb-4">
            If you have any questions regarding this privacy policy, you may contact us at:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-[#39B54A]">
            <li><span className="text-gray-300">Email: lushlawncarepros@gmail.com</span></li>
            <li><span className="text-gray-300">Phone: (208) 906-3220</span></li>
          </ul>
        </section>

        <div className="pt-8">
            <Link href="/" className="inline-flex items-center justify-center border-2 border-[#39B54A]/50 bg-[#39B54A]/10 text-[#39B54A] hover:bg-[#39B54A] hover:text-white px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(57,181,74,0.1)]">
                Back to Home
            </Link>
        </div>
      </div>
    </div>
  );
}
