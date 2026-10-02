import React from 'react';
import { ArrowRight, Sparkles, Send } from 'lucide-react';

const CtaBanner = ({ onOpenContact }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 md:px-12 py-16 relative z-10">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#121c42] via-[#0d1635] to-[#070b1a] border border-amber-400/30 p-8 sm:p-14 text-center shadow-[0_10px_50px_rgba(255,179,0,0.15)]">
        {/* Glow orb */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/15 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-amber-400/40 text-amber-300 text-xs px-4 py-1.5 rounded-full mb-6 bg-amber-400/10 font-bold">
            <Sparkles size={14} /> Solusi Digital TERAMEDIA 2026
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Siap Tingkatkan Efektivitas & Tata Kelola Organisasi Anda?
          </h2>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Bergabunglah dengan ratusan pengurus aktif lainnya yang telah menyederhanakan birokrasi, penomoran surat, dan manajemen program kerja bersama TeraDesk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto bg-[#FFB300] hover:bg-amber-400 text-slate-950 px-8 py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-3 transition-all shadow-[0_4px_25px_rgba(255,179,0,0.4)] hover:shadow-[0_6px_35px_rgba(255,179,0,0.6)] active:scale-95 cursor-pointer"
            >
              <span>Hubungi Tim TERAMEDIA</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="#beranda"
              className="w-full sm:w-auto text-sm text-gray-300 hover:text-white px-6 py-3.5 rounded-full border border-white/20 hover:border-white/40 transition-colors"
            >
              Kembali ke Atas ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
