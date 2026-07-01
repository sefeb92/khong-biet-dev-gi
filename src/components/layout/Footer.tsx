'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-container py-12 px-8 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cột 1: Thông tin thương hiệu */}
        <div className="space-y-4">
          <h3 className="font-serif text-xl font-bold text-primary">NordicNest</h3>
          <p className="text-sm text-[#434843] leading-relaxed">
            Mang không gian sống Scandinavian tinh tế, ấm cúng và gần gũi thiên nhiên đến ngôi nhà của bạn.
          </p>
        </div>

        {/* Cột 2: Liên kết nhanh */}
        <div className="space-y-4">
          <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-primary">Liên kết nhanh</h4>
          <ul className="space-y-2 text-sm text-[#434843]">
            <li><Link href="/" className="hover:text-primary">Trang chủ</Link></li>
            <li><Link href="/rooms" className="hover:text-primary">Sản phẩm</Link></li>
            <li><span className="cursor-pointer hover:text-primary">Giỏ hàng</span></li>
          </ul>
        </div>

        {/* Cột 3: Liên hệ */}
        <div className="space-y-4">
          <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-primary">Liên hệ & Mạng xã hội</h4>
          <p className="text-sm text-[#434843]">Email: contact@nordicnest.com</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined cursor-pointer hover:text-primary">share</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary">mail</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-outline-variant/20 text-center text-xs text-gray-500">
        <p>© 2026 NordicNest. Thiết kế phong cách Scandinavian.</p>
      </div>
    </footer>
  );
}
