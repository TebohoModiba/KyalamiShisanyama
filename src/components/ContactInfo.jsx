import React from 'react';

export default function ContactInfo() {
  return (
    <section id="contact" className="py-20 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Operations Hours and Info Layout */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full">
                Find Us
              </span>
              <h2 className="text-3xl font-bold mt-4 tracking-tight">Come Vibe With Us</h2>
              <p className="text-neutral-400 text-sm mt-2">
                Drop by for an absolute feast or order right to your doorstep.
              </p>
            </div>

            <div className="space-y-4 text-sm text-neutral-300">
              <div className="flex flex-col">
                <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Address</span>
                <span className="text-neutral-200 mt-1">137 Flora Town Park, Kyalami, Midrand, South Africa</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Operating Hours</span>
                <span className="text-neutral-200 mt-1">Mon - Sun: 10:00 AM - 10:00 PM</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Contact Line</span>
                <span className="text-neutral-200 mt-1">+27 (0) 11 123 4567</span>
              </div>
            </div>

            {/* Aggregator Bridges to prove platform parity */}
            <div className="pt-4 space-y-3">
              <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Also Available On</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-neutral-900 text-neutral-300 border border-neutral-800 text-xs px-4 py-2 rounded-xl">
                  🟢 Uber Eats
                </span>
                <span className="bg-neutral-900 text-neutral-300 border border-neutral-800 text-xs px-4 py-2 rounded-xl">
                  🔴 Mr D Food
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual Placeholder */}
          <div className="bg-neutral-900 rounded-2xl p-4 border border-neutral-800 relative h-64 md:h-80 flex flex-col justify-center items-center text-center shadow-xl overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.05)_0%,transparent_50%)]" />
            <span className="text-3xl mb-2">📍</span>
            <h4 className="text-neutral-200 font-bold tracking-tight">Kyalami Shisanyama Map View</h4>
            <p className="text-xs text-neutral-500 px-8 mt-1 leading-relaxed">
              In the live version, this safely renders a dynamic, interactive map route centered right over Flora Town Park for your guests.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
