"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Marquee = () => {
    return (
        <div className="w-full bg-[#AEE2FF]/5 py-4 overflow-hidden border-y border-white/5">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-16 items-center"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-16 text-white/80 font-bold text-xl uppercase tracking-wider items-center">
                            <span>Security</span>
                            <span className="w-2 h-2 rounded-full bg-[#AEE2FF]"></span>
                            <span>Cost-Effective</span>
                            <span className="w-2 h-2 rounded-full bg-[#AEE2FF]"></span>
                            <span>Business Continuity</span>
                            <span className="w-2 h-2 rounded-full bg-[#AEE2FF]"></span>
                            <span>Virtualization</span>
                            <span className="w-2 h-2 rounded-full bg-[#AEE2FF]"></span>
                            <span>Managed IT</span>
                            <span className="w-2 h-2 rounded-full bg-[#AEE2FF]"></span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export const RotatingText = () => {
    return (
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
            {/* Text Circle */}
            <div className="absolute inset-0 w-full h-full bg-[#AEE2FF] rounded-full animate-[spin_10s_linear_infinite] flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 100 100" width="100%" height="100%" className="w-full h-full p-2">
                    <defs>
                        <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text fontSize="11.5" fontWeight="bold">
                        <textPath xlinkHref="#circle" className="fill-[#0b0e13] uppercase tracking-[0.2em]">
                            Contact Us • Contact Us •
                        </textPath>
                    </text>
                </svg>
            </div>
            {/* Center Arrow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0b0e13] rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 -rotate-45">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div>
        </div>
    );
};
