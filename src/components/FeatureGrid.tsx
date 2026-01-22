import { Reveal, StaggerContainer, StaggerItem, ScaleIn } from "@/components/Reveal";
import { ArrowUpRight, ArrowRight, Phone, Mail, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function FeatureGrid() {
    return (
        <section className="bg-[#0b0e13] pb-20">
            <div className="container mx-auto px-4 md:px-6">
                {/* 4 Column Grid - No Gap to mimic split panel look or small gap */}
                <div className="container mx-auto px-4 md:px-6">
                    {/* 4 Column Grid - No Gap to mimic split panel look or small gap */}
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 min-h-[500px] rounded-3xl overflow-hidden">

                        {/* Col 1: Dark Tech Card */}
                        <StaggerItem className="bg-[#11141b] p-8 md:p-10 flex flex-col justify-between border-r border-b border-white/5 relative group">
                            <div className="mb-6">
                                <div className="w-14 h-14 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-[#AEE2FF] group-hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">24*7 IT Support & Monitoring</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    Our dedicated team continuously monitors your systems to detect issues.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-sm text-gray-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#AEE2FF]"></div>
                                        Round-the-Clock Expert Assistance
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#AEE2FF]"></div>
                                        Proactive Issue Detection & Resolution
                                    </li>
                                </ul>
                            </div>
                            <a href="#" className="flex items-center gap-2 text-[#AEE2FF] font-bold text-sm hover:gap-3 transition-all">
                                Learn More <ArrowUpRight className="w-4 h-4" />
                            </a>
                            {/* Background Pattern Overlay */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                        </StaggerItem>

                        {/* Col 2: Experience Card */}
                        <StaggerItem className="bg-[#0b0e13] p-8 md:p-10 flex flex-col justify-center border-r border-b border-white/5 relative">
                            <ScaleIn delay={0.2}>
                                <div className="flex items-center -space-x-4 mb-8">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0b0e13] bg-gray-700 overflow-hidden relative z-10 hover:z-20 hover:scale-110 transition-transform">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-12 h-12 rounded-full border-2 border-[#0b0e13] bg-[#AEE2FF] flex items-center justify-center text-black font-bold text-xs relative z-10">
                                        1k+
                                    </div>
                                </div>
                            </ScaleIn>

                            <h3 className="text-xl font-bold text-white mb-4">Experience You Can Trust. Results You Can Measure.</h3>
                            <p className="text-gray-400 text-sm mb-12 leading-relaxed">
                                Backed by years of hands-on expertise and proven methodology, we deliver IT solutions.
                            </p>

                            <div>
                                <div className="text-6xl font-bold text-white mb-2">25+</div>
                                <div className="text-gray-400 text-sm uppercase tracking-wider">Years Of Experience</div>
                            </div>
                        </StaggerItem>

                        {/* Col 3: Image Card */}
                        <StaggerItem className="relative h-[300px] md:h-auto border-r border-b border-white/5 group overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=800"
                                alt="Team Working"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </StaggerItem>

                        {/* Col 4: Contact/Support Card */}
                        <StaggerItem className="bg-[#11141b] p-8 md:p-10 flex flex-col justify-between border-b border-white/5 relative overflow-hidden group">
                            <div className="relative z-10">
                                <div className="w-14 h-14 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-[#AEE2FF] group-hover:rotate-12 transition-transform duration-300">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">24*7 IT Support & Monitoring</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    Our dedicated team continuously monitors your systems to detect issues.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase mb-1">Contact us :</p>
                                        <p className="text-white font-bold">+(123) 456-789</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase mb-1">Email us :</p>
                                        <p className="text-white font-bold">info@domain.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <button className="bg-[#AEE2FF] hover:bg-[#90d5ff] text-black px-6 py-3 rounded-md font-bold text-sm w-full top-3 flex items-center justify-between group cursor-pointer">
                                    Contact Us
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Support Person Image Overlay */}
                            <div className="absolute bottom-0 right-[-20px] w-64 h-64 z-0 pointer-events-none opacity-80 group-hover:scale-105 transition-transform duration-500 origin-bottom-right">
                                <img src="https://i.ibb.co/51y1W1N/cta-img-placeholder.png" alt="Support" className="w-full h-full object-contain object-bottom" />
                            </div>
                        </StaggerItem>

                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
}
