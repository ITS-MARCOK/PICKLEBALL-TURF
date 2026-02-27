import React, { useState, useEffect } from 'react';
import { MapPin, Clock } from 'lucide-react';

export default function Location() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Simple mock for "Live Open Indicator"
        // Usually compares current time to hardcoded hours.
        const hour = new Date().getHours();
        setIsOpen(hour >= 6 && hour < 23); // 6 AM to 11 PM
    }, []);

    return (
        <section id="location" className="w-full section-wrapper bg-concrete border-t border-white/5">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Map / Visual Side */}
                    <div className="relative w-full h-[300px] md:h-[400px] bg-[#111] rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 group">
                        <div className="absolute inset-0 bg-concrete/40 mix-blend-multiply z-10 transition-colors group-hover:bg-transparent duration-500"></div>
                        {/* Aesthetic Map Image replacement */}
                        <div
                            className="w-full h-full bg-cover bg-center grayscale contrast-125"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80")' }}
                        />

                        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                            <div className="bg-concrete p-4 rounded-full border border-accent text-accent shadow-[0_0_30px_rgba(211,244,54,0.3)]">
                                <MapPin size={32} />
                            </div>
                        </div>
                    </div>

                    {/* Info Side */}
                    <div className="flex flex-col justify-center">
                        <h2 className="font-heading text-section-title text-white uppercase mb-4">
                            Where We <br /> <span className="text-accent">Play.</span>
                        </h2>

                        <div className="flex items-center gap-3 mb-8">
                            <div className={`px-3 py-1 rounded-full text-xs font-mono uppercase border ${isOpen ? 'border-green-500 text-green-400 bg-green-500/10' : 'border-red-500 text-red-400 bg-red-500/10'}`}>
                                {isOpen ? '● Open Now' : '○ Closed • Opens at 6AM'}
                            </div>
                            <span className="text-white/50 font-mono text-mono-label uppercase">Till 11:00 PM</span>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-white/40 mt-1" size={20} />
                                <div>
                                    <h4 className="text-white font-sans font-bold text-subheading">Dink & Gather Turf</h4>
                                    <p className="text-white/50 font-sans text-body mt-1">1280 Pickleball Ave.<br />Warehouse District, NY 10001</p>
                                    <button className="mt-3 min-h-[48px] touch-manipulation text-accent font-mono text-mono-label hover:underline uppercase tracking-wide cursor-pointer">Get Directions →</button>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="text-white/40 mt-1" size={20} />
                                <div>
                                    <h4 className="text-white font-sans font-bold text-subheading">Hours</h4>
                                    <p className="text-white/50 font-sans text-body mt-1">Mon - Sun: 6:00 AM – 11:00 PM<br />Open 365 days a year.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
