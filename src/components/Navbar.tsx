"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0b0e13]/90 backdrop-blur-md border-b border-white/10 py-0" : "bg-transparent py-4"}`}>
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
                    <span className="text-[#AEE2FF]">PRO</span>LABSIT
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {["Home", "About", "Services", "Pages", "Blog", "Contact"].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-[#AEE2FF] transition-colors">
                            {item}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button className="bg-[#AEE2FF] hover:bg-[#90d5ff] text-[#0b0e13] px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105">
                        Get A Quote
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
}
