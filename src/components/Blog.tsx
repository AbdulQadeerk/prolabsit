"use client";
import { Reveal } from "@/components/Reveal";
import { User, Calendar } from "lucide-react";

const blogs = [
    {
        title: "How to Optimize Your Website for SEO",
        date: "May 20, 2024",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "The Future of Artificial Intelligence",
        date: "May 18, 2024",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Top 10 Trends in IT Solutions 2024",
        date: "May 15, 2024",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    },
];

export default function Blog() {
    return (
        <section id="blog" className="py-20 bg-[#080a0f]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Reveal direction="up">
                        <span className="text-[#AEE2FF] font-semibold text-sm tracking-wider uppercase mb-2 block">Our Blog</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest News & Blog</h2>
                        <p className="text-gray-400">Stay updated with the latest trends and insights in technology.</p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <Reveal key={index} direction="up" delay={index * 0.1}>
                            <div className="group bg-[#11141b] rounded-2xl overflow-hidden border border-white/5 hover:border-[#AEE2FF]/30 transition-all duration-300 h-full">
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-[#AEE2FF] text-[#0b0e13] text-xs font-bold px-3 py-1 rounded-full uppercase">
                                        Technology
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3 text-[#AEE2FF]" />
                                            {blog.author}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3 text-[#AEE2FF]" />
                                            {blog.date}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 hover:text-[#AEE2FF] transition-colors cursor-pointer">
                                        {blog.title}
                                    </h3>
                                    <button className="text-sm font-medium text-[#AEE2FF] hover:text-[#90d5ff] transition-colors uppercase tracking-wider">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

