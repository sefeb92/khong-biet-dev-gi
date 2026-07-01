'use client';

import React from 'react';
import Hero from '@/components/home/Hero';
import RoomGrid from '@/components/home/RoomGrid';
import AestheticHighlight from '@/components/home/AestheticHighlight';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <RoomGrid />
      <AestheticHighlight />
    </div>
  );
}
