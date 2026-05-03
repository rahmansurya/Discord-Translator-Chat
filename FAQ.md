# ❓ Frequently Asked Questions (FAQ)

## 📌 Umum

### Apa itu Discord Translator Chat?

Discord Translator Chat adalah Chrome Extension yang menerjemahkan chat Discord secara otomatis ke bahasa yang Anda pilih. Extension ini mendukung 18+ bahasa dan menggunakan Google Translate API.

### Apakah extension ini gratis?

Ya, 100% gratis dan open-source di bawah lisensi MIT.

### Apakah aman digunakan?

Ya, extension ini:
- ✅ Tidak mengumpulkan data pribadi
- ✅ Hanya akses ke domain discord.com
- ✅ Tidak mengirim data ke server lain (kecuali Google Translate API)
- ✅ Source code terbuka untuk audit

### Browser apa saja yang didukung?

Saat ini hanya Google Chrome dan browser berbasis Chromium (Edge, Brave, Opera, dll).

### Apakah tersedia untuk Firefox atau Safari?

Belum, tapi dalam roadmap untuk development di masa depan.

## 🚀 Instalasi & Setup

### Bagaimana cara install extension ini?

Lihat panduan lengkap di [INSTALL.md](INSTALL.md). Singkatnya:
1. Download dari GitHub
2. Buka `chrome://extensions/`
3. Enable Developer Mode
4. Load unpacked folder extension

### Extension sudah ter-install tapi tidak muncul di toolbar

**Solusi:**
1. Klik icon puzzle (Extensions) di toolbar
2. Pin extension ke toolbar
3. Atau refresh halaman extensions

### Setelah install, terjemahan tidak muncul

**Checklist:**
1. ✅ Extension status ON di `chrome://extensions/`
2. ✅ Translation Switch ON di popup settings
3. ✅ Halaman Discord sudah di-refresh (F5)
4. ✅ Ada pesan dalam bahasa asing (bukan bahasa target)

## ⚙️ Pengaturan & Fitur

### Bahasa apa saja yang didukung?

18+ bahasa termasuk:
- Indonesia 🇮🇩
- English 🇬🇧
- Japanese 🇯🇵
- Korean 🇰🇷
- Chinese 🇨🇳
- Spanish 🇪🇸
- French 🇫🇷
- German 🇩🇪
- Arabic 🇸🇦
- Dan banyak lagi...

### Apa bedanya "Source Language" dan "Target Language"?

- **Source**: Bahasa asli pesan yang akan diterjemahkan
- **Target**: Bahasa tujuan hasil terjemahan

Contoh: Source = English, Target = Indonesia
→ Pesan bahasa Inggris diterjemahkan ke Indonesia

### Apa itu "Auto Detect" di Source Language?

Extension akan otomatis mendeteksi bahasa pesan. Recommended untuk chat multilingual.

### Kapan harus pakai tombol manual translate?

Gunakan tombol manual (🌐) ketika:
- Pesan reply/quote tidak terdeteksi otomatis
- Ingin terjemahkan pesan tertentu saja
- Auto translation OFF tapi butuh terjemah sesekali

## 🔧 Troubleshooting

### Terjemahan muncul double/duplikat

**Penyebab:** Bug yang sudah diperbaiki di v2.0

**Solusi:**
1. Update ke versi terbaru
2. Clear browser cache
3. Refresh Discord

### Tombol manual (🌐) tidak muncul

**Solusi:**
1. Buka settings extension
2. Pastikan "Show Manual Translate Button" ON
3. Save dan refresh Discord

### Terjemahan lambat atau tidak muncul

**Kemungkinan:**
1. **Koneksi internet lambat** - Cek koneksi
2. **Google Translate rate limit** - Tunggu beberapa menit
3. **Terlalu banyak pesan** - Normal, tunggu scan selesai

### Extension crash atau error

**Langkah debug:**
1. Buka Developer Console (F12)
2. Screenshot error yang muncul
3. Report di GitHub Issues dengan detail:
   - Browser version
   - Extension version
   - Steps to reproduce
   - Screenshot error

### Pesan dalam bahasa target juga diterjemahkan

**Penyebab:** Deteksi bahasa tidak akurat

**Solusi:**
1. Set Source Language manual (jangan Auto Detect)
2. Pastikan Target Language sudah benar
3. Clear translation dengan disable & enable extension

## 🎯 Penggunaan

### Apakah bisa terjemahkan pesan lama?

Ya, saat pertama load halaman, extension akan scan semua pesan yang terlihat. Scroll ke atas untuk load lebih banyak.

### Apakah pesan saya ikut diterjemahkan?

Tidak, extension hanya menerjemahkan pesan yang Anda terima, bukan yang Anda kirim.

### Bisa filter channel tertentu?

Fitur ini belum tersedia di v2.0, tapi masuk dalam roadmap untuk versi mendatang.

### Apakah terjemahan tersimpan?

Tidak, terjemahan bersifat real-time dan tidak disimpan. Setiap refresh, extension akan translate ulang.

### Bisa terjemahkan emoji atau attachment?

Tidak, hanya text message yang bisa diterjemahkan.

## 📊 Performa & Keamanan

### Apakah extension ini boros resource?

Tidak, extension sangat ringan:
- Scan interval: 10 detik
- Hanya proses pesan yang belum diterjemahkan
- Menggunakan MutationObserver yang efisien

### Apakah extension mengakses password saya?

Tidak sama sekali. Extension hanya:
- Baca pesan di Discord
- Simpan settings di Chrome Storage
- Request ke Google Translate API

### Data saya dikirim ke mana?

Data terjemahan hanya dikirim ke:
- **Google Translate API** (translate.googleapis.com)

Tidak ada server lain yang diakses.

### Bisa digunakan offline?

Tidak, karena memerlukan koneksi ke Google Translate API.

## 🛠️ Development

### Bisa contribute ke project ini?

Tentu! Baca [CONTRIBUTING.md](CONTRIBUTING.md) untuk guidelines.

### Bagaimana cara report bug?

1. Cek apakah bug sudah dilaporkan di [GitHub Issues](https://github.com/username/Discord-Translator-Chat/issues)
2. Jika belum, create issue baru dengan detail lengkap

### Request fitur baru

Silakan buat feature request di GitHub Issues dengan:
- Use case yang jelas
- Alasan mengapa fitur penting
- Mockup/contoh jika ada

### Source code di mana?

GitHub: [https://github.com/username/Discord-Translator-Chat](https://github.com/username/Discord-Translator-Chat)

## 📞 Support

### Masih ada masalah yang belum terjawab?

1. **Search** di [GitHub Issues](https://github.com/username/Discord-Translator-Chat/issues)
2. **Create new issue** jika belum ada
3. **Contact**: your.email@example.com

### Dokumentasi tambahan

- [README.md](README.md) - Overview & quick start
- [INSTALL.md](INSTALL.md) - Installation guide lengkap
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- [CHANGELOG.md](CHANGELOG.md) - Version history

---

**Tidak menemukan jawaban?**  
Buat issue baru di [GitHub](https://github.com/username/Discord-Translator-Chat/issues) atau contact via email!
