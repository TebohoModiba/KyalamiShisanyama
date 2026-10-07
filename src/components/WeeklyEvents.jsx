import React from 'react';

const EVENTS = [
  { day: "Thursdays", title: "Bottomless Mimosas", time: "14:00 - 19:00", description: "Kick off the weekend vibes early with continuous sparkling refills and chill lounge tracks." },
  { day: "Fridays", title: "Foodie Fridays", time: "All Day", description: "Special discounts on large family combos and communal platters fresh from the open fires." },
  { day: "Sundays", title: "Live DJ Sunset Sessions", time: "15:00 - Late", description: "The ultimate local wind-down. Premium deep house sounds paired with premium cuts of meat." }
];

export default function WeeklyEvents() {
  return (
    <section id="events" className="py-20 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full">
            The Lifestyle
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight">Weekly Experiences</h2>
          <p className="text-neutral-400 mt-2">
            More than just premium food—it's a community destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS.map((evt, idx) => (
            <div key={idx} className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">{evt.day}</span>
                <h3 className="text-xl font-bold text-neutral-100 mt-2">{evt.title}</h3>
                <span className="inline-block text-neutral-500 text-xs font-mono bg-neutral-900 px-2 py-0.5 rounded mt-1">{evt.time}</span>
                <p className="text-neutral-400 text-sm mt-4 leading-relaxed">{evt.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-900">
                <a href="#reserve" className="text-xs font-bold text-amber-500 hover:text-amber-400 tracking-wide uppercase inline-flex items-center gap-1">
                  Book Table Request &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
