# Changelog

Semua perubahan penting pada ekstensi **Discord Chat Translator** akan didokumentasikan dalam file ini.

Format ini mengikuti [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), dan proyek ini menggunakan [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-05-03

### Added (Ditambahkan)
- **Tombol Terjemahan Manual**: Menambahkan tombol globe (🌐) untuk menerjemahkan pesan secara manual pada setiap chat
- **Dukungan Pesan Reply/Quote**: Deteksi dan penanganan khusus untuk pesan reply dan quote
- **Pengaturan Tampilan Tombol Manual**: Opsi untuk menampilkan atau menyembunyikan tombol terjemahan manual
- **Visual Feedback**: Indikator status terjemahan dengan ikon yang berubah (⏳, ✅, ❌, ⚠️)
- **Efek Hover**: Animasi hover yang halus pada tombol terjemahan

### Fixed (Diperbaiki)
- **Bug Ekstraksi Teks Reply**: Memperbaiki masalah di mana teks quoted ikut diterjemahkan sebagai pesan utama
- **Terjemahan Duplikat**: Mencegah munculnya terjemahan ganda pada pesan yang sama
- **Deteksi Pesan**: Meningkatkan algoritma deteksi konten pesan
- **Persistensi Terjemahan Manual**: Terjemahan manual tidak lagi hilang saat halaman di-scroll

### Changed (Diubah)
- **Performa**: Mengurangi interval pemindaian dari 5 detik menjadi 10 detik untuk efisiensi yang lebih baik
- **Pembersihan Kode**: Membersihkan kode dan menghapus komentar yang tidak diperlukan
- **Sistem Pelacakan ID**: Mengganti `WeakMap` dengan `Set` untuk pelacakan ID pesan yang lebih andal

### Technical (Teknis)
- Meningkatkan fungsi `getMainMessageText()` agar lebih akurat mengecualikan container reply
- Meningkatkan fungsi `getMainContentContainer()` dengan selector yang lebih tepat
- Menambahkan penanganan error yang lebih baik pada fitur terjemahan manual
- Mengoptimasi query DOM dengan selector yang lebih efisien

---

## [1.0.0] - 2026-04-20

*(Versi awal rilis)*

- Rilis perdana ekstensi Discord Chat Translator
- Fitur terjemahan otomatis dasar
- Dukungan multi bahasa
