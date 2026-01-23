"use client";
import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="py-24 bg-[#0b0e13]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column - Badge Only (as per screenshot) */}
                    <div className="lg:col-span-4 relative">
                        <Reveal>
                            <div className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold tracking-wide uppercase">
                                • Innovation That Drives Growth
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-8">
                        <div>
                            <TextReveal
                                text="Delivering scalable & innovative it solutions that empower businesses to embrace digital transform enhance security improve efficiency & accelerate sustainable growth."
                                className="text-3xl md:text-5xl font-bold text-white mb-8 leading-[1.2]"
                            />

                            <Reveal direction="up" delay={0.4}>
                                <p className="text-gray-400 text-lg mb-16 leading-relaxed max-w-3xl">
                                    We specialize in delivering end-to-end IT solutions that are both scalable and innovative, designed to meet the evolving needs of modern businesses. Our approach empowers organizations to embrace full-scale digital transformation while ensuring robust cybersecurity, streamlined operations, and enhanced system efficiency.
                                </p>
                            </Reveal>

                            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12" delay={0.6}>
                                {/* Metric 1 */}
                                <StaggerItem>
                                    <div className="text-5xl md:text-6xl font-bold text-white mb-4">98%</div>
                                    <h4 className="text-white font-bold text-lg mb-2">System Uptime Guaranteed:</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Our robust infrastructure and proactive monitoring ensure that your systems remain operational 24/7 with minimal downtime.
                                    </p>
                                </StaggerItem>

                                {/* Metric 2 */}
                                <StaggerItem>
                                    <div className="text-5xl md:text-6xl font-bold text-white mb-4">2.5K+</div>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        We take the time to understand your loved one's needs, routines. We take the time
                                    </p>

                                    {/* Avatars */}
                                    <div className="flex items-center -space-x-3">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0b0e13] bg-gray-700 overflow-hidden relative hover:z-10 hover:scale-110 transition-transform">
                                                <img src={`https://demo.awaikenthemes.com/codeio/it-solutions-dark/wp-content/uploads/2025/08/author-${i}.jpg`} alt="Client" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                        <div className="w-10 h-10 rounded-full border-2 border-[#0b0e13] bg-[#AEE2FF] flex items-center justify-center text-[#0b0e13] relative z-0">
                                            <Plus className="w-5 h-5" />
                                        </div>
                                    </div>
                                </StaggerItem>
                            </StaggerContainer>

                            <Link href="/about-us">
                                <button className="bg-[#AEE2FF] hover:bg-[#90d5ff] text-[#0b0e13] px-8 py-4 rounded-md font-bold transition-all flex items-center gap-2 group">
                                    More About Us
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
