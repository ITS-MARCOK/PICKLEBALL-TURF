import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#080808] text-white pt-16 md:pt-20 pb-8 mt-12 rounded-t-[2rem] md:rounded-t-[4rem]">
            <div className="section-container">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16 text-left">
                    <div className="col-span-2 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="font-heading text-subheading uppercase tracking-wider text-white mb-4">
                            Dink & Gather
                        </h2>
                        <p className="font-sans text-white/50 text-body max-w-sm mb-6">
                            Your neighborhood pickleball hangout where anyone can show up, play hard, and leave with new friends.
                        </p>

                        {/* System Status pulsing dot */}
                        <div className="flex items-center gap-2 mt-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            <span className="font-mono text-white/40 text-mono-label uppercase tracking-widest">System Operational</span>
                        </div>
                    </div>

                    <div className="col-span-1 pl-4 sm:pl-12 text-left">
                        <h4 className="font-mono text-accent text-mono-label mb-6 uppercase tracking-widest">The Turf</h4>
                        <ul className="space-y-4 font-sans text-body text-white/70">
                            <li><a href="#courts" className="hover:text-white transition-colors py-2 inline-block touch-manipulation">Courts</a></li>
                            <li><a href="#book" className="hover:text-white transition-colors py-2 inline-block touch-manipulation">Book Now</a></li>
                            <li><a href="#location" className="hover:text-white transition-colors py-2 inline-block touch-manipulation">Location</a></li>
                            <li><a href="#pricing" className="hover:text-white transition-colors py-2 inline-block touch-manipulation">Pricing</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 pr-4 sm:pr-12 text-right md:text-left">
                        <h4 className="font-mono text-accent text-mono-label mb-6 uppercase tracking-widest">Connect</h4>
                        <ul className="space-y-4 font-sans text-body text-white/70">
                            <li><a href="#" className="hover:text-white transition-colors py-2 inline-block touch-manipulation">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors py-2 inline-block touch-manipulation">TikTok</a></li>
                            <li><a href="#book" className="hover:text-white transition-colors py-2 inline-block touch-manipulation">Contact</a></li>
                            <li><a href="#faq" className="hover:text-white transition-colors py-2 inline-block touch-manipulation">FAQ</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center pt-8 border-t border-white/10 text-white/40 text-mono-label font-sans text-center">
                    <p>© {new Date().getFullYear()} Dink & Gather. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4">
                        <a href="#" className="hover:text-white py-2 touch-manipulation">Privacy</a>
                        <a href="#" className="hover:text-white py-2 touch-manipulation">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
