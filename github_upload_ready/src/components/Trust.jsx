import React from 'react';

export default function Trust() {
    const partners = [
        "OFFICIAL JOOLA PARTNER",
        "AS SEEN IN ATHLETIC MONTHLY",
        "PREMIUM PRO-CUSHION TURF",
        "RATED 5.0 ON COURT-FINDER",
        "100% CLIMATE CONTROLLED"
    ];

    return (
        <section className="py-12 border-y border-white/5 bg-[#0a0a0a] overflow-hidden whitespace-nowrap flex relative">
            <style>
                {`
                    @keyframes marquee {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee-custom {
                        animation: marquee 20s linear infinite;
                    }
                `}
            </style>

            {/* Gradients for smooth fade on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

            {/* Marquee Animation */}
            <div className="animate-marquee-custom inline-flex gap-16 items-center pr-16 w-max">
                {[...partners, ...partners].map((text, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <span className="w-2 h-2 bg-accent rounded-full opacity-50"></span>
                        <span className="font-mono text-white/40 text-sm md:text-base uppercase tracking-widest font-bold">
                            {text}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
