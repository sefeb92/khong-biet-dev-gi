'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { cartCount, openCart } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background border-b border-outline-variant/30">
      <nav className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto">
        
        {/* Left Side: Logo & Navigation */}
        <div className="flex items-center gap-16">
          <Link 
            href="/" 
            className="font-serif text-2xl font-bold text-primary tracking-tight"
          >
            NordicNest
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/rooms/living" 
              className="text-[#434843] hover:text-primary transition-colors duration-200 text-sm font-semibold tracking-wider"
            >
              Living
            </Link>
            <Link 
              href="/rooms/dining" 
              className="text-[#434843] hover:text-primary transition-colors duration-200 text-sm font-semibold tracking-wider"
            >
              Dining
            </Link>
            <Link 
              href="/rooms/bedroom" 
              className="text-[#434843] hover:text-primary transition-colors duration-200 text-sm font-semibold tracking-wider"
            >
              Bedroom
            </Link>
            <Link 
              href="/rooms" 
              className="text-[#434843] hover:text-primary transition-colors duration-200 text-sm font-semibold tracking-wider"
            >
              Lookbook
            </Link>
            <a 
              href="#" 
              className="text-[#434843] hover:text-primary transition-colors duration-200 text-sm font-semibold tracking-wider"
            >
              Sustainability
            </a>
          </div>
        </div>

        {/* Right Side: Search & Actions */}
        <div className="flex items-center gap-6">
          {/* Search Input Bar */}
          <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/20">
            <span className="material-symbols-outlined text-outline text-sm flex items-center justify-center">search</span>
            <input 
              className="bg-transparent border-none focus:outline-none focus:ring-0 text-xs w-32 ml-2 text-charcoal placeholder-[#737872]" 
              placeholder="Search collection..." 
              type="text"
            />
          </div>

          <div className="flex items-center gap-4">
            {/* User Icon */}
            <button 
              type="button"
              className="hover:bg-bone p-2 rounded-full transition-all duration-200 scale-95 active:scale-90 text-primary flex items-center justify-center"
              aria-label="Tài khoản"
            >
              <span className="material-symbols-outlined">person</span>
            </button>

            {/* Cart Trigger */}
            <button 
              type="button"
              onClick={openCart}
              className="hover:bg-bone p-2 rounded-full transition-all duration-200 scale-95 active:scale-90 relative text-primary flex items-center justify-center"
              aria-label="Giỏ hàng"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              {cartCount > 0 ? (
                <span className="absolute top-1 right-1 w-4 h-4 bg-secondary text-[8px] text-white flex items-center justify-center rounded-full font-bold">
                  {cartCount}
                </span>
              ) : (
                <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
