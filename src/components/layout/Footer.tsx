'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-deep-forest text-bone pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <span className="font-serif text-2xl font-bold tracking-tight text-primary-fixed">NordicNest</span>
            <p className="text-on-primary-container/80 text-sm leading-relaxed">
              Crafting quiet moments of domestic bliss through honest materials and timeless Scandinavian design since 2014. Handcrafted in Scandinavia.
            </p>
            <div className="flex space-x-5">
              <a className="text-on-primary-container hover:text-primary-fixed transition-colors" href="#" aria-label="Camera">
                <span className="material-symbols-outlined">camera</span>
              </a>
              <a className="text-on-primary-container hover:text-primary-fixed transition-colors" href="#" aria-label="Share">
                <span className="material-symbols-outlined">share</span>
              </a>
              <a className="text-on-primary-container hover:text-primary-fixed transition-colors" href="#" aria-label="Mail">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary-fixed-dim mb-8 font-bold">Collection</h4>
            <ul className="space-y-4 text-sm">
              <li><Link className="text-on-primary-container hover:text-primary-fixed transition-colors" href="/rooms/living">Living</Link></li>
              <li><Link className="text-on-primary-container hover:text-primary-fixed transition-colors" href="/rooms/dining">Dining</Link></li>
              <li><Link className="text-on-primary-container hover:text-primary-fixed transition-colors" href="/rooms/bedroom">Bedroom</Link></li>
              <li><Link className="text-on-primary-container hover:text-primary-fixed transition-colors" href="/rooms/workspace">Workspace</Link></li>
              <li><a className="text-on-primary-container hover:text-primary-fixed transition-colors" href="#">New Arrivals</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary-fixed-dim mb-8 font-bold">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><a className="text-on-primary-container hover:text-primary-fixed transition-colors" href="#">Shipping & Returns</a></li>
              <li><a className="text-on-primary-container hover:text-primary-fixed transition-colors" href="#">Care Guides</a></li>
              <li><a className="text-on-primary-container hover:text-primary-fixed transition-colors" href="#">Store Locator</a></li>
              <li><a className="text-on-primary-container hover:text-primary-fixed transition-colors" href="#">Sustainability Report</a></li>
              <li><a className="text-on-primary-container hover:text-primary-fixed transition-colors" href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary-fixed-dim mb-8 font-bold">Contact Us</h4>
            <div className="space-y-4 text-sm text-on-primary-container/80">
              <p className="flex items-start gap-3">
                <span className="material-symbols-outlined text-sm mt-1">location_on</span>
                <span>Stockholmsvägen 12, <br />114 33 Stockholm, Sweden</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">mail</span>
                <span>hello@nordicnest.com</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">call</span>
                <span>+46 8 123 456 78</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-container/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-on-primary-container/60">
            © 2026 NordicNest AB. All rights reserved.
          </p>
          <div className="flex space-x-8 text-xs text-on-primary-container/60">
            <a className="hover:text-primary-fixed transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary-fixed transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-primary-fixed transition-colors" href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
