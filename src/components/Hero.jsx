import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.hero-el',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden bg-concrete snap-start">
            {/* Background Image (Rule 1) */}
            <img
                src="/hero-custom.png"
                alt="Pickleball Court Hero"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ zIndex: 0 }}
                loading="eager"
                fetchPriority="high"
            />
            {/* Gradient Overlay (Rule 1) */}
            <div className="absolute inset-0 bg-gradient-to-t from-concrete/90 via-concrete/60 to-black/10" style={{ zIndex: 1 }} />

            {/* CSS Noise Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay" style={{ zIndex: 2 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>

            {/* Content (Rule 1, Rule 2) */}
            <div className="relative h-full w-full flex flex-col justify-end pb-12 px-6 md:px-16 lg:px-24 mx-auto" style={{ zIndex: 3 }}>
                <h1 className="hero-el font-heading text-hero text-white uppercase">
                    Dink Hard.<br />Hang Out.
                </h1>
                <h2 className="hero-el font-drama text-section-title text-accent mt-2 tracking-wide uppercase">
                    The Turf.
                </h2>

                <p className="hero-el font-sans text-body text-white/80 mt-6 max-w-md">
                    Join the waitlist or book a drop-in slot. New member spots open every Monday.
                </p>

                <div className="hero-el mt-10">
                    <button onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })} className="group relative overflow-hidden rounded-full bg-accent min-h-[48px] min-w-[120px] px-6 py-3 md:px-8 md:py-4 text-concrete font-sans font-bold text-base md:text-lg transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer touch-manipulation">
                        <span className="relative z-10 block transition-transform duration-200 group-hover:-translate-y-full">Grab Your Court</span>
                        <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-full transition-transform duration-200 group-hover:translate-y-0 text-white bg-hotOrange">Let's Go</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
