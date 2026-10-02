import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const Navbar = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-[#070B19]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border border-blue-400/40 flex items-center justify-center bg-blue-950/60 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:scale-105 transition-transform">
            <span className="text-white text-lg font-bold">⚛</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors">
              TeraDesk
            </span>
            <span className="text-[9px] tracking-widest text-amber-400 font-semibold uppercase -mt-1">
              By TERAMEDIA
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#beranda"
            className="text-white border-b-2 border-white pb-1 font-semibold transition-colors"
          >
            Beranda
          </a>
          <a
            href="#fitur"
            className="text-gray-300 hover:text-white pb-1 transition-colors hover:border-b-2 hover:border-amber-400/60"
          >
            Fitur
          </a>
          <a
            href="#alur-kerja"
            className="text-gray-300 hover:text-white pb-1 transition-colors hover:border-b-2 hover:border-amber-400/60"
          >
            Alur Kerja
          </a>
          <a
            href="#testimoni"
            className="text-gray-300 hover:text-white pb-1 transition-colors hover:border-b-2 hover:border-amber-400/60"
          >
            Tentang Kami
          </a>
          <a
            href="#faq"
            className="text-gray-300 hover:text-white pb-1 transition-colors hover:border-b-2 hover:border-amber-400/60"
          >
            FAQ
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="bg-[#FFB300] hover:bg-amber-400 text-slate-950 px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,179,0,0.3)] hover:shadow-[0_0_25px_rgba(255,179,0,0.5)] active:scale-95 cursor-pointer"
          >
            Kontak Kami
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f24] border-b border-white/15 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <a
            href="#beranda"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white font-semibold py-2 border-b border-white/5"
          >
            Beranda
          </a>
          <a
            href="#fitur"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-white py-2 border-b border-white/5"
          >
            Fitur
          </a>
          <a
            href="#alur-kerja"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-white py-2 border-b border-white/5"
          >
            Alur Kerja
          </a>
          <a
            href="#testimoni"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-white py-2 border-b border-white/5"
          >
            Tentang Kami
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-white py-2 border-b border-white/5"
          >
            FAQ
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="bg-[#FFB300] text-slate-950 w-full py-3 rounded-full text-sm font-bold text-center mt-2 shadow-lg"
          >
            Kontak Kami
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
