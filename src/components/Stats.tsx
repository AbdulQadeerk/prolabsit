"use client";
import CountUp from "react-countup";
import { Fade } from "react-awesome-reveal";

const stats = [
    { value: 200, label: "Team member", suffix: "+" },
    { value: 20, label: "Win Awards", suffix: "+" },
    { value: 650, label: "Completed Project", suffix: "+" },
    { value: 150, label: "Client reviews", suffix: "+" },
];

export default function Stats() {
    return (
        <section className="py-12 bg-blue-600">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <Fade cascade damping={0.1} triggerOnce>
                        {stats.map((stat, index) => (
                            <div key={index} className="text-white">
                                <div className="text-4xl md:text-5xl font-bold mb-2 flex justify-center items-center">
                                    <CountUp end={stat.value} duration={2.5} separator="," enableScrollSpy />
                                    <span>{stat.suffix}</span>
                                </div>
                                <div className="text-blue-100 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </section>
    );
}
