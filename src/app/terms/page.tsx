import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

export const metadata = {
  title: 'Terms of Service | Lush Lawn Care Pros',
  description: 'Terms of Service for Lush Lawn Care Pros.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#36454F] text-white font-sans overflow-x-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#39B54A]/10 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#39B54A]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <Navigation />

        <div className="max-w-4xl mx-auto px-6 py-20 mt-8 mb-20 text-gray-300 bg-lush-charcoal shadow-2xl rounded-2xl border border-white/10">
          <h1 className="text-4xl md:text-5xl font-black text-[#39B54A] mb-8 uppercase tracking-tight">Terms of Service</h1>
          
          <div className="space-y-8 text-lg leading-relaxed font-medium">
            <p>
              Welcome to Lush Lawn Care Pros. By accessing our website or using our services, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">1. Services Provided</h2>
              <p>
                Lush Lawn Care Pros provides professional lawn maintenance services, including but not limited to weekly mowing, fertilization, weed control, aeration, and sprinkler blowouts. Specific services are agreed upon at the time of your quote and are subject to weather and seasonal conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2 uppercase tracking-tight text-lush-emerald">SMS Messaging</h2>
              <div className="bg-[#39B54A]/10 p-6 rounded-2xl border border-[#39B54A]/30 shadow-[0_0_30px_rgba(57,181,74,0.1)] mb-4 leading-relaxed font-semibold text-white">
                SMS Messaging: By opting in to SMS messages, you agree to receive text messages regarding your quote, service updates, and billing. You can cancel the SMS service at any time. Just text &quot;STOP&quot;. After you send the SMS message &quot;STOP&quot; to us, we will send you an SMS message to confirm that you have been unsubscribed. Message and data rates may apply. If you have questions about your text or data plan, it is best to contact your wireless provider.
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">3. Payments and Billing</h2>
              <p>
                Payments are due upon receipt of invoice unless otherwise agreed. We reserve the right to suspend services for accounts with overdue balances. Pricing is subject to change with prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">4. Access and Property Preparation</h2>
              <p>
                To provide the &quot;Lush Standard&quot; of service, customers must ensure that gates are unlocked and that the lawn is clear of debris, toys, and pet waste on the scheduled service day. We are not responsible for damage to items left on the lawn.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">5. Cancellations</h2>
              <p>
                Please provide at least 24 hours&apos; notice for cancellations or rescheduling. Frequent cancellations may result in loss of your preferred service slot.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">6. Liability</h2>
              <p>
                Lush Lawn Care Pros is fully insured. While we take extreme care, we are not responsible for damage to unmarked irrigation heads, underground cables, or objects hidden in tall grass.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">7. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the State of Idaho.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">Contact Us</h2>
              <p className="mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-[#39B54A]">
                <li><span className="text-gray-300">Email: lushlawncarepros@gmail.com</span></li>
                <li><span className="text-gray-300">Phone: (208) 906-3220</span></li>
              </ul>
            </section>

            <div className="pt-8 text-center">
                <Link href="/" className="inline-flex items-center justify-center border-2 border-[#39B54A]/50 bg-[#39B54A]/10 text-[#39B54A] hover:bg-[#39B54A] hover:text-white px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(57,181,74,0.1)]">
                    Back to Home
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
