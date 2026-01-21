"use client";
import { Reveal } from "@/components/Reveal";
import { Code, Smartphone, Database, Shield, Cloud, Palette } from "lucide-react";

const services = [
    {
        icon: Code,
        title: "Web Development",
        description: "Build robust and scalable web applications with tailored solutions.",
    },
    {
        icon: Smartphone,
        title: "App Development",
        description: "Create seamless mobile experiences for iOS and Android platforms.",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Crafting intuitive and engaging user interfaces for your products.",
    },
    {
        icon: Cloud,
        title: "Cloud Services",
        description: "Secure and scalable cloud infrastructure for your business needs.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-[#0b0e13]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Reveal direction="up">
                        <span className="text-[#AEE2FF] font-semibold text-sm tracking-wider uppercase mb-2 block">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do</h2>
                        <p className="text-gray-400">We offer a wide range of IT services to help your business grow and succeed in the digital age.</p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Reveal key={index} direction="up" delay={index * 0.1}>
                            <div className="group p-8 rounded-2xl bg-[#11141b] border border-white/5 hover:border-[#AEE2FF]/50 hover:bg-[#161a23] hover:-translate-y-2 transition-all duration-300 h-full">
                                <div className="w-14 h-14 rounded-lg bg-[#AEE2FF]/10 flex items-center justify-center mb-6 group-hover:bg-[#AEE2FF] transition-colors">
                                    <service.icon className="w-7 h-7 text-[#AEE2FF] group-hover:text-[#0b0e13] transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
                                <a href="#" className="inline-flex items-center text-sm font-medium text-[#AEE2FF] hover:text-[#90d5ff] transition-colors">
                                    Read More &rarr;
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
