"use client";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="portfolio" className="py-20 bg-[#0b0e13]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <Reveal direction="up">
                            <span className="text-[#AEE2FF] font-semibold text-sm tracking-wider uppercase mb-2 block">Our Portfolio</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Latest Projects</h2>
                        </Reveal>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <button className="text-white border-b border-[#AEE2FF] pb-1 hover:text-[#AEE2FF] transition-colors">View All Projects</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item, index) => (
                        <Reveal key={item} direction="up" delay={index * 0.1}>
                            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                                <img
                                    src={`https://images.unsplash.com/photo-${item === 1 ? '1460925895917-afdab827c52f' : item === 2 ? '1522542552944-26db13f4882c' : '1498050108023-c5249f4df085'}?auto=format&fit=crop&q=80&w=800`}
                                    alt="Project"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-[#AEE2FF] text-sm font-medium mb-1 block">Technology</span>
                                        <h3 className="text-xl font-bold text-white">Digital Product Design</h3>
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
