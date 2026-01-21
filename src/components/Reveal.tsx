"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    direction?: "up" | "down" | "left" | "right" | "none";
    delay?: number;
    duration?: number;
    className?: string;
}

export const Reveal = ({
    children,
    width = "fit-content",
    direction = "up",
    delay = 0.2,
    duration = 0.5,
    className = ""
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 75 : direction === "down" ? -75 : 0,
            x: direction === "left" ? 75 : direction === "right" ? -75 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: "easeOut"
            }
        },
    };

    return (
        <div ref={ref} style={{ position: "relative", width }} className={className}>
            <motion.div
                variants={variants as { hidden: Variant; visible: Variant }}
                initial="hidden"
                animate={mainControls}
            >
                {children}
            </motion.div>
        </div>
    );
};

export const FadeIn = ({
    children,
    delay = 0.2,
    className = ""
}: { children: React.ReactNode, delay?: number, className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
