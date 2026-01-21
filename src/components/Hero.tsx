"use client";

import { Reveal } from "@/components/Reveal";
import { RotatingText } from "@/components/DesignElements";
import { MosaicImage } from "@/components/MosaicImage";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0b0e13]">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#AEE2FF]/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Spinning Circle */}
            <div className="absolute top-20 left-10 w-24 h-24 border-2 border-dashed border-white/10 rounded-full animate-[spin_10s_linear_infinite] opacity-50" />
            <div className="absolute bottom-20 right-1/3 w-32 h-32 border border-white/5 rounded-full animate-[bounce_5s_infinite] opacity-30" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl">
                    <Reveal direction="up" delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#AEE2FF]"></span>
                            <span className="text-white text-sm font-medium tracking-wide">
                                Smarter IT. Stronger Business.
                            </span>
                        </div>
                    </Reveal>

                    <Reveal direction="up" delay={0.2}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                            Empowering businesses through reliable & scalable it solutions
                        </h1>
                    </Reveal>

                    <Reveal direction="up" delay={0.3}>
                        <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                            Harness the power of intelligent IT solutions built to evolve with your business. From cloud infrastructure to 24/7 support, we deliver flexible, secure, and scalable services that empower you to innovate
                        </p>
                    </Reveal>

                    <Reveal direction="up" delay={0.4}>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#AEE2FF] hover:bg-[#90d5ff] text-[#0b0e13] px-8 py-3.5 rounded-full font-bold transition-all flex items-center gap-2 group">
                                Get Started Now
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-full font-medium transition-all">
                                View All Services
                            </button>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Decorative Image/Shape Placeholder on Right */}
            <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-[45%] h-[80%] rounded-l-3xl overflow-hidden animate-float">
                <div className="w-full h-full bg-gradient-to-br from-[#AEE2FF]/10 to-purple-900/20 border-l border-t border-b border-white/10 backdrop-blur-sm relative">
                    {/* Abstract tech shapes */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 bg-[#AEE2FF] rounded-full blur-[80px] opacity-20 animate-pulse"></div>
                    </div>

                    <MosaicImage
                        src="https://demo.awaikenthemes.com/codeio/it-solutions-dark/wp-content/uploads/2025/08/hero-image.jpg"
                        alt="Tech"
                        className="w-full h-full mix-blend-overlay opacity-80"
                    />

                    {/* Rotating Text Circle Overlay */}
                    <RotatingText />
                </div>
            </div>
        </section>
    );
}
