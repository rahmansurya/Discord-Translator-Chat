# Changelog

All notable changes to Discord Translator Chat extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-01-15

### Added
- 🔘 **Manual Translate Button**: Tombol globe (🌐) untuk terjemahan manual pada setiap pesan
- 🔁 **Reply Message Support**: Deteksi dan handle pesan reply/quote dengan benar
- ⚙️ **Show Manual Button Toggle**: Opsi untuk menampilkan/menyembunyikan tombol manual
- 📝 **Visual Feedback**: Icon berubah (⏳, ✅, ❌, ⚠️) untuk status terjemahan
- 🎨 **Hover Effects**: Button dengan animasi hover yang smooth

### Fixed
- 🐛 **Reply Text Extraction Bug**: Fix masalah teks quoted ikut ter-translate sebagai pesan utama
- 🐛 **Duplicate Translations**: Prevent terjemahan duplikat pada message yang sama
- 🐛 **Message Detection**: Improve algorithm deteksi message content
- 🐛 **Manual Translation Persistence**: Manual translation tidak hilang saat scroll

### Changed
- ⚡ **Performance**: Reduce scan interval dari 5s ke 10s untuk efisiensi
- 🧹 **Code Cleanup**: Remove unnecessary comments dan optimize code
- 📊 **ID Tracking**: Ganti WeakMap ke Set untuk message ID tracking yang lebih reliable

### Technical
- Improve `getMainMessageText()` untuk exclude reply container
- Improve `getMainContentContainer()` untuk target yang lebih akurat
- Add proper error handling untuk manual translation
- Optimize DOM queries dengan better selectors

## [1.0.0] - 2024-01-01

### Added
- ✨ **Auto Translation**: Terjemahan otomatis pesan Discord
- 🌍 **Multi-Language**: Support 18+ bahasa
- ⚙️ **Settings Panel**: Panel pengaturan dengan UI modern
- 🔄 **Auto-Detect Language**: Deteksi bahasa sumber otomatis
- 💾 **Persistent Settings**: Settings tersimpan di Chrome Storage
- 👀 **MutationObserver**: Real-time detection pesan baru
- 🎨 **Discord Theme**: Styling yang menyatu dengan tema Discord

### Technical
- Chrome Extension Manifest V3
- Google Translate API integration
- Chrome Storage API untuk settings
- MutationObserver untuk DOM monitoring

## [Unreleased]

### Planned
- 🔔 Translation notifications
- 📊 Translation history/logs
- 🎯 Blacklist/whitelist channels
- 🔧 Custom API endpoint support
- 📱 Mobile/responsive improvements
- 🌙 Dark/Light theme toggle
- ⚡ Translation caching
- 📈 Usage statistics

---

## Version Comparison

### v2.0 vs v1.0

**Major Improvements:**
1. Manual translate button untuk edge cases
2. Better reply message handling
3. More reliable message detection
4. Performance optimizations
5. Cleaner codebase

**Breaking Changes:**
- None (backward compatible)

**Migration Guide:**
- No migration needed
- Settings from v1.0 akan otomatis terbaca oleh v2.0
