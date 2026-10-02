import React from 'react';
import { Quote, Sparkles, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimoni" className="w-full max-w-6xl mx-auto px-6 md:px-12 py-16 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 border border-white/20 text-gray-300 text-xs px-4 py-1.5 rounded-full mb-4 bg-white/5 font-semibold">
          <Sparkles size={14} className="text-amber-400" /> Suara Pemimpin Organisasi
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Divalidasi oleh Pembina & Pengurus Aktif
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Dirancang dari kebutuhan riil organisasi kemahasiswaan dan kepemudaan modern.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Testimonial 1 - Pembina */}
        <div className="bg-[#0c1432]/90 border border-white/10 rounded-3xl p-6 sm:p-8 relative backdrop-blur-xl hover:border-blue-400/40 transition-all flex flex-col justify-between shadow-2xl">
          <div>
            <Quote size={32} className="text-amber-400/30 mb-4" />
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed italic mb-6">
              "TeraDesk menghadirkan transparansi luar biasa. Sebagai pembina, saya dapat memantau setiap realisasi proker dan memeriksa administrasi surat dinas tanpa harus menumpuk map fisik di meja kerja. Efisiensi dan akuntabilitas organisasi meningkat drastis."
            </p>
          </div>
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <img
              src="/images/pembina.jpg"
              alt="M. Ishak, S.Kom., M.Kom."
              className="w-14 h-14 rounded-full object-cover border-2 border-amber-400/50 shadow-md"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-white text-base">M. Ishak, S.Kom., M.Kom.</h3>
                <span className="text-blue-400 text-xs font-bold">✓</span>
              </div>
              <p className="text-xs text-amber-300 font-semibold">Pembina TERAMEDIA</p>
              <p className="text-[11px] text-gray-400">Akademisi & Praktisi Teknologi Informasi</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 - Ketua Umum */}
        <div className="bg-[#0c1432]/90 border border-white/10 rounded-3xl p-6 sm:p-8 relative backdrop-blur-xl hover:border-amber-400/40 transition-all flex flex-col justify-between shadow-2xl">
          <div>
            <Quote size={32} className="text-amber-400/30 mb-4" />
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed italic mb-6">
              "Bagi kami di jajaran pengurus harian, tantangan terbesar adalah koordinasi lintas divisi dan pengarsipan LPJ di akhir periode. Dengan TeraDesk, seluruh 350+ kader terdata rapi dan koordinasi program kerja selesai tepat waktu dengan standar profesional."
            </p>
          </div>
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <img
              src="/images/ketua.jpg"
              alt="Muhammad Toha"
              className="w-14 h-14 rounded-full object-cover border-2 border-amber-400/50 shadow-md"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-white text-base">Muhammad Toha</h3>
                <span className="text-blue-400 text-xs font-bold">✓</span>
              </div>
              <p className="text-xs text-amber-300 font-semibold">Ketua Umum TERAMEDIA</p>
              <p className="text-[11px] text-gray-400">Periode Kepengurusan 2025 – 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
