'use client';

import React from 'react';

export default function Features() {
  const items = [
    {
      icon: 'architecture',
      title: 'Minimalist Design',
      desc: 'Embracing the Scandinavian philosophy of "less is more," our pieces focus on clean lines and functional beauty that clears the mind.'
    },
    {
      icon: 'forest',
      title: '100% Natural Wood',
      desc: 'Sustainably sourced oak, ash, and walnut from Nordic forests, treated with organic oils to preserve the living texture of the timber.'
    },
    {
      icon: 'local_shipping',
      title: 'Conscious Delivery',
      desc: 'Carbon-neutral shipping directly to your sanctuary. We handle every piece with the utmost care, ensuring it arrives ready for its new home.'
    }
  ];

  return (
    <>
      {/* Features Section: The Nordic Commitment */}
      <section className="py-16 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Our Commitment to Calm</h2>
            <div className="w-12 h-0.5 bg-secondary mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            {items.map((item, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-bone transition-colors group-hover:bg-primary-fixed-dim/30">
                  <span className="material-symbols-outlined text-[32px] text-sage transition-all duration-300 group-hover:scale-110 group-hover:text-primary">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-sm text-[#434843] max-w-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter & Visual Break */}
      <section className="bg-surface-container py-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="aspect-[16/7] rounded-lg overflow-hidden relative">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] hover:scale-105" 
              style={{ 
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDU44za5p14_cAdvrQofdHQinIZgV7-cBx-I7uERfQGXLr6BrfjmMyAPTYrjoJc5NHlYBvfzgHtJxbSsw1sSTxt69idS8Y_HnU_3dzlW7gCNWmrlunI6AfZeKf27oMPYNEyNJyPQNe7zYF4V9CKCfpxUa71dqvqtQ68hNuQ-xMeuhhDBoe_5KKJ1E1JVtlqEVrBlfrHYtyLPGtWtjgl_J5_pZWkn75t0FkpkOjbnUSGU8eNxKSvmhAJ')" 
              }}
            />
            <div className="absolute inset-0 bg-deep-forest/10" />
          </div>
          
          <div className="lg:pl-12 space-y-6">
            <h2 className="font-serif text-3xl font-bold text-primary">Join the NordicNest Journal</h2>
            <p className="text-sm text-[#434843] leading-relaxed">
              Receive seasonal styling guides, exclusive lookbook previews, and stories of craftsmanship delivered to your inbox.
            </p>
            <form 
              className="flex flex-col sm:flex-row gap-4" 
              onSubmit={(e) => {
                e.preventDefault();
                alert('Takk! You are subscribed.');
              }}
            >
              <input 
                className="flex-grow bg-white border-b border-outline-variant focus:border-secondary focus:outline-none focus:ring-0 px-4 py-3 text-sm transition-colors text-charcoal placeholder-[#737872]" 
                placeholder="Email address" 
                required 
                type="email"
              />
              <button 
                className="bg-secondary-fixed text-on-secondary-fixed px-8 py-3 rounded-md text-sm font-semibold hover:bg-tertiary-fixed transition-all duration-300 transform active:scale-95 tracking-wider" 
                type="submit"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
