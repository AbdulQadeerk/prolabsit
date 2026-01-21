"use client";
import { Reveal } from "@/components/Reveal";
import { Star } from "lucide-react";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-[#0b0e13]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Reveal direction="up">
                        <span className="text-[#AEE2FF] font-semibold text-sm tracking-wider uppercase mb-2 block">Testimonials</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item, index) => (
                        <Reveal key={item} direction="up" delay={index * 0.1}>
                            <div className="bg-[#11141b] p-8 rounded-2xl border border-white/5 relative h-full">
                                {/* Quote Icon */}
                                <div className="absolute top-8 right-8 text-[#AEE2FF]/10 text-6xl font-serif">"</div>

                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    "Excellent service! The team was very professional and delivered the project on time. I would highly recommend them to anyone looking for IT solutions."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?img=${item + 10}`} alt="Client" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">John Doe</div>
                                        <div className="text-sm text-[#AEE2FF]">CEO, TechCorp</div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
