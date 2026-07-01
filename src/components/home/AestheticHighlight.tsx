'use client';

import React from 'react';

export default function AestheticHighlight() {
  return (
    <section className="py-16 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Image with decoration */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-xl border border-secondary/20 p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              className="w-full h-full object-cover rounded-lg" 
              alt="A close-up aesthetic shot of NordicNest furniture details showing wood grain and fabrics." 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk_s5MSV2LBm1yOUNupsMaDa-wTCF3mLBet3AXO3NzwNx4RAk6Yz0QSpGBoqZjjIYfeZNoycSwpSwVnX0aVOSMbqRTtkqtkOfmbgBrhg78DJFy-jyJzghTkhJJrq3u6lMW-lCgoPn3gC30jG7_uydOszzYSP1wtpVf9m-6j_O-OBTvXuuZY7Q6Iox-XEpjmhUXjTXuvSTAc7oylb5RXKpz-g4-kKgLfLoducdlkNfi1Dsg-3cK_j7o"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-sage/10 rounded-full blur-3xl -z-10" />
        </div>

        {/* Right Column: Info details */}
        <div className="space-y-6">
          <span className="text-sm font-semibold text-sage uppercase tracking-[0.3em] block">
            Material Integrity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-deep-forest leading-tight">
            Designed to endure, crafted to be cherished.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#434843] leading-relaxed">
            We believe in furniture that ages with grace. Our solid oak frames and organic cotton textiles are sourced from FSC-certified forests and sustainable mills, ensuring your home feels as good as it looks.
          </p>
          
          <div className="pt-6 grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary mb-3">forest</span>
              <h4 className="text-sm font-bold text-charcoal mb-1">Eco-Conscious</h4>
              <p className="text-xs text-[#434843]">Renewable sourcing from Nordic forests.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary mb-3">handshake</span>
              <h4 className="text-sm font-bold text-charcoal mb-1">Hand-Finished</h4>
              <p className="text-xs text-[#434843]">Artisan attention to every joint.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
