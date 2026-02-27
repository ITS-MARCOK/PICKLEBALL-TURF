import React from 'react';
import { Star } from 'lucide-react';

export default function SocialProof() {
    const reviews = [
        {
            text: "Best turf in the city. The lights are tournament-grade and the vibe is unmatched.",
            author: "Marcus T.",
            role: "3.5 DUPR"
        },
        {
            text: "Finally a place where I can book a court instantly without calling a front desk from 1995.",
            author: "Sarah J.",
            role: "Weekly Drop-in"
        },
        {
            text: "Got the membership. Saving a ton of money and met my new regular doubles partner here.",
            author: "David Chen",
            role: "Member"
        }
    ];

    return (
        <section id="community" className="w-full section-wrapper bg-concrete border-t border-white/5">
            <div className="section-container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="font-heading text-section-title text-white uppercase">
                            The <span className="text-accent">Community</span>.
                        </h2>
                        <div className="flex items-center gap-2 mt-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-concrete bg-[#333] overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Player" className="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                ))}
                            </div>
                            <span className="font-sans text-white/60 text-mono-label ml-4"><strong>+2,400</strong> players this month</span>
                        </div>
                    </div>
                    <div className="flex gap-1 text-accent">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={20} />)}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-[#111] overflow-hidden border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-[2rem] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                            <p className="font-sans text-white/80 text-body italic mb-8">"{review.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#222] overflow-hidden">
                                    <img src={`https://i.pravatar.cc/150?img=${i + 30}`} alt={review.author} className="w-full h-full object-cover grayscale contrast-125" loading="lazy" />
                                </div>
                                <div>
                                    <h4 className="font-mono text-white text-mono-label uppercase">{review.author}</h4>
                                    <span className="font-sans text-accent text-mono-label block">{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
