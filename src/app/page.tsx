import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0b0e13]">
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Stats />
            <Projects />
            <Testimonials />
            <Blog />
            <FAQ />
            <Contact />
            <Footer />
        </main>
    );
}
