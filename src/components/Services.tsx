"use client";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, LifeBuoy, Database, Server, ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
    {
        icon: LifeBuoy,
        title: "IT Consulting & Strategy",
        description: "Comprehensive protection from evolving threats with risk assessments, firewalls, endpoint protection, and training.",
    },
    {
        icon: Database,
        title: "Data Backup & Recovery",
        description: "Comprehensive protection from evolving threats with risk assessments, firewalls, endpoint protection, and training.",
    },
    {
        icon: Server,
        title: "Network & Infrastructure",
        description: "Comprehensive protection from evolving threats with risk assessments, firewalls, endpoint protection, and training.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-[#0b0e13]">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Badge Column (Left) */}
                    <div className="lg:col-span-4">
                        <Reveal>
                            <span className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold tracking-wide uppercase">
                                • Our Core Services
                            </span>
                        </Reveal>
                    </div>
                    {/* Title Column (Right) */}
                    <div className="lg:col-span-8">
                        <Reveal direction="up">
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.2]">
                                Comprehensive, scalable it services designed to empower growing businesses
                            </h2>
                        </Reveal>
                    </div>
                </div>

                {/* Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
                    {services.map((service, index) => (
                        <Reveal key={index} direction="up" delay={index * 0.1}>
                            <div className="group bg-[#1a1f29] rounded-[4px] p-8 h-full flex flex-col justify-between hover:bg-[#1a1f29]/80 transition-all border border-white/5">
                                <div>
                                    {/* Icon */}
                                    <div className="mb-8 text-white group-hover:text-[#AEE2FF] transition-colors">
                                        <service.icon className="w-12 h-12 stroke-[1.5]" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-white/10">
                                    <a href="#" className="flex items-center gap-2 text-white font-bold text-sm hover:text-[#AEE2FF] transition-colors group-hover:gap-3">
                                        Learn More <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))}

                    {/* CTA Card (Image) */}
                    <Reveal direction="up" delay={0.3}>
                        <div className="relative rounded-[4px] overflow-hidden h-full min-h-[420px] group bg-[#1a1f29]">
                            <Image
                                src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=800"
                                alt="Support Team"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>

                            <div className="absolute bottom-8 left-8 right-8">
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">Need Any Help? We're Here To Help You!</h3>
                                <p className="text-gray-300 text-xs mb-6 opacity-90">
                                    Comprehensive protection from evolving threats with risk assessments.
                                </p>
                                <button className="bg-[#AEE2FF] text-[#0b0e13] px-6 py-3 rounded-md font-bold text-sm flex items-center gap-2 hover:bg-white transition-colors">
                                    Contact Us <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Bottom Footer / Scroller Indicator */}
                <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-6">
                    {/* Mock Progress Bar */}
                    <div className="flex gap-0 w-full max-w-xs h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-white"></div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="bg-[#AEE2FF] text-[#0b0e13] text-[10px] font-bold px-2 py-0.5 rounded-sm">Free</span>
                        <span>From setup to scaling – <span className="text-white underline decoration-gray-500 underline-offset-4 cursor-pointer hover:text-[#AEE2FF]">Discover Solutions That Adapt As You Grow.</span></span>
                    </div>
                </div>

            </div>
        </section>
    );
}
