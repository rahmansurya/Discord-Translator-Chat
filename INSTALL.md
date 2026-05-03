# 📦 Installation Guide - Discord Translator Chat

Panduan lengkap instalasi Discord Translator Chat extension untuk Google Chrome.

## 📋 System Requirements

- **Browser**: Google Chrome versi 88 atau lebih baru
- **OS**: Windows, macOS, atau Linux
- **Internet**: Koneksi internet untuk mengakses Discord dan API terjemahan

## 🚀 Metode Instalasi

### Metode 1: Install dari Chrome Web Store (Recommended)

> **Coming Soon** - Extension akan segera tersedia di Chrome Web Store

Ketika sudah tersedia:
1. Kunjungi [Chrome Web Store - Discord Translator Chat]()
2. Klik tombol **"Add to Chrome"**
3. Konfirmasi dengan klik **"Add extension"**
4. Extension siap digunakan!

### Metode 2: Manual Installation (Developer Mode)

Untuk pengembangan atau testing versi terbaru.

#### Step 1: Download Extension

**Opsi A: Download ZIP**
1. Kunjungi [GitHub Repository](https://github.com/username/Discord-Translator-Chat)
2. Klik tombol hijau **"Code"**
3. Pilih **"Download ZIP"**
4. Extract file ZIP ke folder yang mudah diakses

**Opsi B: Git Clone**
```bash
git clone https://github.com/username/Discord-Translator-Chat.git
cd Discord-Translator-Chat
```

#### Step 2: Buka Chrome Extensions Page

**Cara 1: Via Address Bar**
```
chrome://extensions/
```

**Cara 2: Via Menu**
1. Klik menu Chrome (3 titik vertikal di pojok kanan atas)
2. Pilih **"More tools"** → **"Extensions"**

**Cara 3: Via Keyboard Shortcut**
- Windows/Linux: `Ctrl + Shift + E`
- macOS: Belum ada shortcut default

#### Step 3: Enable Developer Mode

1. Di halaman Extensions, lihat pojok kanan atas
2. Toggle switch **"Developer mode"** hingga AKTIF (biru)
3. Menu baru akan muncul: "Load unpacked", "Pack extension", "Update"

#### Step 4: Load Extension

1. Klik tombol **"Load unpacked"**
2. Navigate ke folder `Discord-Translator-Chat` yang sudah di-download/clone
3. Pilih folder tersebut (pastikan folder berisi file `manifest.json`)
4. Klik **"Select Folder"** atau **"Open"**

#### Step 5: Verifikasi Instalasi

Extension berhasil ter-install jika:
- ✅ Muncul card "Penterjemah Chat Discord" di daftar extensions
- ✅ Icon extension muncul di toolbar Chrome
- ✅ Status menunjukkan "ON" (toggle berwarna biru)
- ✅ Tidak ada error merah di card extension

## ⚙️ Setup Awal

### 1. Pin Extension ke Toolbar (Optional tapi Recommended)

1. Klik icon **puzzle** (Extensions) di toolbar Chrome
2. Cari "Penterjemah Chat Discord"
3. Klik icon **pin** di sebelah nama extension
4. Icon extension sekarang permanen di toolbar

### 2. Buka Discord

1. Navigate ke [discord.com](https://discord.com)
2. Login ke akun Discord Anda
3. Buka channel/server untuk testing

### 3. Konfigurasi Extension

1. **Klik icon extension** di toolbar
2. Panel popup akan muncul dengan pengaturan:

   **Translation Switch**
   - Toggle ON untuk mengaktifkan terjemahan otomatis

   **Your Language (Source)**
   - Pilih "🌍 Automatic (Detect)" untuk deteksi otomatis
   - Atau pilih bahasa spesifik jika pesan selalu dalam 1 bahasa

   **Contact Language (Target)**
   - Pilih bahasa tujuan (default: 🇮🇩 Indonesia)
   - Sesuaikan dengan bahasa yang Anda inginkan

   **More Settings**
   - ✅ Auto Translate New Messages (recommended: ON)
   - 🔔 Show Translation Notification (coming soon)
   - ✅ Show Manual Translate Button (recommended: ON)

3. **Klik tombol "💾 Save Settings"**

4. **Confirm refresh** ketika diminta
   - Klik "OK" untuk refresh otomatis
   - Atau refresh manual dengan `F5` atau `Ctrl+R`

### 4. Testing

1. **Cari pesan dalam bahasa asing** di Discord
2. **Tunggu 3-5 detik** untuk initial scan
3. **Terjemahan otomatis** akan muncul di bawah pesan
4. **Test tombol manual** dengan hover pada pesan dan klik 🌐

## 🔧 Troubleshooting

### Extension tidak muncul di toolbar

**Solusi:**
1. Refresh halaman extensions: `chrome://extensions/`
2. Pastikan extension statusnya ON (toggle biru)
3. Coba remove dan re-install extension

### Terjemahan tidak muncul

**Kemungkinan penyebab:**

**1. Extension belum aktif**
- Buka popup extension
- Pastikan Translation Switch ON
- Save settings dan refresh Discord

**2. Halaman Discord belum di-refresh**
- Tekan `F5` atau `Ctrl+R` di halaman Discord
- Atau close tab dan buka Discord baru

**3. Pesan sudah dalam bahasa target**
- Extension tidak akan menerjemahkan jika teks sudah dalam bahasa tujuan
- Coba ubah target language di settings

**4. Initial scan belum selesai**
- Tunggu 3-5 detik setelah page load
- Cek console log (F12) untuk status: "🚀 Discord Translator Ready!"

### Console Errors

**Buka Developer Console:**
- Tekan `F12` atau `Ctrl+Shift+I`
- Tab "Console"
- Cari error berwarna merah

**Common errors:**

**"Failed to load settings"**
- Clear browser data untuk extension
- Re-configure settings

**"Translation error"**
- Cek koneksi internet
- Google Translate API mungkin rate-limited
- Tunggu beberapa menit dan coba lagi

**"Content script not ready"**
- Normal saat pertama kali save settings
- Refresh Discord akan fix masalah ini

### Tombol manual tidak muncul

**Solusi:**
1. Pastikan "Show Manual Translate Button" ON di settings
2. Refresh halaman Discord
3. Hover pada pesan untuk trigger button visibility

## 📱 Platform-Specific Notes

### Windows

- Extension path biasanya di `C:\Users\<username>\Downloads\Discord-Translator-Chat\`
- Shortcut reload extension: `Ctrl+R` di halaman extensions

### macOS

- Extension path di `/Users/<username>/Downloads/Discord-Translator-Chat/`
- Shortcut reload extension: `Cmd+R` di halaman extensions

### Linux

- Extension path di `/home/<username>/Downloads/Discord-Translator-Chat/`
- Pastikan folder permissions readable

## 🔄 Update Extension

### Manual Installation (Developer Mode)

**Metode 1: Git Pull (jika clone via Git)**
```bash
cd Discord-Translator-Chat
git pull origin main
```
Lalu reload extension di `chrome://extensions/`

**Metode 2: Re-download**
1. Download ZIP terbaru dari GitHub
2. Extract ke folder yang sama (overwrite files)
3. Reload extension di `chrome://extensions/`

### Chrome Web Store (jika sudah tersedia)

Update otomatis dalam 24-48 jam setelah release versi baru.

**Manual update:**
1. Buka `chrome://extensions/`
2. Enable "Developer mode"
3. Klik "Update" di bagian atas

## 🗑️ Uninstall Extension

### Cara 1: Via Extensions Page

1. Buka `chrome://extensions/`
2. Cari "Penterjemah Chat Discord"
3. Klik **"Remove"**
4. Konfirmasi dengan klik **"Remove"** lagi

### Cara 2: Via Toolbar

1. Right-click icon extension di toolbar
2. Pilih **"Remove from Chrome"**
3. Konfirmasi

**Note:** Uninstall akan menghapus semua settings yang tersimpan.

## 📞 Need Help?

Jika masih ada masalah:

1. **Cek FAQ** di README.md
2. **Search Issues** di [GitHub Issues](https://github.com/username/Discord-Translator-Chat/issues)
3. **Create New Issue** dengan detail:
   - Browser version
   - OS version
   - Steps to reproduce
   - Screenshots
   - Console errors (jika ada)

---

**Happy Translating! 🌐**
