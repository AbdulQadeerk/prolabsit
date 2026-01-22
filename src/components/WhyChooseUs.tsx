"use client";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Check, Star, Users, Briefcase, MessageSquare, ShieldCheck, Layers, Award } from "lucide-react";

const features = [
    {
        icon: Award,
        title: "Expert Team with Deep Technical Knowledge",
        items: [
            "Years of experience across IT",
            "Certify industry leading expert",
            "Up-to-date knowledge latest tech"
        ]
    },
    {
        icon: Layers,
        title: "Proven Expertise Across Diverse IT Environments",
        items: [
            "Skilled in adapting tech",
            "Successfully delivered solutions",
            "Experience with cloud, on-premise"
        ]
    },
    {
        icon: Star,
        title: "Trusted by Industry Leaders Across Sectors",
        items: [
            "Recognized by top brands",
            "Proven results across industries",
            "Long-term partnerships with Fortune"
        ]
    },
    {
        icon: MessageSquare,
        title: "Transparent Communicate & Dedicated Support",
        items: [
            "Real-Time Project Updates",
            "Consistent Feedback Loops",
            "Dedicated Project Accounts Managers"
        ]
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-[#0b0e13]">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Badge Column (Left) */}
                    <div className="lg:col-span-4">
                        <Reveal>
                            <span className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold tracking-wide uppercase">
                                • Why Choose Us
                            </span>
                        </Reveal>
                    </div>
                    {/* Title Column (Right) */}
                    <div className="lg:col-span-8">
                        <Reveal direction="up">
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.2]">
                                From consultation to implementation – we deliver end to end it excellence that supports
                            </h2>
                        </Reveal>
                    </div>
                </div>

                {/* Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <Reveal key={index} direction="up" delay={index * 0.1}>
                            <div className="group bg-[#11141b] rounded-[4px] p-8 h-full flex flex-col justify-between hover:bg-[#11141b]/80 transition-all border border-white/5">
                                <div>
                                    {/* Icon */}
                                    <div className="mb-8 text-white group-hover:text-[#AEE2FF] transition-colors">
                                        <feature.icon className="w-12 h-12 stroke-[1] opacity-90" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-8 min-h-[60px]">{feature.title}</h3>

                                    {/* Check List */}
                                    <ul className="space-y-4 mb-8">
                                        {feature.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className="w-4 h-4 text-[#AEE2FF] mt-1 shrink-0" />
                                                <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6 border-t border-white/10">
                                    <a href="#" className="flex items-center gap-2 text-white font-bold text-sm hover:text-[#AEE2FF] transition-colors group-hover:gap-3">
                                        Learn More <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Bottom Footer Text */}
                <div className="text-center pt-8">
                    <div className="text-sm text-gray-400">
                        From day one to enterprise – <span className="text-white underline decoration-gray-500 underline-offset-4 cursor-pointer hover:text-[#AEE2FF] font-medium">We're Your Partner In Long-Term Tech Success.</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
