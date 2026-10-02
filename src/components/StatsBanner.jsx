import React from 'react';
import { Users2, Award, FileCheck2, Zap } from 'lucide-react';

const stats = [
  {
    icon: Users2,
    value: '352+',
    label: 'Kader & Anggota Aktif',
    description: 'Terdata dalam database terpusat',
    color: 'from-amber-400 to-yellow-500',
  },
  {
    icon: Award,
    value: '89%',
    label: 'Ketercapaian Proker',
    description: 'Realisasi program kerja periode aktif',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: FileCheck2,
    value: '100%',
    label: 'Digitalisasi E-Arsip',
    description: 'Surat & LPJ terdokumentasi rapi',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Zap,
    value: '3.5x',
    label: 'Efisiensi Administrasi',
    description: 'Lebih cepat dalam disposisi & acc',
    color: 'from-purple-400 to-pink-500',
  },
];

const StatsBanner = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 md:px-12 py-10 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-[#0c1432]/70 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl hover:bg-white/5 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-amber-400/30 transition-all shadow-md">
                <Icon size={24} className="text-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-1">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-200 mb-1">
                {item.label}
              </div>
              <div className="text-[11px] text-gray-400 leading-tight">
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsBanner;
