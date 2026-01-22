"use client";
import { Reveal, StaggerContainer, StaggerItem, TextReveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const blogs = [
    {
        title: "Cybersecurity in the Age of Remote Work: Preparing for a New Wave",
        badge: "Automation",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Unlocking the Power of AI & Automation in IT Service Management",
        badge: "Automation",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Why Data Backup & Disaster Recovery Plans Are Essential",
        badge: "Data Backup",
        image: "https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "The Role of AI & Machine Learning in Cyber Defense",
        badge: "Network Security",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800",
    }
];

export default function Blog() {
    return (
        <section id="blog" className="py-24 bg-[#0b0e13]">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Badge Column (Left) */}
                    <div className="lg:col-span-4">
                        <Reveal>
                            <span className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold tracking-wide uppercase">
                                • Latest Blogs
                            </span>
                        </Reveal>
                    </div>
                    {/* Title Column (Right) */}
                    <div className="lg:col-span-8">
                        <Reveal direction="up">
                            <TextReveal
                                text="From digital transformation to data security – read what's shaping the future of modern it services"
                                className="text-3xl md:text-5xl font-bold text-white leading-[1.2]"
                            />
                        </Reveal>
                    </div>
                </div>

                {/* Blog Grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogs.map((blog, index) => (
                        <StaggerItem key={index}>
                            <div className="group h-full flex flex-col">
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Badge */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-[#1a1f29]/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] uppercase font-bold text-white border border-white/10">
                                            {blog.badge}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-[#AEE2FF] transition-colors cursor-pointer min-h-[50px]">
                                        {blog.title}
                                    </h3>

                                    <a href="#" className="flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-wider hover:text-[#AEE2FF] transition-colors">
                                        Learn More <ArrowUpRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

            </div>
        </section>
    );
}
