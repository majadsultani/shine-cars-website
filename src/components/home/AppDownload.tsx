"use client";

import Image from "next/image";
import { Smartphone, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AppDownload() {
  return (
    <section className="py-14 sm:py-24 bg-gray-50 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-navy overflow-hidden p-10 sm:p-16">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }} />

          <div className="relative flex flex-col lg:flex-row items-center gap-12">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <AnimatedSection>
                <span className="text-gold font-semibold text-sm uppercase tracking-widest">
                  Available Now
                </span>
                <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                  Download Our{" "}
                  <span className="gradient-text">Mobile App</span>
                </h2>
                <p className="mt-4 text-lg text-white/50 max-w-lg">
                  Book rides, track your driver in real-time, manage payments,
                  and more — all from the convenience of your phone.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="https://apps.apple.com/gb/app/shine-cars/id6823728193" target="_blank" rel="noopener noreferrer" aria-label="Download on App Store" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3.5 rounded-xl hover:bg-white/15 transition-all group">
                    <Smartphone className="w-6 h-6 text-gold" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase tracking-wider text-white/60">Download on the</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.shinecars.customer" target="_blank" rel="noopener noreferrer" aria-label="Download on Google Play" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3.5 rounded-xl hover:bg-white/15 transition-all group">
                    <Smartphone className="w-6 h-6 text-gold" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase tracking-wider text-white/60">Get it on</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* QR Code */}
            <AnimatedSection direction="right" className="flex-shrink-0">
              <div className="relative">
                <div className="w-56 sm:w-64 rounded-2xl overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-sm p-3">
                  <Image
                    src="/images/qr-code.png"
                    alt="Scan to download Shine Cars app"
                    width={240}
                    height={240}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                {/* Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-crimson/20 to-gold/20 rounded-[2rem] blur-2xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
