'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { cartCount, openCart } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-outline-variant/30">
      <nav className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-serif text-2xl font-bold text-primary tracking-tight"
        >
          NordicNest
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link 
              href="/" 
              className="text-[#434843] hover:text-primary transition-colors duration-200 text-sm font-semibold tracking-wider uppercase"
            >
              Trang chủ
            </Link>
          </li>
          <li>
            <Link 
              href="/rooms" 
              className="text-[#434843] hover:text-primary transition-colors duration-200 text-sm font-semibold tracking-wider uppercase"
            >
              Không gian mẫu
            </Link>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button 
            type="button" 
            className="text-[#434843] hover:text-primary transition-transform active:scale-90"
            aria-label="Tìm kiếm"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
          
          <button 
            type="button" 
            className="text-[#434843] hover:text-primary transition-transform active:scale-90"
            aria-label="Tài khoản"
          >
            <span className="material-symbols-outlined">person</span>
          </button>

          {/* Cart Trigger */}
          <button 
            type="button" 
            onClick={openCart}
            className="text-[#434843] hover:text-primary transition-transform active:scale-90 relative"
            aria-label="Giỏ hàng"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-secondary text-[10px] text-white w-4 h-4 flex items-center justify-center rounded-full font-bold">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Trigger */}
          <button 
            type="button" 
            className="md:hidden text-[#434843]"
            aria-label="Mở menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
