import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function LeadCapture() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <section className="w-full section-wrapper bg-concrete">
            <div className="section-container max-w-5xl mx-auto">
                <div className="bg-accent rounded-2xl md:rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-[0_0_50px_rgba(211,244,54,0.15)]">

                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1622226955030-cf8d912440b8?auto=format&fit=crop&w=800&q=80")', backgroundSize: 'cover' }}>
                    </div>

                    <div className="relative z-10 md:w-1/2 text-center md:text-left">
                        <div className="inline-block bg-concrete text-white text-mono-label font-mono px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
                            New Player Bonus
                        </div>
                        <h2 className="font-heading text-section-title text-concrete uppercase mb-4">
                            Get 50% Off <br /> Your First <br /> Drop-in.
                        </h2>
                        <p className="font-sans text-concrete/80 text-body font-medium">
                            Join the inner circle. We'll send your discount code instantly, plus invites to exclusive open-play nights.
                        </p>
                    </div>

                    <div className="relative z-10 w-full md:w-1/2">
                        {isSubmitted ? (
                            <div className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl h-full min-h-[120px] animate-fade-in">
                                <h3 className="font-heading text-2xl text-concrete uppercase mb-2">You're In!</h3>
                                <p className="font-sans text-concrete/80">We just sent your 50% off code and VIP invite.</p>
                            </div>
                        ) : (
                            <>
                                <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="bg-white p-2 rounded-2xl flex flex-col sm:flex-row shadow-xl">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full min-h-[48px] bg-transparent px-4 py-3 sm:py-0 text-base text-concrete font-sans outline-none placeholder:text-concrete/40"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-concrete text-white min-h-[48px] min-w-[120px] px-6 py-4 rounded-xl font-heading text-xl uppercase whitespace-nowrap hover:bg-[#111] transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2 group touch-manipulation"
                                    >
                                        Send It
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                                    </button>
                                </form>
                                <p className="text-concrete/60 font-sans text-mono-label mt-4 text-center md:text-left">
                                    No spam. Unsubscribe anytime.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
