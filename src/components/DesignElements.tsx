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
        <div className="absolute bottom-20 right-12 hidden lg:flex items-center justify-center w-32 h-32 animate-[spin_10s_linear_infinite]">
            <svg viewBox="0 0 100 100" width="100" height="100">
                <defs>
                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text fontSize="14">
                    <textPath xlinkHref="#circle" className="text-white fill-current uppercase tracking-widest text-[10px]">
                        * Contact Us * Contact Us * Contact Us
                    </textPath>
                </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#AEE2FF] rounded-full"></div>
            </div>
        </div>
    );
};
