"use client";

import { RotatingText } from "@/components/DesignElements";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
    };

    const floatAnimation = {
        animate: {
            y: [-15, 15, -15],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0b0e13]">
            {/* Background Gradients/Glows */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#AEE2FF]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Content */}
                    <div className="max-w-2xl">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.15 } }
                            }}
                        >
                            {/* Badge */}
                            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 w-fit">
                                <span className="w-2 h-2 rounded-full bg-[#AEE2FF]"></span>
                                <span className="text-white text-sm font-medium tracking-wide">
                                    Smarter IT. Stronger Business.
                                </span>
                            </motion.div>

                            {/* Heading */}
                            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[68px] font-bold text-white leading-[1.1] mb-6 block">
                                Empowering businesses through reliable & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#AEE2FF]">scalable it solutions</span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                                Harness the power of intelligent IT solutions built to evolve with your business. From cloud infrastructure to 24/7 support, we deliver flexible services.
                            </motion.p>

                            {/* Buttons */}
                            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                                <button className="cursor-pointer bg-[#AEE2FF] hover:bg-[#90d5ff] text-[#0b0e13] px-9 py-4 rounded-full font-bold transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(174,226,255,0.3)] hover:shadow-[0_0_30px_rgba(174,226,255,0.5)] transform hover:-translate-y-1">
                                    Get Started Now
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="cursor-pointer bg-transparent hover:bg-white/5 border border-white/20 text-white px-9 py-4 rounded-full font-bold transition-all flex items-center gap-2 transform hover:-translate-y-1">
                                    View All Services
                                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Content - Image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
                    >
                        {/* Entrance Animation Wrapper */}
                        <motion.div
                            variants={slideInRight}
                            className="relative w-full max-w-[600px] aspect-[4/5] lg:aspect-auto lg:h-full rounded-3xl"
                        >
                            {/* Floating Animation Wrapper */}
                            <motion.div
                                variants={floatAnimation}
                                animate="animate"
                                className="relative w-full h-full rounded-3xl overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-[#AEE2FF] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 pointer-events-none"></div>
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                    alt="IT Solutions Team"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Rotating Text Badge - Positioned overlapping bottom left */}
                                <div className="absolute bottom-8 left-8 z-20">
                                    <RotatingText />
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
