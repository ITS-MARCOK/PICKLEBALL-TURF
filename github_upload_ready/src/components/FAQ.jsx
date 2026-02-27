import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "Do I need to bring my own paddle?",
            a: "Nope. We rent premium carbon fiber paddles for $5/session. Members get free rentals. We do provide the balls for free on every court."
        },
        {
            q: "What is your cancellation policy?",
            a: "Full refund if you cancel 24 hours before your slot. To keep the courts active, no-shows or late cancellations will be charged the full court fee."
        },
        {
            q: "Can I just show up to play?",
            a: "You can, but we highly recommend booking in advance—especially between 5PM and 9PM. Drop-ins are assigned on a first-come, first-served basis for open courts."
        },
        {
            q: "Are the courts indoor or outdoor?",
            a: "We are a fully enclosed, climate-controlled turf facility. You get the perfect bounce and zero wind interference, 365 days a year."
        },
        {
            q: "What kind of shoes do I need?",
            a: "Non-marking court shoes are required. No running shoes with heavy treads (they ruin the turf and your ankles), and absolutely no cleats."
        }
    ];

    return (
        <section id="faq" className="w-full section-wrapper bg-concrete border-t border-white/5">
            <div className="section-container max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-section-title text-white uppercase mb-4">
                        <span className="text-accent">Intel</span> & Rules.
                    </h2>
                    <p className="font-mono text-white/50 text-mono-label uppercase tracking-widest">Zero Friction. Just Answers.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === i ? 'border-accent bg-[#111]' : 'border-white/10 bg-[#151515] hover:border-white/20'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                className="w-full min-h-[48px] touch-manipulation flex items-center justify-between p-6 text-left cursor-pointer"
                            >
                                <span className="font-heading text-subheading text-white uppercase pr-4">{faq.q}</span>
                                <div className={`shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-accent' : 'text-white/50'}`}>
                                    <ChevronDown size={24} />
                                </div>
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out font-sans text-body text-white/70 ${openIndex === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                            >
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
