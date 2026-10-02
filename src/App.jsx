import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060D25] text-white font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col">
      {/* Hero Section with Embedded Nav & Sliced Widgets */}
      <Hero onOpenContact={() => setIsContactOpen(true)} />

      {/* Fitur Unggulan Section (8 Cards Grid on Light Background) */}
      <Features />

      {/* Tentang Kami Section (Text & 3 Photos Gallery) */}
      <AboutUs />

      {/* Footer Section (Brand, Newsletter, Socials, Phone, Copyright) */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
