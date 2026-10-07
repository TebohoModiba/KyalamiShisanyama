// src/components/BookingForm.jsx
import React, { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '18:00',
    event: 'General Dining'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API pipeline or email dispatch state triggering
    setIsSubmitted(true);
  };

  return (
    <section id="reserve" className="py-20 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full">
            VIP Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight">
            Secure Your Table
          </h2>
          <p className="text-neutral-400 mt-2">
            Planning a birthday, celebration, or locking down a spot for the Sunday DJ Sessions? Tell us your plans.
          </p>
        </div>

        {/* Dynamic State Management Interface */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="bg-neutral-950 p-6 md:p-10 rounded-2xl border border-neutral-800 shadow-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="e.g. Lerato Khumalo"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="e.g. 082 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Number of Guests</label>
                <select 
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Target Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Arrival Time</label>
                <input 
                  type="time" 
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Select Vibe / Event Type</label>
              <select 
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
                value={formData.event}
                onChange={(e) => setFormData({...formData, event: e.target.value})}
              >
                <option value="General Dining">General Dining / Table Booking</option>
                <option value="Thursday Mimosas">Thursday Bottomless Mimosas</option>
                <option value="Foodie Friday">Foodie Fridays</option>
                <option value="Sunday Sessions">Sunday Live DJ Sunset Sessions</option>
                <option value="VIP Lounge">VIP Deck Experience</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-amber-500/10 hover:scale-[1.01] duration-200"
            >
              Send Secure Booking Request
            </button>
          </form>
        ) : (
          /* Instant pitch-winning visual validation confirmation card */
          <div className="bg-neutral-950 border border-emerald-500/30 p-8 md:p-12 rounded-2xl text-center shadow-2xl max-w-xl mx-auto animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-neutral-100">Request Received, {formData.name}!</h3>
            <p className="text-neutral-400 mt-3 text-sm leading-relaxed">
              We have held a spot for <span className="text-amber-500 font-medium">{formData.guests} guests</span> on <span className="text-amber-500 font-medium">{formData.date}</span> at <span className="text-amber-500 font-medium">{formData.time}</span> for the <span className="text-neutral-200 font-medium">{formData.event}</span>.
            </p>
            <p className="text-neutral-500 text-xs mt-4 italic">
              A SMS validation confirmation has been sent to {formData.phone}.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 text-xs text-neutral-400 hover:text-neutral-200 underline tracking-wider uppercase font-semibold"
            >
              Make Another Request
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
