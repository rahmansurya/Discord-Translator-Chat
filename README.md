# Discord Translator Chat

Extension Chrome untuk menerjemahkan chat Discord secara otomatis ke berbagai bahasa dengan dukungan terjemahan manual.

![Version](https://img.shields.io/badge/version-2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-orange)

## Fitur

- **Terjemahan Otomatis**: Menerjemahkan pesan Discord secara real-time ke bahasa yang diinginkan
- **Dukungan Banyak Bahasa**: Mendukung banyak bahasa 
- **Toggle On/Off**: Mudah mengaktifkan atau menonaktifkan terjemahan
- **Pengaturan Bahasa**: Pilih bahasa target dengan mudah
- **Performa Ringan**: Tidak memperlambat Discord
- **UI Bersih**: Desain terjemahan yang rapi dan mudah dibaca

### Panel Pengaturan
Extension menyediakan panel pengaturan sederhana dengan fitur:
- Switch untuk mengaktifkan/menonaktifkan terjemahan
- Pilihan bahasa sumber (auto detect atau manual)
- Pilihan bahasa tujuan

## Instalasi

### Metode 1: Install dari Chrome Web Store 
*Coming soon...*

### Metode 2: Install Manual (Developer Mode)
1. Download repository ini atau ambil file ZIP dari GitHub
2. Buka Chrome dan masuk ke halaman `chrome://extensions/`
3. Aktifkan **Developer mode** di pojok kanan atas
4. Klik tombol **Load unpacked**
5. Pilih folder ekstensi
6. Extension siap digunakan di Discord Web

## Cara Penggunaan
1. Buka Discord di browser Chrome (`discord.com`)
2. Klik ikon extension di toolbar Chrome
3. Atur pengaturan sesuai kebutuhan:
   - Aktifkan Translation Switch
   - Pilih bahasa sumber (disarankan menggunakan Auto Detect)
   - Pilih bahasa tujuan (default: Indonesia)
4. Simpan pengaturan
5. Refresh halaman Discord
Extension akan secara otomatis menerjemahkan pesan baru. Untuk pesan reply atau quote, gunakan tombol terjemahan manual jika diperlukan.

## Teknologi yang Digunakan
- Manifest V3
- Google Translate API
- MutationObserver untuk deteksi pesan real-time
- Chrome Storage API untuk menyimpan pengaturan
- JavaScript modern (ES6+)

## Struktur File

```
Discord-Translator-Chat/
├── manifest.json       # Extension configuration
├── content.js          # Main translation logic
├── popup.html          # Settings UI
├── popup.js            # Settings handler
├── style.css           # Translation styles
├── icon128.png         # Extension icon
└── README.md           # Documentation
```

## Changelog
**Version 2.0.0** (2026-05-03)
- Penambahan tombol terjemahan manual
- Perbaikan deteksi dan penanganan pesan
- Optimalisasi performa dan kode
- Perbaikan berbagai bug

**Version 1.0.0** (2026-04-20)
- Rilis awal dengan fitur terjemahan otomatis
- Dukungan multi bahasa
- Panel pengaturan dasar

## License
Distributed under the MIT License. See `LICENSE` for more information.
