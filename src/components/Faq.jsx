import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Apa itu TeraDesk dan untuk siapa platform ini dirancang?',
    a: 'TeraDesk adalah platform manajemen tata kelola dan administrasi terintegrasi yang dirancang khusus untuk organisasi mahasiswa, komunitas kepemudaan, serta lembaga non-profit agar mampu mengelola program kerja, arsip surat, absensi kader, dan LPJ secara efisien dan paperless.',
  },
  {
    q: 'Apakah TeraDesk dapat diakses melalui ponsel (mobile)?',
    a: 'Ya, TeraDesk sepenuhnya responsif dan dapat diakses dengan mulus dari peramban ponsel, tablet, maupun komputer desktop tanpa memerlukan instalasi aplikasi tambahan yang memberatkan.',
  },
  {
    q: 'Bagaimana keamanan arsip surat dan data kader di TeraDesk?',
    a: 'Data dokumen dan biodata kader dienkripsi dengan standar industri modern. Hak akses diatur secara berjenjang berdasarkan peran (role-based access control) antara Anggota, Pengurus Divisi, Sekretariat, Ketua Umum, dan Pembina.',
  },
  {
    q: 'Bisakah organisasi kami mengkustomisasi struktur divisi dan format surat?',
    a: 'Tentu saja. TeraDesk menyediakan pengaturan fleksibel untuk menambahkan jumlah bidang/divisi tanpa batas serta mengunggah kop surat dan format penomoran resmi sesuai Anggaran Dasar/Anggaran Rumah Tangga (AD/ART) organisasi Anda.',
  },
  {
    q: 'Bagaimana cara mulai mengadopsi TeraDesk untuk organisasi kami?',
    a: 'Anda cukup menekan tombol "Kontak Kami" untuk menjadwalkan demonstrasi dan aktivasi prototipe bagi kepengurusan organisasi Anda bersama tim TERAMEDIA.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="w-full max-w-4xl mx-auto px-6 md:px-12 py-16 relative z-10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 border border-white/20 text-gray-300 text-xs px-4 py-1.5 rounded-full mb-4 bg-white/5 font-semibold">
          <HelpCircle size={14} className="text-amber-400" /> Pusat Informasi
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Temukan jawaban seputar fungsionalitas dan integrasi TeraDesk untuk organisasi Anda.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-[#0b122c]/80 border border-white/10 rounded-2xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-white hover:text-amber-300 transition-colors cursor-pointer"
              >
                <span className="text-sm sm:text-base">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-amber-400' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-gray-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
