import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Philosophy() {
    const lineRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                gsap.from(lineRef.current, {
                    scrollTrigger: {
                        trigger: lineRef.current,
                        start: 'top 80%',
                    },
                    y: 60,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 1.2,
                    ease: 'power3.out'
                });
            });

            mm.add("(max-width: 1023px)", () => {
                gsap.from(lineRef.current, {
                    scrollTrigger: {
                        trigger: lineRef.current,
                        start: 'top 80%',
                    },
                    y: 30,
                    opacity: 0,
                    stagger: 0.08,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            });
        }, lineRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="relative overflow-hidden bg-[#0A0A0A] section-wrapper flex items-center min-h-[60vh] border-y border-white/5">
            {/* Abstract Background Texture Layer at 0.08 opacity */}
            <div
                className="absolute inset-0 z-0 opacity-[0.08] mix-blend-overlay bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1920&q=80")' }}
            />

            <div className="relative z-10 w-full section-container text-center" ref={lineRef}>
                <h2 className="text-subheading text-[#888] font-sans font-medium mb-4 md:mb-6">
                    Most pickleball courts focus on: booking fees.
                </h2>
                <h3 className="text-hero text-white font-drama uppercase leading-tight tracking-wide">
                    We focus on: <br /> <span className="text-accent italic scale-[1.05] md:scale-110 inline-block">The Hangout.</span>
                </h3>
            </div>
        </section>
    );
}
