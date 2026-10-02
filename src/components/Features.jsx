import React from 'react';
import {
  CheckCircle2,
  FolderArchive,
  Home,
  Users,
  Bell,
  Send,
  Calendar,
  Lock,
} from 'lucide-react';

const features = [
  {
    icon: CheckCircle2,
    title: 'Sistem Persetujuan Program (Program Approval Request)',
    description:
      'Ajukan dan kelola program kerja dengan alur persetujuan yang terstruktur, cepat, dan transparan secara digital.',
  },
  {
    icon: FolderArchive,
    title: 'Arsip Digital Terpusat',
    description:
      'Simpan seluruh dokumen organisasi seperti proposal dan laporan dalam satu sistem yang rapi dan mudah diakses.',
  },
  {
    icon: Home,
    title: 'Dashboard Monitoring',
    description:
      'Pantau progres kegiatan dan performa organisasi secara real-time melalui tampilan dashboard yang informatif.',
  },
  {
    icon: Users,
    title: 'Manajemen Anggota',
    description:
      'Kelola struktur organisasi, peran, dan data anggota secara terpusat dan lebih terorganisir.',
  },
  {
    icon: Bell,
    title: 'Notifikasi Pintar',
    description:
      'Dapatkan pemberitahuan otomatis terkait persetujuan, deadline, dan aktivitas penting lainnya secara langsung.',
  },
  {
    icon: Send,
    title: 'Otomatisasi Alur Kerja',
    description:
      'Permudah proses administrasi dengan sistem alur kerja otomatis yang meningkatkan efisiensi organisasi.',
  },
  {
    icon: Calendar,
    title: 'Timeline & Perencanaan Kegiatan',
    description:
      'Rencanakan dan pantau jadwal program kerja melalui timeline yang terstruktur dan mudah dipahami.',
  },
  {
    icon: Lock,
    title: 'Akses & Keamanan Data',
    description:
      'Atur hak akses pengguna dan jaga keamanan data organisasi dengan sistem proteksi yang terpercaya.',
  },
];

const Features = () => {
  return (
    <section id="fitur" className="w-full bg-[#F4F5F9] text-slate-900 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-block bg-[#E8EEFD] text-[#2563eb] text-xs font-semibold px-5 py-1.5 rounded-full mb-5 shadow-xs">
          Fitur Unggulan
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 text-center tracking-tight mb-4">
          Solusi Lengkap untuk Manajemen <br className="hidden sm:inline" /> Organisasi Modern
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-xs sm:text-sm md:text-base text-center max-w-2xl mb-14 font-normal">
          Kelola program kerja, administrasi, dan kolaborasi tim dalam satu platform digital yang terintegrasi.
        </p>

        {/* 8 Feature Cards Grid (4 columns on lg, 2 on sm, 1 on xs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Round light-blue icon container */}
                  <div className="w-11 h-11 rounded-2xl bg-[#E8EEFD] text-[#2563eb] flex items-center justify-center mb-5">
                    <Icon size={20} strokeWidth={2.2} />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-slate-900 text-sm leading-snug mb-3 min-h-[40px]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-xs leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Learn more link */}
                <div className="pt-2">
                  <a
                    href="#beranda"
                    className="text-xs font-semibold text-slate-700 hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Pelajari Lebih Lanjut</span>
                    <span className="text-[11px]">&gt;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
