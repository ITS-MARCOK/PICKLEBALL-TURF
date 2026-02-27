import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Active section observer
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.4 });

        sections.forEach(section => observer.observe(section));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileOpen(false);
        }
    };

    // Locking body scroll when mobile menu is open (Phase 10, Rule 5)
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-[2rem] transition-all duration-300 px-6 py-4 flex items-center justify-between ${isScrolled ? 'bg-concrete/80 backdrop-blur-xl border border-white/10 shadow-lg' : 'bg-transparent'
                    }`}
            >
                <div className="font-heading text-2xl tracking-wider text-white uppercase">
                    Dink & Gather
                </div>

                <div className="hidden md:flex items-center space-x-8 font-sans text-sm font-medium">
                    <a href="#courts" onClick={(e) => scrollToSection(e, 'courts')} className={`transition-colors duration-200 ${activeSection === 'courts' ? 'text-accent' : 'text-white hover:text-accent'}`}>Courts</a>
                    <a href="#community" onClick={(e) => scrollToSection(e, 'community')} className={`transition-colors duration-200 ${activeSection === 'community' ? 'text-accent' : 'text-white hover:text-accent'}`}>Community</a>
                    <a href="#location" onClick={(e) => scrollToSection(e, 'location')} className={`transition-colors duration-200 ${activeSection === 'location' ? 'text-accent' : 'text-white hover:text-accent'}`}>Location</a>
                    <button onClick={(e) => scrollToSection(e, 'book')} className="bg-white text-concrete min-h-[48px] min-w-[120px] px-6 py-3 rounded-full font-bold hover:bg-accent transition-colors shadow-[0_0_15px_rgba(211,244,54,0)] hover:shadow-[0_0_15px_rgba(211,244,54,0.4)] cursor-pointer touch-manipulation">
                        Book
                    </button>
                </div>

                <button
                    className="md:hidden text-white min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer touch-manipulation"
                    onClick={() => setMobileOpen(true)}
                    aria-label="Open menu"
                >
                    <Menu size={28} />
                </button>
            </nav>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 z-[60] bg-concrete transform transition-transform duration-500 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="p-6 flex justify-end">
                    <button onClick={() => setMobileOpen(false)} className="text-white min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer touch-manipulation" aria-label="Close menu">
                        <X size={32} />
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
                    <a href="#courts" onClick={(e) => scrollToSection(e, 'courts')} className={`font-heading text-4xl uppercase transition-colors duration-200 ${activeSection === 'courts' ? 'text-accent' : 'text-white hover:text-accent'}`}>Courts</a>
                    <a href="#community" onClick={(e) => scrollToSection(e, 'community')} className={`font-heading text-4xl uppercase transition-colors duration-200 ${activeSection === 'community' ? 'text-accent' : 'text-white hover:text-accent'}`}>Community</a>
                    <a href="#location" onClick={(e) => scrollToSection(e, 'location')} className={`font-heading text-4xl uppercase transition-colors duration-200 ${activeSection === 'location' ? 'text-accent' : 'text-white hover:text-accent'}`}>Location</a>
                    <button onClick={(e) => scrollToSection(e, 'book')} className="mt-8 bg-accent text-concrete px-8 py-4 rounded-full font-heading text-2xl uppercase w-[80%] max-w-sm transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer min-h-[48px] touch-manipulation">
                        Book Now
                    </button>
                </div>
            </div>
        </>
    );
}
