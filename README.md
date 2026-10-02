# TeraDesk — Landing Page UI Slicing

Project landing page modern untuk **TeraDesk** (oleh TERAMEDIA), platform pengelolaan administrasi, program kerja, dan keorganisasian terintegrasi.

Dibangun dengan referensi style visual dari rancangan prototype awal: tema deep navy (`#070B19`), grid aksen vertikal, kartu widget mengambang dengan glassmorphism, badge amber `#FFB300`, dan foto dokumentasi kegiatan nyata.

---

## 🚀 Fitur & Komponen

1. **Header & Navigasi**: Logo atom ⚛, tautan menu navigasi responsif, dan tombol aksi *Kontak Kami*.
2. **Hero Section & Dashboard Preview Widgets**:
   - Kartu kiri: *Update Program Kerja* (Workshop Desain Grafis SMK Negeri 1 Palopo).
   - Kartu tengah: *Arsip Administrasi* dengan circular meter ketercapaian proker 89%, badge aksen *Periode 2025*, dan foto workshop.
   - Kartu kanan: Profil Pembina (M. Ishak, S.Kom., M.Kom.), profil Ketua Umum (Muhammad Toha), serta statistik 352++ kader aktif.
   - Mode responsif: Tab switcher interaktif di layar smartphone/tablet dan floating layout presisi di layar desktop.
3. **Banner Metrik & Statistik**: 4 indikator performa utama organisasi.
4. **Fitur Unggulan**: Tab switcher interaktif (Proker, E-Arsip, Presensi QR, Analitik LPJ) dilengkapi preview data real-time.
5. **Alur Kerja Operasional**: 4 tahapan operasional dari pengajuan hingga LPJ.
6. **Testimoni Pemimpin**: Kutipan langsung dari Pembina dan Ketua Umum TERAMEDIA.
7. **Pusat Informasi (FAQ)**: Accordion tanya-jawab yang interaktif.
8. **Banner CTA & Footer**: Call to action dan footer lengkap dengan `Copyright TERAMEDIA 2026`.
9. **Modal Kontak Kami**: Formulir interaktif dengan feedback sukses.

---

## 🛠️ Teknologi yang Digunakan

- **React 19**
- **Vite 8**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Lucide React** (Ikon SVG modern)
- **Google Fonts** (*Plus Jakarta Sans*)

---

## 💻 Cara Menjalankan

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Server Development
```bash
npm run dev
```
Akses di browser pada: `http://localhost:5173/`

### 3. Build untuk Produksi
```bash
npm run build
```
Hasil build akan tersimpan di direktori `dist/`.
