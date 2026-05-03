# 📦 CRX File Information

## What is a CRX file?

**CRX** (Chrome Extension) adalah format packaged extension Chrome yang sudah di-sign dengan private key. File ini biasanya digunakan untuk:

- ✅ Chrome Web Store distributions
- ✅ Enterprise deployments
- ⚠️ Legacy manual installations (limited in modern Chrome)

## 📁 Files in Release

Untuk release v2.0, tersedia 2 format:

### 1. ZIP File (Recommended for Manual Install)
```
Discord-Translator-Chat-v2.0.zip
Size: ~6.1 KB
```

**Cara Install:**
1. Download ZIP file
2. Extract ke folder
3. Chrome → `chrome://extensions/`
4. Enable "Developer mode"
5. Click "Load unpacked"
6. Select extracted folder

### 2. CRX File (For Advanced Users)
```
Discord-Translator-Chat-v2.0.crx
Size: ~6.8 KB
```

**⚠️ Important Notes:**
- Modern Chrome (v73+) **tidak mengizinkan** install .crx dari luar Web Store
- File .crx hanya bisa di-install jika:
  - Via Chrome Web Store (recommended)
  - Via Enterprise Policy
  - Dengan Developer Mode + drag-drop (terbatas)

## 🔒 Security & Private Key

### Private Key (.pem file)

File `release.pem` adalah **private key** untuk signing extension.

**⚠️ SECURITY WARNING:**
- ❌ **JANGAN** upload .pem file ke GitHub
- ❌ **JANGAN** share .pem file ke public
- ✅ **SIMPAN** di tempat aman
- ✅ **BACKUP** untuk future releases

**Kenapa penting?**
- Private key memastikan extension update dari sumber yang sama
- Jika hilang, tidak bisa update extension dengan ID yang sama
- Jika bocor, orang lain bisa fake update extension Anda

### Already in .gitignore

File `.pem` sudah otomatis di-exclude dari Git:

```gitignore
# Chrome Extension Package
*.pem
```

## 📥 Installation Methods Comparison

| Method | File Format | Chrome Support | Best For |
|--------|-------------|----------------|----------|
| **Chrome Web Store** | CRX (automatic) | ✅ Full | End users |
| **Manual (ZIP)** | ZIP | ✅ Full (Dev mode) | Developers, Testing |
| **Manual (CRX)** | CRX | ⚠️ Limited | Legacy, Enterprise |
| **Drag & Drop** | CRX | ⚠️ Very Limited | Quick testing |

## 🎯 Recommended Approach

### For GitHub Releases

Upload **BOTH** files:

1. **Discord-Translator-Chat-v2.0.zip** 
   - ✅ Primary download
   - ✅ Easy to install
   - ✅ Works on all Chrome versions

2. **Discord-Translator-Chat-v2.0.crx**
   - ⚠️ Alternative option
   - ⚠️ For advanced users
   - ⚠️ Limited compatibility

### For Chrome Web Store

- Upload CRX via Developer Dashboard
- Chrome automatically signs dengan Web Store key
- Users install via "Add to Chrome" button

## 🔧 How CRX Was Created

### Automated (via script)

```powershell
# Run PowerShell script
.\pack-extension.ps1
```

Script akan:
1. Pack extension dari folder `release/`
2. Generate atau use existing private key
3. Create `Discord-Translator-Chat-v2.0.crx`
4. Save private key to `release.pem`

### Manual (via Chrome UI)

1. Open `chrome://extensions/`
2. Enable "Developer mode"
3. Click **"Pack extension"** button
4. **Extension root directory**: Browse ke `release/` folder
5. **Private key file**: Leave empty (atau gunakan existing .pem)
6. Click **"Pack Extension"**
7. Chrome creates:
   - `release.crx` (packed extension)
   - `release.pem` (private key)

## ⚠️ Common Issues

### "Package is invalid: CRX_HEADER_INVALID"

**Cause:** Chrome tidak accept .crx dari luar Web Store

**Solution:** 
- Use ZIP file instead
- Or publish to Chrome Web Store

### "This extension is not listed in the Chrome Web Store"

**Cause:** Chrome blocks non-Web Store extensions

**Solution:**
- Enable Developer Mode
- Use "Load unpacked" dengan ZIP file
- Or publish to Chrome Web Store

### "CRX file cannot be installed"

**Cause:** Modern Chrome security restrictions

**Solution:**
- Extract ZIP dan use "Load unpacked"
- Publish to Web Store for normal users

## 📊 File Comparison

| Aspect | ZIP | CRX |
|--------|-----|-----|
| **Size** | 6.1 KB | 6.8 KB |
| **Signed** | No | Yes (with private key) |
| **Install Method** | Extract → Load unpacked | Drag & drop (limited) |
| **Chrome Compatibility** | All versions (Dev mode) | Limited (modern Chrome) |
| **Security** | No signature | Signed & verified |
| **Update** | Manual re-install | Can auto-update (if policy allows) |
| **Best For** | Development, Testing | Distribution, Web Store |

## 🚀 Deployment Strategies

### Strategy 1: Open Source (GitHub)
```
✅ Upload both ZIP and CRX to GitHub Releases
✅ Recommend ZIP for manual installation
✅ Keep .pem file secure (NOT in repo)
✅ Users install via Developer Mode
```

### Strategy 2: Chrome Web Store (Recommended for Public)
```
✅ Submit to Chrome Web Store
✅ Chrome auto-manages CRX signing
✅ Users install normally (no Developer Mode)
✅ Auto-updates enabled
✅ Better security & trust
```

### Strategy 3: Enterprise Deployment
```
✅ Use CRX with Enterprise Policy
✅ Deploy via Group Policy or MDM
✅ Force-install for organization
✅ Centralized management
```

## 📝 Best Practices

### For Developers
1. ✅ Keep private key (.pem) secure
2. ✅ Use same key for all versions
3. ✅ Backup private key regularly
4. ✅ Include both ZIP and CRX in releases
5. ✅ Document installation clearly

### For Users
1. ✅ Prefer Chrome Web Store version (if available)
2. ✅ Use ZIP file for manual installation
3. ✅ Only download from trusted sources
4. ✅ Review permissions before install
5. ✅ Keep extension updated

## 🔗 Related Documentation

- [INSTALL.md](INSTALL.md) - Installation guide (using ZIP)
- [HOW_TO_RELEASE.md](HOW_TO_RELEASE.md) - Creating GitHub releases
- [README.md](README.md) - Main documentation

## 📞 Questions?

- **CRX not installing?** → Use ZIP file instead
- **Lost private key?** → Create new one (new extension ID)
- **Want Web Store?** → Apply for Chrome Web Store developer account
- **Enterprise deployment?** → Contact for enterprise CRX setup

---

**TL;DR:** 
- 🎯 **For manual install**: Use ZIP file
- 🎯 **For Web Store**: Use CRX via Developer Dashboard
- 🎯 **Both available**: In GitHub Releases

**Made with ❤️ for Discord Community**
