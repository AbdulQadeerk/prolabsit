"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import React from "react";

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We offer a comprehensive range of IT services including Web Development, Mobile App Development, UI/UX Design, Cloud Solutions, and Digital Marketing.",
    },
    {
        question: "How much does a website cost?",
        answer: "The cost of a website varies depending on the complexity, features, and design requirements. We offer custom quotes based on your specific needs.",
    },
    {
        question: "Do you provide support after the project is completed?",
        answer: "Yes, we provide ongoing support and maintenance packages to ensure your software remains up-to-date and secure.",
    },
];

export default function FAQ() {
    return (
        <section className="py-20 bg-[#0b0e13]">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <Fade direction="up" triggerOnce>
                        <span className="text-blue-500 font-semibold text-sm tracking-wider uppercase mb-2 block">Common Questions</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
                    </Fade>
                </div>

                <Fade direction="up" delay={200} triggerOnce>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-[#11141b] rounded-xl border border-white/5 overflow-hidden">
                                <AccordionTrigger className="flex flex-1 items-center justify-between p-6 font-medium text-white hover:text-blue-500 transition-all [&[data-state=open]>svg]:rotate-180">
                                    {faq.question}
                                    <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200 text-gray-400" />
                                </AccordionTrigger>
                                <AccordionContent className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                    <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Fade>
            </div>
        </section>
    );
}
