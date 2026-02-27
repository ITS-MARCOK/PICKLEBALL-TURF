import React, { useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import gsap from 'gsap';

export default function Pricing() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // Desktop Animation
            mm.add("(min-width: 1024px)", () => {
                gsap.from('.price-card', {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    },
                    y: 50,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 1,
                    ease: 'power3.out'
                });
            });

            // Mobile Animation
            mm.add("(max-width: 1023px)", () => {
                gsap.from('.price-card', {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                    y: 30,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="pricing" className="w-full section-wrapper bg-concrete border-t border-white/5">
            <div className="section-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="font-mono text-accent text-mono-label tracking-widest uppercase mb-4">Access Options</div>
                    <h2 className="font-heading text-section-title text-white uppercase mb-6 cursor-pointer duration-200 hover:text-white/80 transition-colors">
                        No Hidden Fees.<br />Just Play.
                    </h2>
                    <p className="font-sans text-white/70 text-body">
                        Drop in for a single match or lock in your status. Members get priority booking and discounts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {/* Drop-In Card */}
                    <div className="price-card bg-[#111] overflow-hidden border border-white/10 p-6 md:p-12 rounded-2xl md:rounded-[2rem] flex flex-col group hover:border-white/30 transition-colors duration-300">
                        <h3 className="font-heading text-subheading text-white uppercase mb-2">Drop-In</h3>
                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="font-drama text-6xl text-white">$40</span>
                            <span className="font-mono text-white/50 text-mono-label uppercase">/ Court / Hr</span>
                        </div>

                        <ul className="space-y-4 mb-10 flex-grow">
                            {['Access to community open play', 'Standard 24-hr booking window', 'Paddles available for rent ($5)', 'Locker room access'].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-white/80 font-sans">
                                    <Check className="text-accent shrink-0 mt-0.5" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full min-h-[48px] py-4 rounded-full border border-white/20 text-white font-heading text-xl uppercase tracking-wider hover:bg-white hover:text-concrete transition-all duration-300 cursor-pointer touch-manipulation">
                            Book Single Session
                        </button>
                    </div>

                    {/* Membership Card */}
                    <div className="price-card bg-accent p-6 md:p-12 rounded-2xl md:rounded-[2rem] flex flex-col relative overflow-hidden group">
                        {/* subtle noise on accent bg */}
                        <div className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1622226955030-cf8d912440b8?auto=format&fit=crop&w=800&q=80")', backgroundSize: 'cover' }}></div>

                        <div className="absolute top-0 right-0 bg-concrete text-white font-mono text-mono-label uppercase px-4 py-1 rounded-bl-xl tracking-widest z-10">Best Value</div>

                        <h3 className="font-heading text-subheading text-concrete uppercase mb-2 relative z-10">The Regular</h3>
                        <div className="flex items-baseline gap-2 mb-6 relative z-10">
                            <span className="font-drama text-6xl text-concrete">$150</span>
                            <span className="font-mono text-concrete/70 text-mono-label uppercase">/ Month</span>
                        </div>

                        <ul className="space-y-4 mb-10 flex-grow relative z-10">
                            {[
                                <><span className="font-bold">Unlimited Open Play</span> (saves $160/mo)</>,
                                <><span className="font-bold">14-Day Advance Booking</span> (lock prime slots)</>,
                                'Free premium paddle rentals',
                                '10% off pro shop & clinics',
                                'Guest passes (2 per month)'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-concrete/90 font-sans border-b border-concrete/10 pb-3 last:border-0 last:pb-0">
                                    <Check className="text-concrete shrink-0 mt-0.5" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full bg-concrete min-h-[48px] text-white text-center py-4 rounded-full font-heading text-xl uppercase tracking-wider hover:bg-hotOrange transition-colors duration-300 shadow-xl cursor-pointer relative z-10 touch-manipulation">
                            Join The Club
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
