import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Features() {
    const containerRef = useRef(null);

    // Shuffler State
    const [shufflerCards, setShufflerCards] = useState([
        "ALL-WEATHER PLAY", "PROFESSIONAL CUSHION", "NO BAD BOUNCES"
    ]);

    // Telemetry Typed Text State
    const [typewriter, setTypewriter] = useState('');
    const fullText = "Zero friction. Open 6AM-11PM. Drop in or lock down your court online.";

    useEffect(() => {
        let ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // Desktop Animation
            mm.add("(min-width: 1024px)", () => {
                gsap.from('.feature-card', {
                    y: 60,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                });
            });

            // Mobile Animation (Rule 7)
            mm.add("(max-width: 1023px)", () => {
                gsap.from('.feature-card', {
                    y: 30,
                    opacity: 0,
                    stagger: 0.08,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                });
            });
        }, containerRef);

        // Shuffler Interval
        const interval = setInterval(() => {
            setShufflerCards(prev => {
                const newArr = [...prev];
                const last = newArr.pop();
                newArr.unshift(last);
                return newArr;
            });
        }, 3000);

        // Typewriter effect
        let charIndex = 0;
        const typeInterval = setInterval(() => {
            if (charIndex < fullText.length) {
                setTypewriter(fullText.slice(0, charIndex + 1));
                charIndex++;
            } else {
                charIndex = 0; // restart for demo
            }
        }, 100);

        return () => {
            clearInterval(interval);
            clearInterval(typeInterval);
            ctx.revert();
        };
    }, []);

    return (
        <section ref={containerRef} id="courts" className="w-full section-wrapper bg-concrete border-t border-white/5">
            <div className="section-container">
                <h2 className="font-heading text-section-title text-white uppercase mb-8 md:mb-16 max-w-2xl">
                    Built for the <span className="text-accent">Obsessed</span>.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                    {/* Card 1: Diagnostic Shuffler */}
                    <div className="feature-card cursor-pointer relative overflow-hidden bg-[#222] rounded-2xl md:rounded-[2rem] p-6 md:p-8 min-h-[300px] flex flex-col justify-between border border-white/10 group hover:border-accent/40 transition-colors duration-200 touch-manipulation">
                        <div>
                            <div className="font-mono text-mono-label text-accent mb-4 tracking-widest uppercase">01 // Premium Turf</div>
                            <h3 className="font-heading text-subheading uppercase text-white mb-2">The Surface</h3>
                        </div>
                        <div className="relative h-20 w-full mt-auto">
                            {shufflerCards.map((card, i) => (
                                <div
                                    key={card}
                                    className="absolute w-full py-3 px-4 rounded-xl font-drama text-xl tracking-wider text-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                                    style={{
                                        top: i * 10,
                                        opacity: 1 - (i * 0.3),
                                        transform: `scale(${1 - (i * 0.05)})`,
                                        backgroundColor: i === 0 ? '#D3F436' : '#333',
                                        color: i === 0 ? '#1A1A1A' : '#FFF',
                                        zIndex: 3 - i
                                    }}
                                >
                                    {card}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: Telemetry Typewriter */}
                    <div className="feature-card cursor-pointer relative overflow-hidden bg-[#222] rounded-2xl md:rounded-[2rem] p-6 md:p-8 min-h-[300px] flex flex-col justify-between border border-white/10 group hover:border-accent/40 transition-colors duration-200 touch-manipulation">
                        <div>
                            <div className="font-mono text-mono-label text-accent mb-4 tracking-widest uppercase flex items-center gap-2">
                                02 // Access <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            </div>
                            <h3 className="font-heading text-subheading uppercase text-white mb-2">Book or Drop In</h3>
                        </div>
                        <div className="font-mono text-white/70 text-mono-label leading-relaxed mt-auto h-24">
                            {`> `} {typewriter}
                            <span className="inline-block w-2 bg-accent ml-1 animate-pulse h-4 align-middle"></span>
                        </div>
                    </div>

                    {/* Card 3: Cursor Protocol */}
                    <div className="feature-card cursor-pointer relative overflow-hidden bg-[#222] rounded-2xl md:rounded-[2rem] p-6 md:p-8 min-h-[300px] flex flex-col justify-between border border-white/10 group hover:border-accent/40 transition-colors duration-200 touch-manipulation">
                        <div>
                            <div className="font-mono text-mono-label text-accent mb-4 tracking-widest uppercase">03 // The Vibe</div>
                            <h3 className="font-heading text-subheading uppercase text-white mb-2">Neighborhood HQ</h3>
                            <p className="font-sans text-body text-white/70">Stay for the hangs. Make friends.</p>
                        </div>
                        <div className="grid grid-cols-7 gap-1 mt-auto">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                                <div key={i} className="aspect-square rounded flex items-center justify-center font-mono text-xs bg-white/5 text-white/50 relative overflow-hidden">
                                    <span className="relative z-10">{d}</span>
                                    {i === 5 && (
                                        <div className="absolute inset-0 bg-accent/20 animate-pulse border border-accent"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
