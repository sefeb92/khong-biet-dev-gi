'use client';

import React from 'react';

export default function Features() {
  const items = [
    { icon: 'architecture', title: 'Thiết kế tối giản', desc: 'Đậm nét Scandinavian, tinh tế và tối ưu công năng.' },
    { icon: 'forest', title: 'Gỗ tự nhiên 100%', desc: 'Sử dụng gỗ tự nhiên bền đẹp từ các nguồn rừng bền vững.' },
    { icon: 'local_shipping', title: 'Miễn phí vận chuyển', desc: 'Giao hàng tận nơi miễn phí cho mọi đơn hàng nội thất.' }
  ];

  return (
    <section className="py-16 px-8 max-w-7xl mx-auto border-t border-outline-variant/20 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-6 bg-white border border-outline-variant/30 rounded-xl">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">{item.icon}</span>
            <h3 className="font-serif text-lg font-bold text-primary mb-2">{item.title}</h3>
            <p className="text-sm text-[#434843]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
