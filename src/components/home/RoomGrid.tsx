'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase';
import { Room } from '@/types';

const MOCK_FALLBACK_ROOMS: Room[] = [
  {
    id: '1',
    name: 'Living Room',
    description: 'A space for every story, comfortable and aesthetic.',
    image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5Bywx9q0ceaFo6bUMKtjfS3NrjkWwtK7HQu5Aes9VERr0zrpkSPre4RK5yABb17EClk9f_o4GxHsH-7-fIHq34Ipl51C-Dat6D2sTmsiPzf6jX59-EqzOLyi82_2Q4VvLG-8CfPf__X6ElsmPYdmnznbh00P11r3mrhZdXyIfkzq0OYbNJeAWTEu8OepG8n4zZ9NuadRcwrXI8aAJqnje7vYtpdqokUtWn07C8qAE5l6c6VafPvq3OLo8ntes3KRxHQ',
    combo_price: 1800,
  },
  {
    id: '2',
    name: 'Dining',
    description: 'Gather and dine in style.',
    image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIjRGK0OSA_4r-gRBDPlKMDDT6JicT3AsEPqlb30wiA32cTCNNJ5R0QUa7bu2ZAdXvozzGMlrdGh8vRvP5DK955njZUbEzFMILewNnlHa8M-GZy1I9ugPInahKDORr_1_B1eGxyla4UKwGM3VHU8EVyGXLPf-flzwo4gSD9cPugsWT4I5Ys7oG9S6yRJ0iWqkFEHzXjlVkFrZvybW9hra-8PEWoRdTvI5FRMvxU01nlW5H597f9f9WlUAnlu14UYV6MQ',
    combo_price: 1200,
  },
  {
    id: '3',
    name: 'Bedroom',
    description: 'Serene rest sanctuary.',
    image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACVJ9ZQ5chyZtfpEndnYD6BsNytOI00D4n6gGh6VlTOhu_9Cwoyh-B3YHQ4h2s50Oj-DaC_MPB0OLhsTLXiHyeLZ-1PNL5EA0DXBmyTMv-4_5tIzBHMq1katwTLMFvmzKlRaUaGefZLtg6iz8LR8WrYeGzLMtW469im73iwBhn4M5n-WFji-QjM-_pn1NFc9Oits-ZZUg4XD2jLoOYjh_hnoCwCycj-GkF2gb2pFQbtfsiTFZo9viWzi2xuEfTp0OKVw',
    combo_price: 1500,
  },
  {
    id: '4',
    name: 'Workspace',
    description: 'Inspiring productiveness.',
    image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrZZIfWDPAhjtYXL4xZW0HprKZEajh92iGBFlMEYwczynHYLbkfdj5EVVvvXaldBqLNEydBiOFKrVy4RM0ybVnT61mq4oRhrpz_djJke-sFamoBJ13cCYYXdmtIv6x29CR0TiC9LIGfcabjPAdL81GUiKzNbub28EbkIEOP3HGEBCfjqmvolhaWMayIT9BuC0IODTfZMZq81EXR8Lg0owqz9ZWpgoJmxIz6rwlOpdU2TOAaFmwHpaKNncCyUVMX4JmaQ',
    combo_price: 900,
  },
];

const GRID_LAYOUTS = [
  'md:col-span-8',
  'md:col-span-4',
  'md:col-span-4',
  'md:col-span-8'
];

export default function RoomGrid() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('rooms')
          .select('*')
          .order('name');
        
        if (error) throw error;
        
        if (data && data.length > 0) {
          const sortedData = [...data].sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            const getOrder = (name: string) => {
              if (name.includes('living') || name.includes('khách')) return 0;
              if (name.includes('dining') || name.includes('ăn')) return 1;
              if (name.includes('bedroom') || name.includes('ngủ')) return 2;
              if (name.includes('workspace') || name.includes('làm việc')) return 3;
              return 99;
            };
            return getOrder(nameA) - getOrder(nameB);
          });
          setRooms(sortedData);
        } else {
          // Fallback to static mock data if DB table is empty
          setRooms(MOCK_FALLBACK_ROOMS);
        }
      } catch (err) {
        console.error('Error fetching rooms from Supabase, using mock fallback instead:', err);
        setRooms(MOCK_FALLBACK_ROOMS);
      } finally {
        setLoading(false);
      }
    }

    fetchRooms();
  }, []);

  if (loading) {
    return (
      <section className="py-16 max-w-7xl mx-auto px-8 text-center bg-background">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto" />
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px] mt-12">
            <div className="md:col-span-8 bg-gray-200 rounded-xl" />
            <div className="md:col-span-4 bg-gray-200 rounded-xl" />
          </div>
        </div>
      </section>
    );
  }

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
        {rooms.map((room, index) => {
          const layoutClass = GRID_LAYOUTS[index % GRID_LAYOUTS.length];
          const displayIndex = String(index + 1).padStart(2, '0');

          return (
            <Link 
              key={room.id}
              href={`/rooms/${room.id}`}
              className={`${layoutClass} group relative overflow-hidden rounded-xl bg-bone block`}
            >
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ 
                  backgroundImage: `url('${room.image_url}')` 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                <div>
                  <span className="text-[10px] text-white/80 uppercase tracking-widest mb-2 block font-semibold">
                    {displayIndex}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {room.name}
                  </h3>
                </div>
                <div className="bg-white/20 backdrop-blur-md text-white p-4 rounded-full border border-white/30 hover:bg-white hover:text-charcoal transition-all">
                  <span className="material-symbols-outlined flex items-center justify-center">north_east</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
