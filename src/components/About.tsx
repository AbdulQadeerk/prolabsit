"use client";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/DesignElements";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-20 bg-[#0b0e13] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <Reveal direction="left">
                            <div className="relative rounded-2xl overflow-hidden border border-white/10">
                                <div className="aspect-[4/3] bg-gray-800 relative">
                                    {/* Placeholder for About Image */}
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                                        alt="About Us"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            {/* Floating Experience Card */}
                            <div className="absolute -bottom-6 -right-6 lg:right-6 bg-[#AEE2FF] p-6 rounded-xl text-[#0b0e13] shadow-xl max-w-[200px] animate-float">
                                <div className="text-4xl font-bold mb-1">10+</div>
                                <div className="text-sm font-bold opacity-90">Years of Experience in IT Services</div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Text Side */}
                    <div>
                        <Reveal direction="right">
                            <span className="text-[#AEE2FF] font-semibold text-sm tracking-wider uppercase mb-2 block">About Our Company</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                Preparing For Your Success Provide Best IT Solutions.
                            </h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                We are architects of innovation, trailblazers of technological advancement, and partners in your success story. With a relentless pursuit of excellence, we deliver cutting-edge IT solutions.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    "Award Winning Company",
                                    "Professional Team Members",
                                    "24/7 Support Service"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#AEE2FF]" />
                                        <span className="text-gray-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-all border border-white/10">
                                Learn More
                            </button>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <Marquee />
            </div>
        </section>
    );
}
