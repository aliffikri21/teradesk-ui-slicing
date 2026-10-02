import React from 'react';
import { Bookmark } from 'lucide-react';

const Hero = ({ onOpenContact }) => {
  return (
    <section id="beranda" className="w-full relative bg-[#060D25] text-white flex flex-col items-center px-4 sm:px-6 md:px-12 pt-6 pb-12 overflow-hidden">
      {/* Background vertical lighting & stripes effect exactly like reference */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25 bg-[linear-gradient(to_right,#1b2b52_1px,transparent_1px)] bg-[size:4.5rem_100%]"></div>
      
      {/* Subtle radial sheen glow in the center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-blue-700/20 via-blue-900/10 to-transparent blur-[140px] pointer-events-none z-0"></div>

      {/* Navigation Bar */}
      <nav className="w-full max-w-6xl py-4 flex justify-between items-center z-20">
        {/* Brand Logo */}
        <a href="#beranda" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-blue-400/50 flex items-center justify-center bg-blue-950/60 shadow-sm">
            <span className="text-white text-base">⚛</span>
          </div>
          <span className="text-lg font-semibold tracking-wide text-white">
            TeraDesk
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#beranda" className="text-white border-b-2 border-white pb-1 font-semibold">
            Beranda
          </a>
          <a href="#fitur" className="text-gray-400 hover:text-white pb-1 transition-colors">
            Fitur
          </a>
          <a href="#tentang-kami" className="text-gray-400 hover:text-white pb-1 transition-colors">
            Tentang Kami
          </a>
        </div>

        {/* CTA Button */}
        <button
          onClick={onOpenContact}
          className="bg-[#FFA000] hover:bg-[#ffaa1a] text-slate-950 font-bold px-6 py-2.5 rounded-full text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer"
        >
          Kontak Kami
        </button>
      </nav>

      {/* Hero Header Section */}
      <div className="w-full max-w-4xl text-center mt-12 mb-10 flex flex-col items-center z-10">
        {/* Prototype Pill Badge */}
        <div className="border border-white/20 text-gray-300 text-xs px-5 py-1.5 rounded-full mb-6 bg-white/5 backdrop-blur-sm shadow-sm">
          TERAMEDIA Prototype
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 tracking-tight text-white">
          Kelola Organisasi Lebih Mudah <br />
          dalam <span className="italic underline decoration-2 underline-offset-8">Satu Platform</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 max-w-2xl text-xs sm:text-sm md:text-base mb-8 leading-relaxed font-normal">
          Kelola program kerja, proses persetujuan, dan administrasi organisasi dalam satu platform yang terintegrasi dan efisien.
        </p>

        {/* CTA Button with round arrow */}
        <a
          href="#fitur"
          className="group bg-[#FFA000] hover:bg-[#ffaa1a] text-slate-950 pl-6 pr-1.5 py-1.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-4 transition-all shadow-lg active:scale-95 cursor-pointer"
        >
          <span>Jelajahi Lebih Banyak Fitur</span>
          <span className="bg-white text-slate-950 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm font-black group-hover:translate-x-0.5 transition-transform shadow-sm">
            ➔
          </span>
        </a>
      </div>

      {/* Dashboard Preview Widgets Container (Exactly structured like reference) */}
      <div className="relative w-full max-w-5xl lg:h-[430px] mt-4 mb-12 z-10">
        
        {/* Responsive Layout for Screens: Stacked on small/medium, Floating on large */}
        <div className="flex flex-col lg:block items-center gap-6 w-full">

          {/* Left Dark Card */}
          <div className="w-full max-w-[320px] lg:max-w-none lg:w-[275px] lg:absolute lg:left-0 lg:top-14 bg-[#0d1633]/90 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-2 bg-white/10 w-fit px-3 py-1.5 rounded-md text-xs mb-5 font-medium text-gray-200">
              <span>🔖</span> Update Program Kerja
            </div>
            <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider font-semibold">
              update terakhir
            </p>
            <p className="text-xs sm:text-sm font-medium mb-6 leading-snug text-white">
              Workshop Desain Grafis dengan Audiens Siswa/Siswi SMK Negeri 1 Palopo
            </p>
            <a
              href="#fitur"
              className="text-xs text-blue-300 hover:text-blue-200 flex items-center gap-2 transition-colors font-medium"
            >
              cek asesmen program kerja <span>➔</span>
            </a>
          </div>

          {/* Center Main Card */}
          <div className="w-full max-w-[380px] lg:w-[380px] lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0 bg-white text-slate-900 rounded-3xl p-6 shadow-2xl border border-gray-100">
            <div className="text-center text-xs font-medium text-gray-500 mb-3">
              <span className="bg-gray-100/80 px-3 py-1 rounded-full border border-gray-200 text-[11px]">
                Arsip Administrasi
              </span>
            </div>
            <h3 className="text-2xl font-bold leading-tight mb-5 text-slate-900">
              Kelola Organisasi - <br />
              Dengan <span className="italic font-bold">Mudah</span>
            </h3>
            
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full border-[3px] border-blue-900 flex items-center justify-center text-xs font-bold text-blue-950 bg-blue-50/50">
                  89%
                </div>
                <div className="text-xs sm:text-sm font-bold leading-tight text-slate-800">
                  Proker Telah <br /> Terlaksana <span className="text-base">🔥</span>
                </div>
              </div>
              <a href="#fitur" className="text-xs text-blue-700 underline font-medium">
                Periode 2025
              </a>
            </div>

            <div className="w-full h-36 bg-gray-200 rounded-xl overflow-hidden relative border border-gray-100 shadow-inner">
              <img
                src="/images/group_pavilion.jpg"
                alt="Dokumentasi Mahasiswa TERAMEDIA"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-[-8px] right-[-8px] bg-blue-700 text-white w-9 h-9 flex items-center justify-center transform rotate-12 rounded-tl-lg shadow-md font-bold text-sm">
                ✦
              </div>
            </div>
          </div>

          {/* Right Cards Stack */}
          <div className="w-full max-w-[320px] lg:max-w-none lg:w-[280px] lg:absolute lg:right-0 lg:top-8 flex flex-col gap-3.5">
            {/* Profile Card 1 */}
            <div className="bg-white text-slate-900 rounded-2xl p-3 flex items-center gap-3.5 shadow-xl border border-gray-100">
              <div className="w-11 h-11 bg-slate-900 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-bold overflow-hidden">
                <img src="/images/pembina.jpg" alt="M. Ishak" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[13px] font-bold leading-tight mb-0.5 text-slate-900">
                  M. Ishak, S.Kom., M.Kom.
                </p>
                <p className="text-[11px] text-gray-500">Pembina TERAMEDIA</p>
              </div>
            </div>

            {/* Profile Card 2 */}
            <div className="bg-white text-slate-900 rounded-2xl p-3 flex items-center gap-3.5 shadow-xl border border-gray-100">
              <div className="w-11 h-11 bg-slate-900 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-bold overflow-hidden">
                <img src="/images/ketua.jpg" alt="Muhammad Toha" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[13px] font-bold leading-tight mb-0.5 text-slate-900">
                  Muhammad Toha
                </p>
                <p className="text-[11px] text-gray-500">
                  Ketua Umum TERAMEDIA<br />
                  <span className="text-[10px]">Periode 2025-2026</span>
                </p>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white text-slate-900 rounded-2xl p-5 shadow-xl border border-gray-100 relative mt-1">
              <div className="absolute top-4 right-4 text-xl">👏</div>
              <p className="text-[13px] font-bold mb-1 w-4/5 text-slate-900">
                Jumlah Kader Menggunakan TeraDesk
              </p>
              <p className="text-[10px] text-gray-400 mb-3 uppercase tracking-wider font-semibold">
                update terakhir
              </p>
              <div className="flex justify-between items-end">
                <div className="text-3xl font-extrabold text-[#1a237e] tracking-tight">
                  352 <span className="text-2xl font-bold">++</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-blue-800 bg-blue-50/60 font-bold">
                  ⊛
                </div>
              </div>
              <button
                onClick={onOpenContact}
                className="text-xs flex items-center gap-1 mt-5 font-medium text-slate-800 hover:text-blue-700 transition-colors"
              >
                Kontak Kami ➔
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Hero Copyright on left */}
      <div className="w-full max-w-6xl text-left mt-auto pt-4 pb-2 z-10 px-2 sm:px-0">
        <p className="text-xs text-gray-400/80 font-medium">Copyright TERAMEDIA 2026</p>
      </div>
    </section>
  );
};

export default Hero;
