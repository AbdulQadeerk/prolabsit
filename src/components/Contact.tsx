"use client";
import { Fade } from "react-awesome-reveal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    const [phone, setPhone] = useState("");

    return (
        <section id="contact" className="py-20 bg-[#080a0f]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Info */}
                    <div>
                        <Fade direction="left" triggerOnce>
                            <span className="text-[#AEE2FF] font-semibold text-sm tracking-wider uppercase mb-2 block">Get In Touch</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have Any Project on Mind? Work Together.</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                We are available for freelance work. Connect with us via phone: 01923 456 789 or email: admin@example.com
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#AEE2FF]/10 flex items-center justify-center text-[#AEE2FF] shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Email Us</h4>
                                        <p className="text-gray-400">support@prolabsit.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#AEE2FF]/10 flex items-center justify-center text-[#AEE2FF] shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Call Us</h4>
                                        <p className="text-gray-400">+012 (345) 6789 99</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#AEE2FF]/10 flex items-center justify-center text-[#AEE2FF] shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Visit Us</h4>
                                        <p className="text-gray-400">123, Street Name, City, Country</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* Right Form */}
                    <div className="bg-[#11141b] p-8 rounded-2xl border border-white/5">
                        <Fade direction="right" triggerOnce>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#AEE2FF] transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="w-full bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#AEE2FF] transition-colors" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Phone Number</label>
                                    <PhoneInput
                                        country={'us'}
                                        value={phone}
                                        onChange={(phone) => setPhone(phone)}
                                        inputClass="!w-full !bg-[#0b0e13] !border-white/10 !text-white !h-[48px] !rounded-lg"
                                        buttonClass="!bg-[#0b0e13] !border-white/10 !rounded-l-lg"
                                        dropdownClass="!bg-[#11141b] !text-black"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Message</label>
                                    <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-[#0b0e13] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#AEE2FF] transition-colors"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-[#AEE2FF] hover:bg-[#90d5ff] text-[#0b0e13] font-bold py-4 rounded-lg transition-all">
                                    Send Message
                                </button>
                            </form>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}
