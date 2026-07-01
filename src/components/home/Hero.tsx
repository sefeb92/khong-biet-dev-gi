'use client';

import React from 'react';

export default function Hero() {
  const scrollToRooms = () => {
    const element = document.getElementById('rooms-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-[10000ms] ease-out hover:scale-105" 
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCwNA99j5us6-VSkqN4H54zS5gG7YHebZUCSgNHyIgGNRuKK_hme06i7T6RIunyj9ZRtbgt6nYWSUtqE7tlxe676ZDavx53awh_xOmB0elAgHk4M9GiELFtPwPkqTxh6WgsqXOjA_eU8NczR8L80EOgB3XmgFNo_dxuR8TGxdQBe0nM9NITEnWegWSSA-V8NhkU-_Fz5fZC8iUh5iZjvBTdt6aCX_X-XAJfYfr4-LBHtPxTA-dXc9Ck1671eTgmri6aw')" 
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-2xl bg-white/40 backdrop-blur-md p-10 rounded-xl border border-white/30">
          <span className="text-[#705b3e] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            Spring Collection 2026
          </span>
          <h1 className="font-serif text-charcoal text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Finding Harmony in the Everyday
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#434843] mb-8 max-w-lg leading-relaxed">
            Experience the curated warmth of our new seasonal arrivals. Handcrafted textures and sustainable materials designed to elevate your sanctuary.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              type="button"
              onClick={scrollToRooms}
              className="bg-charcoal text-white px-8 py-4 rounded-md text-sm font-semibold uppercase tracking-wider hover:bg-deep-forest transition-colors duration-300 scale-95 active:scale-90"
            >
              Shop The Look
            </button>
            <button 
              type="button"
              onClick={scrollToRooms}
              className="bg-white/80 border border-charcoal/20 text-charcoal px-8 py-4 rounded-md text-sm font-semibold uppercase tracking-wider hover:bg-bone transition-colors duration-300 scale-95 active:scale-90"
            >
              Explore Rooms
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-charcoal/60">
          Discover
        </span>
        <div className="w-px h-12 bg-charcoal/20" />
      </div>
    </section>
  );
}
