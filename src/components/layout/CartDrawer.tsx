'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { 
    cartItems, 
    isOpen, 
    closeCart, 
    addToCart, 
    removeFromCart, 
    cartTotal 
  } = useCart();

  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(cartTotal);

  return (
    <div 
      className={`fixed inset-0 z-[60] transition-all duration-500 ${
        isOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
      }`}
    >
      {/* Overlay backdrop */}
      <div 
        onClick={closeCart}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Drawer content */}
      <div 
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-background transition-transform duration-500 p-8 flex flex-col shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-serif text-2xl font-bold text-primary">Your Basket</h3>
          <button 
            type="button"
            onClick={closeCart}
            className="text-primary p-2 hover:bg-bone transition-colors rounded-full"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Cart items list or empty state */}
        <div className="flex-grow overflow-y-auto pr-2">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-gray-400 text-6xl mb-4">
                shopping_basket
              </span>
              <p className="text-lg text-[#434843]">Your basket is currently empty.</p>
              <button 
                type="button"
                onClick={closeCart}
                className="mt-6 text-primary border-b border-primary pb-1 text-sm font-semibold hover:opacity-70 transition-opacity uppercase tracking-wider"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-outline-variant/30 pb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={item.image_url} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover bg-bone rounded"
                  />
                  <div className="flex-grow">
                    <h4 className="font-serif text-base font-semibold text-primary">{item.name}</h4>
                    <p className="text-sm text-secondary font-medium">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(item.price)}
                    </p>
                    
                    {/* Item controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="w-6 h-6 border border-outline-variant/30 flex items-center justify-center rounded hover:bg-bone transition-colors text-sm"
                      >
                        -
                      </button>
                      <span className="text-sm font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => addToCart(item)}
                        className="w-6 h-6 border border-outline-variant/30 flex items-center justify-center rounded hover:bg-bone transition-colors text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer & Checkout */}
        <div className="mt-auto pt-8 border-t border-outline-variant/30">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs uppercase tracking-wider text-[#434843] font-semibold">
              Estimated Total
            </span>
            <span className="font-serif text-2xl font-bold text-primary">
              {formattedTotal}
            </span>
          </div>
          
          <button 
            type="button"
            disabled={cartItems.length === 0}
            className={`w-full py-5 text-sm font-semibold uppercase tracking-widest transition-colors ${
              cartItems.length === 0 
                ? 'bg-charcoal/50 text-white/50 cursor-not-allowed'
                : 'bg-charcoal text-white hover:bg-deep-forest'
            }`}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
