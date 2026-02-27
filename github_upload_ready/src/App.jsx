import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Booking from './components/Booking';
import Pricing from './components/Pricing';
import Philosophy from './components/Philosophy';
import SocialProof from './components/SocialProof';
import Location from './components/Location';
import FAQ from './components/FAQ';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            // global animations if needed
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-concrete overflow-hidden">
            <Navbar />
            <Hero />
            <Trust />
            <HowItWorks />
            <Features />
            <Pricing />
            <SocialProof />
            <Booking />
            <Philosophy />
            <FAQ />
            <Location />
            <LeadCapture />
            <Footer />
        </div>
    );
}

export default App;
