import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-neutral-950 overflow-hidden">
      {/* Background Graphic Tint Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0%,transparent_65%)]" />
      
      <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
          Premium African Culinary & Lounge
        </span>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-neutral-50 tracking-tight mt-6 max-w-4xl mx-auto leading-tight">
          Savour the Authentic Taste of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Shisanyama</span>
        </h1>
        
        <p className="text-neutral-400 text-md sm:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
          Experience premium flame-grilled meats, vibrant community vibes, and unforgettable weekly lifestyle events right in the heart of Kyalami.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a 
            href="#menu" 
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-amber-500/20 duration-200 text-center"
          >
            Explore Menu
          </a>
          <a 
            href="#reserve" 
            className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-semibold px-8 py-4 rounded-xl border border-neutral-800 transition-all duration-200 text-center"
          >
            Book an Event Table
          </a>
        </div>
      </div>
    </section>
  );
}
