'use client';

import React from 'react';
import Link from 'next/link';

export default function RoomGrid() {
  return (
    <section id="rooms-section" className="py-16 max-w-7xl mx-auto px-8 bg-background">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl font-bold text-deep-forest mb-4">
            A Space for Every Story
          </h2>
          <p className="font-sans text-base text-[#434843]">
            Browse our signature room collections, where functional design meets natural beauty. Each piece is selected for its ability to create a lasting sense of home.
          </p>
        </div>
        <Link 
          href="/rooms"
          className="flex items-center gap-2 text-primary font-semibold border-b border-primary hover:text-secondary hover:border-secondary transition-colors pb-1 text-sm tracking-wider uppercase"
        >
          View All Spaces <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
        {/* Living Room (col-span-8) */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-bone">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
            style={{ 
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5Bywx9q0ceaFo6bUMKtjfS3NrjkWwtK7HQu5Aes9VERr0zrpkSPre4RK5yABb17EClk9f_o4GxHsH-7-fIHq34Ipl51C-Dat6D2sTmsiPzf6jX59-EqzOLyi82_2Q4VvLG-8CfPf__X6ElsmPYdmnznbh00P11r3mrhZdXyIfkzq0OYbNJeAWTEu8OepG8n4zZ9NuadRcwrXI8aAJqnje7vYtpdqokUtWn07C8qAE5l6c6VafPvq3OLo8ntes3KRxHQ')" 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
            <div>
              <span className="text-[10px] text-white/80 uppercase tracking-widest mb-2 block font-semibold">01</span>
              <h3 className="font-serif text-2xl font-bold text-white">Living Room</h3>
            </div>
            <Link 
              href="/rooms/living"
              className="bg-white/20 backdrop-blur-md text-white p-4 rounded-full border border-white/30 hover:bg-white hover:text-charcoal transition-all"
            >
              <span className="material-symbols-outlined flex items-center justify-center">north_east</span>
            </Link>
          </div>
        </div>

        {/* Dining Room (col-span-4) */}
        <Link 
          href="/rooms/dining"
          className="md:col-span-4 group relative overflow-hidden rounded-xl bg-bone block"
        >
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
            style={{ 
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIjRGK0OSA_4r-gRBDPlKMDDT6JicT3AsEPqlb30wiA32cTCNNJ5R0QUa7bu2ZAdXvozzGMlrdGh8vRvP5DK955njZUbEzFMILewNnlHa8M-GZy1I9ugPInahKDORr_1_B1eGxyla4UKwGM3VHU8EVyGXLPf-flzwo4gSD9cPugsWT4I5Ys7oG9S6yRJ0iWqkFEHzXjlVkFrZvybW9hra-8PEWoRdTvI5FRMvxU01nlW5H597f9f9WlUAnlu14UYV6MQ')" 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <span className="text-[10px] text-white/80 uppercase tracking-widest mb-2 block font-semibold">02</span>
            <h3 className="font-serif text-2xl font-bold text-white">Dining</h3>
          </div>
        </Link>

        {/* Bedroom (col-span-4) */}
        <Link 
          href="/rooms/bedroom"
          className="md:col-span-4 group relative overflow-hidden rounded-xl bg-bone block"
        >
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
            style={{ 
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACVJ9ZQ5chyZtfpEndnYD6BsNytOI00D4n6gGh6VlTOhu_9Cwoyh-B3YHQ4h2s50Oj-DaC_MPB0OLhsTLXiHyeLZ-1PNL5EA0DXBmyTMv-4_5tIzBHMq1katwTLMFvmzKlRaUaGefZLtg6iz8LR8WrYeGzLMtW469im73iwBhn4M5n-WFji-QjM-_pn1NFc9Oits-ZZUg4XD2jLoOYjh_hnoCwCycj-GkF2gb2pFQbtfsiTFZo9viWzi2xuEfTp0OKVw')" 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <span className="text-[10px] text-white/80 uppercase tracking-widest mb-2 block font-semibold">03</span>
            <h3 className="font-serif text-2xl font-bold text-white">Bedroom</h3>
          </div>
        </Link>

        {/* Workspace (col-span-8) */}
        <Link 
          href="/rooms/workspace"
          className="md:col-span-8 group relative overflow-hidden rounded-xl bg-bone block"
        >
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
            style={{ 
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrZZIfWDPAhjtYXL4xZW0HprKZEajh92iGBFlMEYwczynHYLbkfdj5EVVvvXaldBqLNEydBiOFKrVy4RM0ybVnT61mq4oRhrpz_djJke-sFamoBJ13cCYYXdmtIv6x29CR0TiC9LIGfcabjPAdL81GUiKzNbub28EbkIEOP3HGEBCfjqmvolhaWMayIT9BuC0IODTfZMZq81EXR8Lg0owqz9ZWpgoJmxIz6rwlOpdU2TOAaFmwHpaKNncCyUVMX4JmaQ')" 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <span className="text-[10px] text-white/80 uppercase tracking-widest mb-2 block font-semibold">04</span>
            <h3 className="font-serif text-2xl font-bold text-white">Workspace</h3>
          </div>
        </Link>
      </div>
    </section>
  );
}
