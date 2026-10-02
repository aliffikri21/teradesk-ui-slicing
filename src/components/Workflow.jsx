import React from 'react';
import { Send, FileCheck, QrCode, FileSpreadsheet, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Send,
    title: 'Pengajuan & Perencanaan',
    desc: 'Pengurus divisi menyusun proposal kegiatan, anggaran biaya, dan jadwal pelaksanaan langsung di portal.',
  },
  {
    step: '02',
    icon: FileCheck,
    title: 'Persetujuan & Disposisi',
    desc: 'Sekretaris dan Ketua Umum meninjau serta menyetujui dokumen secara digital dengan riwayat yang transparan.',
  },
  {
    step: '03',
    icon: QrCode,
    title: 'Eksekusi & Presensi QR',
    desc: 'Kegiatan berjalan lancar dengan sistem absensi instan berbasis QR code untuk peserta dan panitia kegiatan.',
  },
  {
    step: '04',
    icon: FileSpreadsheet,
    title: 'Otomatisasi LPJ & Arsip',
    desc: 'Laporan pertanggungjawaban terbuat otomatis dan tersimpan aman di cloud arsip untuk periode berikutnya.',
  },
];

const Workflow = () => {
  return (
    <section id="alur-kerja" className="w-full max-w-6xl mx-auto px-6 md:px-12 py-16 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 border border-blue-400/30 text-blue-300 text-xs px-4 py-1.5 rounded-full mb-4 bg-blue-400/10 font-semibold">
          Proses Terstruktur
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Bagaimana TeraDesk Membantu Organisasi Anda
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Mengubah birokrasi manual yang lambat dan terfragmentasi menjadi satu rantai kerja digital yang presisi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-[#0b122c]/80 border border-white/10 rounded-2xl p-6 relative group hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-2xl font-black text-amber-400/80 font-mono">
                  {item.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Workflow;
