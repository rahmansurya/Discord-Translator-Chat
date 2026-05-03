# 📦 Release Notes

## Version 2.0.0 - Manual Translate & Reply Support

**Release Date:** 2024-01-15

### 🎉 What's New

#### Major Features
- 🔘 **Manual Translate Button** - Tombol globe (🌐) pada setiap pesan untuk terjemahan manual
- 🔁 **Reply Message Support** - Deteksi dan terjemahkan pesan reply/quote dengan benar
- 📝 **Visual Feedback** - Icon berubah (⏳, ✅, ❌, ⚠️) untuk status terjemahan
- 🎨 **Hover Effects** - Button dengan animasi hover yang smooth

#### Settings & Configuration
- ⚙️ **Show Manual Button Toggle** - Opsi untuk menampilkan/menyembunyikan tombol manual
- 💾 **Improved Settings Persistence** - Settings tersimpan lebih reliable

### 🐛 Bug Fixes

- ✅ **Fixed Reply Text Extraction** - Teks quoted tidak lagi ikut ter-translate sebagai pesan utama
- ✅ **Prevented Duplicate Translations** - Terjemahan duplikat pada message yang sama
- ✅ **Improved Message Detection** - Algorithm deteksi message content lebih akurat
- ✅ **Manual Translation Persistence** - Manual translation tidak hilang saat scroll

### ⚡ Performance Improvements

- 🚀 **Reduced Scan Interval** - Dari 5s ke 10s untuk efisiensi CPU
- 🧹 **Code Optimization** - Remove unnecessary comments dan optimize DOM queries
- 📊 **Better ID Tracking** - Ganti WeakMap ke Set untuk tracking yang lebih reliable

### 🛠️ Technical Changes

- Improve `getMainMessageText()` untuk exclude reply container
- Improve `getMainContentContainer()` untuk target yang lebih akurat
- Add proper error handling untuk manual translation
- Optimize DOM queries dengan better selectors

---

## 📥 Installation

### Method 1: Manual Installation (Recommended)

1. **Download** `Discord-Translator-Chat-v2.0.zip`
2. **Extract** ke folder di komputer Anda
3. **Buka Chrome** → `chrome://extensions/`
4. **Enable** "Developer mode"
5. **Click** "Load unpacked"
6. **Select** folder yang sudah di-extract
7. **Refresh** halaman Discord

### Method 2: Chrome Web Store
*Coming soon...*

---

## 🎯 Quick Start

1. **Buka Discord** di Chrome
2. **Click icon extension** di toolbar
3. **Enable** Translation Switch
4. **Set** bahasa:
   - **Source**: Auto Detect (recommended)
   - **Target**: Indonesia (atau bahasa pilihan Anda)
5. **Save Settings** dan refresh Discord
6. **Done!** Terjemahan otomatis aktif

---

## 📋 What's Included

**Extension Files:**
- `manifest.json` - Extension configuration
- `content.js` - Translation logic
- `popup.html` - Settings UI
- `popup.js` - Settings handler
- `style.css` - Styling
- `icon128.png` - Extension icon

**File Size:** ~50 KB (compressed)

---

## 🔄 Upgrade from v1.0

### No Breaking Changes!

Settings dari v1.0 akan otomatis terbaca oleh v2.0. Tidak perlu konfigurasi ulang.

**Steps:**
1. Remove extension v1.0 dari Chrome
2. Install v2.0 menggunakan method di atas
3. Settings lama akan otomatis dimuat

---

## 🆚 Version Comparison

| Feature | v1.0 | v2.0 |
|---------|------|------|
| Auto Translation | ✅ | ✅ |
| Multi-Language | ✅ | ✅ |
| Manual Button | ❌ | ✅ |
| Reply Support | ⚠️ Limited | ✅ Full |
| Visual Feedback | ❌ | ✅ |
| Performance | Good | Better |

---

## ⚙️ Supported Languages

18+ languages including:
- 🇮🇩 Indonesia
- 🇬🇧 English
- 🇯🇵 Japanese (日本語)
- 🇰🇷 Korean (한국어)
- 🇨🇳 Chinese (中文)
- 🇪🇸 Spanish (Español)
- 🇫🇷 French (Français)
- 🇩🇪 German (Deutsch)
- 🇸🇦 Arabic (العربية)
- 🇷🇺 Russian (Русский)
- And more...

---

## 🐛 Known Issues

1. **Rate Limiting** - Google Translate API mungkin membatasi request berlebihan
2. **Discord Updates** - Perubahan struktur DOM Discord bisa mempengaruhi fungsi
3. **Complex Messages** - Pesan dengan format kompleks mungkin tidak terdeteksi

**Workaround:** Gunakan manual translate button (🌐) untuk pesan yang tidak terdeteksi.

---

## 📞 Support & Feedback

### Need Help?
- 📖 Read [INSTALL.md](INSTALL.md) for detailed installation guide
- ❓ Check [FAQ.md](FAQ.md) for common questions
- 🐛 Report bugs via [GitHub Issues](https://github.com/username/Discord-Translator-Chat/issues)

### Contributing
- 🤝 Read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines
- 🔧 Submit Pull Requests
- ⭐ Star the repository if you find it useful!

---

## 📝 License

MIT License - Free to use, modify, and distribute.

See [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Google Translate API untuk layanan terjemahan
- Discord untuk platform chat
- Chrome Extension API documentation
- All contributors dan users!

---

## ⏭️ What's Next?

Planned for v2.1:
- 🔔 Translation notifications
- 📊 Translation history
- 🎯 Channel blacklist/whitelist
- ⚡ Translation caching
- 🌙 Theme customization

Stay tuned! 🚀

---

**Download:** [Discord-Translator-Chat-v2.0.zip](../../releases/download/v2.0.0/Discord-Translator-Chat-v2.0.zip)

**Made with ❤️ for Discord Community**
