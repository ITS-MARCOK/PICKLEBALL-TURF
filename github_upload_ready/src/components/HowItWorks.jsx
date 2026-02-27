import React, { useRef, useEffect } from 'react';
import { CalendarCheck, Smartphone, Zap } from 'lucide-react';
import gsap from 'gsap';

export default function HowItWorks() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // Desktop Animation
            mm.add("(min-width: 1024px)", () => {
                gsap.from('.step-card', {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                    y: 40,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            });

            // Mobile Animation
            mm.add("(max-width: 1023px)", () => {
                gsap.from('.step-card', {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                    y: 20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: 'power2.out'
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const steps = [
        {
            icon: <CalendarCheck size={40} className="text-accent" />,
            num: "01",
            title: "Reserve",
            desc: "Lock your court online in 60 seconds. No front desk required."
        },
        {
            icon: <Smartphone size={40} className="text-accent" />,
            num: "02",
            title: "Arrive",
            desc: "Get a secure pin code to your phone. Walk in, lights go on."
        },
        {
            icon: <Zap size={40} className="text-accent" />,
            num: "03",
            title: "Play",
            desc: "Zero wind. Zero sun glare. Just pure, uninterrupted pickleball."
        }
    ];

    return (
        <section ref={containerRef} className="w-full section-wrapper bg-[#1A1A1A]">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-section-title text-white uppercase">
                        How It <span className="text-accent">Works</span>
                    </h2>
                    <p className="font-mono text-white/50 text-mono-label mt-4 uppercase tracking-widest">3 Steps to the Court</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
                    {steps.map((step, i) => (
                        <div key={i} className="step-card bg-[#111] p-6 md:p-8 rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 relative hover:border-accent/30 transition-colors duration-300">
                            <div className="font-heading text-6xl text-white/5 absolute top-4 right-6 pointer-events-none select-none">
                                {step.num}
                            </div>
                            <div className="mb-6 bg-[#222] w-16 h-16 rounded-2xl flex items-center justify-center border border-white/5 shadow-lg relative z-10">
                                {step.icon}
                            </div>
                            <h3 className="font-heading text-subheading uppercase text-white mb-3 tracking-wide relative z-10">{step.title}</h3>
                            <p className="font-sans text-body text-white/60 leading-relaxed relative z-10">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
