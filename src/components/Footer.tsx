import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#080a0f] border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                            <span className="text-blue-500">PRO</span>LABSIT
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            We provide the best IT solutions for your business. Innovation and technology combined to serve you better.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {["About Us", "Our Services", "Our Projects", "Team Members", "Contact Us"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center gap-2">
                                        <span className="text-blue-500/50">›</span> {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {["Web Development", "App Development", "UI/UX Design", "Cloud Solutions", "Cyber Security"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center gap-2">
                                        <span className="text-blue-500/50">›</span> {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                <span>123 Street Name, City, United States</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>+1 234 567 890</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>info@prolabsit.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2024 ProlabsIT. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
