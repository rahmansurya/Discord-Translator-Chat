# Discord Translator Chat

Extension Chrome untuk menerjemahkan chat Discord secara otomatis ke berbagai bahasa dengan dukungan terjemahan manual.

![Version](https://img.shields.io/badge/version-2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-orange)

## Fitur Utama

- **Terjemahan Otomatis**: Menerjemahkan pesan Discord secara real-time ke bahasa yang diinginkan
- **Dukungan Banyak Bahasa**: Mendukung puluhan bahasa (Google Translate / DeepL / LibreTranslate)
- **Terjemahan Manual**: Tombol terjemahan khusus untuk pesan reply dan quote
- **Toggle On/Off**: Mudah mengaktifkan atau menonaktifkan terjemahan
- **Pengaturan Bahasa**: Pilih bahasa target dengan mudah
- **Performa Ringan**: Tidak memperlambat Discord
- **UI yang Bersih**: Desain terjemahan yang rapi dan mudah dibaca

### Panel Pengaturan
Extension menyediakan panel pengaturan yang mudah digunakan dengan fitur:
- Translation Switch (on/off)
- Pilihan bahasa sumber (auto-detect atau manual)
- Pilihan bahasa target
- Opsi auto-translate
- Tombol manual translate untuk pesan reply

## Instalasi

### ### Metode 1: Install dari Chrome Web Store 
*Coming soon...*

### Metode 2: Install Manual (Developer Mode)
1. **Download Extension**
   ```bash
   git clone https://github.com/username/Discord-Translator-Chat.git
   ```
   atau download ZIP dari GitHub

2. **Buka Chrome Extensions**
   - Ketik di address bar: `chrome://extensions/`
   - Atau Menu → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle "Developer mode" di pojok kanan atas

4. **Load Extension**
   - Klik "Load unpacked"
   - Pilih folder `Discord-Translator-Chat`
   - Extension siap digunakan!

## 📖 Cara Penggunaan

### Setup Awal

1. **Buka Discord** di browser Chrome
2. **Klik icon extension** di toolbar
3. **Atur pengaturan**:
   - **Translation Switch**: Aktifkan terjemahan
   - **Your Language (Source)**: Pilih bahasa sumber atau "Auto Detect"
   - **Contact Language (Target)**: Pilih bahasa tujuan (default: Indonesia)
4. **Klik "Save Settings"**
5. **Refresh halaman Discord** untuk mengaktifkan

### Terjemahan Otomatis

- Extension akan **otomatis menerjemahkan** pesan baru yang muncul
- Hasil terjemahan muncul di bawah pesan asli
- Hanya pesan yang berbeda bahasa yang diterjemahkan

## Pengaturan

### Translation Switch
Nyalakan/matikan terjemahan otomatis secara global

### Your Language (Source)
Pilih bahasa sumber pesan:
- **Automatic (Detect)** - Deteksi otomatis (recommended)
- 🇬🇧 English
- 🇮🇩 Indonesia
- 🇯🇵 Japanese (日本語)
- 🇰🇷 Korean (한국어)
- 🇨🇳 Chinese (中文)
- Dan 13+ bahasa lainnya

### Contact Language (Target)
Bahasa tujuan terjemahan (default: Indonesia)

### More Settings

- **Auto Translate New Messages**: Terjemahkan pesan baru otomatis
- **Show Translation Notification**: Tampilkan notifikasi (coming soon)
- **Show Manual Translate Button**: Tampilkan tombol terjemahan manual

## Teknologi

- **Manifest V3**: Chrome Extension API terbaru
- **Google Translate API**: Terjemahan gratis via gtx endpoint
- **MutationObserver**: Deteksi real-time DOM changes
- **Chrome Storage API**: Persistent settings
- **Modern JavaScript**: ES6+ features

## 📋 File Structure

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

## 🐛 Known Issues & Limitations

1. **Rate Limiting**: Google Translate API mungkin membatasi request berlebihan
2. **Discord Updates**: Perubahan struktur DOM Discord bisa mempengaruhi fungsi
3. **Complex Messages**: Pesan dengan format kompleks mungkin tidak terdeteksi
4. **Reply Messages**: Beberapa pesan reply mungkin perlu terjemahan manual

## 🔄 Changelog

### Version 2.0
- ✅ Penambahan tombol manual translate
- ✅ Fix bug terjemahan pesan reply
- ✅ Improve detection algorithm
- ✅ UI/UX improvements
- ✅ Code optimization

### Version 1.0
- ✅ Auto translation
- ✅ Multi-language support
- ✅ Settings panel
- ✅ Basic functionality

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- Google Translate API untuk layanan terjemahan
- Discord untuk platform chat
- Chrome Extension API documentation
