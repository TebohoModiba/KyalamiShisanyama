// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import WeeklyEvents from './components/WeeklyEvents';
import BookingForm from './components/BookingForm';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-amber-500 selection:text-neutral-950 pt-16">
      {/* Sticky Header Navigation */}
      <Navbar />
      
      <main>
        {/* Impact Entry */}
        <Hero />
        
        {/* Culinary Showcase */}
        <MenuGrid />
        
        {/* Experience & Vibe Hub */}
        <WeeklyEvents />
        
        {/* Pitch Game-Changer: The Interactive Reservation Form */}
        <BookingForm />
        
        {/* Foot Traffic & Trust Building */}
        <ContactInfo />
      </main>

      {/* Clean Local Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-900 py-6 text-center text-xs text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Kyalami Shisanyama Mockup. Designed with passion for local business.</p>
      </footer>
    </div>
  );
}

export default App;
