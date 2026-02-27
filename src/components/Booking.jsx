import React, { useState } from 'react';

export default function Booking() {
    const [selectedDay, setSelectedDay] = useState(2);
    const [selectedTime, setSelectedTime] = useState('18:00');
    const [isConfirmed, setIsConfirmed] = useState(false);

    const days = [
        { name: 'Mon', num: 12 }, { name: 'Tue', num: 13 },
        { name: 'Wed', num: 14 }, { name: 'Thu', num: 15 },
        { name: 'Fri', num: 16 }, { name: 'Sat', num: 17 }, { name: 'Sun', num: 18 }
    ];

    return (
        <section id="book" className="w-full section-wrapper bg-concrete border-t border-white/5">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                    <div>
                        <div className="font-mono text-accent text-mono-label tracking-widest uppercase mb-4">Reservation</div>
                        <h2 className="font-heading text-section-title text-white uppercase mb-6">
                            Lock Down <br /> Your Court.
                        </h2>
                        <p className="font-sans text-white/70 text-body mb-4 max-w-md">
                            Pick your slot, grab your crew, and show up. We provide the net, the vibe, and the premium turf.
                        </p>
                        <div className="inline-block bg-hotOrange/10 border border-hotOrange text-hotOrange text-mono-label font-mono px-3 py-2 rounded-full mb-8">
                            ⚠️ Prime slots fill up 48hrs in advance
                        </div>

                        {/* Location Pulse */}
                        <div className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-[#222] w-fit">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                            </span>
                            <span className="font-mono text-white/90 text-sm">Dink & Gather Main Turf (Open Now)</span>
                        </div>
                    </div>

                    {/* Booking Interface */}
                    <div className="bg-[#181818] border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-2xl relative overflow-hidden">
                        <label className="text-white/50 text-mono-label font-mono mb-2 block uppercase">Select Date</label>
                        <div className="flex justify-between gap-2 overflow-x-auto pb-4 no-scrollbar mb-4">
                            {days.map((d, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedDay(i)}
                                    className={`flex flex-col items-center justify-center p-3 sm:p-4 min-w-[70px] min-h-[70px] rounded-xl shrink-0 transition-colors duration-200 cursor-pointer touch-manipulation ${selectedDay === i ? 'bg-accent text-concrete' : 'bg-[#222] text-white/50 hover:text-white hover:bg-[#333]'
                                        }`}
                                >
                                    <span className="text-xs font-mono uppercase">{d.name}</span>
                                    <span className="text-xl font-heading mt-1">{d.num}</span>
                                </button>
                            ))}
                        </div>

                        <label className="text-white/50 text-mono-label font-mono mb-2 block uppercase">Select Time Slot</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                            {['16:00', '17:00', '18:00', '19:00', '20:00', '21:00'].map((time) => (
                                <button
                                    key={time}
                                    onClick={() => setSelectedTime(time)}
                                    className={`py-3 min-h-[48px] rounded-xl font-mono text-sm transition-colors duration-200 cursor-pointer touch-manipulation ${selectedTime === time ? 'border border-accent text-accent bg-accent/10' : 'border border-[#333] text-white/70 hover:border-white/20'
                                        }`}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>

                        {isConfirmed ? (
                            <div className="w-full bg-accent/20 border border-accent rounded-2xl p-6 text-center text-white min-h-[48px] shadow-lg shadow-white/5 animate-fade-in">
                                <h3 className="font-heading text-2xl text-accent uppercase mb-2">Court Locked!</h3>
                                <p className="font-sans text-white/80">See you on {days[selectedDay].name} at {selectedTime}. We've emailed your PIN.</p>
                            </div>
                        ) : (
                            <button onClick={() => setIsConfirmed(true)} className="w-full bg-white text-concrete text-center min-h-[48px] py-4 rounded-full font-heading text-xl md:text-2xl uppercase hover:bg-accent transition-colors duration-200 shadow-lg shadow-white/5 cursor-pointer touch-manipulation">
                                Confirm & Pay
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
