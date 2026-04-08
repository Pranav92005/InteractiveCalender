import React from 'react';

interface HeroProps {
  month: string;
  year: number;
}

export const HeroHeader: React.FC<HeroProps> = ({ month, year }) => (
  <div className="relative h-64 md:h-80 w-full overflow-hidden bg-slate-800">
    <img 
      src="https://wallpaperbat.com/img/943474-new-rocky-mountain-national-park-wallpaper-full-hd-1080p-for-pc-desktop-national-parks-rocky-mountain-national-park-rocky-mountains.jpg" 
      alt="Hero" 
      className="w-full h-full object-cover opacity-90"
    />
    <div className="absolute bottom-0 left-0 right-0 h-32 flex">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
        <path d="M0,80 C150,180 350,0 500,80 L500,150 L0,150 Z" fill="#1d93d2" />
      </svg>
      <div className="absolute bottom-6 right-8 text-white text-right">
        <p className="text-xl font-light leading-none">{year}</p>
        <h1 className="text-4xl font-bold uppercase tracking-widest">{month}</h1>
      </div>
    </div>
  </div>
);