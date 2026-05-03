# 📦 How to Create GitHub Release

Panduan untuk membuat release di GitHub dan upload extension package.

## 📋 Prerequisites

- ✅ Repository sudah di-push ke GitHub
- ✅ File ZIP sudah tersedia: `Discord-Translator-Chat-v2.0.zip`
- ✅ RELEASE_NOTES.md sudah siap
- ✅ All code tested dan working

## 🚀 Steps to Create Release

### Step 1: Navigate to Releases

1. Buka repository di GitHub
2. Click tab **"Releases"** (di sebelah kanan, bawah About)
3. Atau navigate ke: `https://github.com/USERNAME/Discord-Translator-Chat/releases`

### Step 2: Create New Release

1. Click **"Create a new release"** atau **"Draft a new release"**

### Step 3: Fill Release Form

#### Tag Version
```
v2.0.0
```
- Format: `vMAJOR.MINOR.PATCH`
- Click "Choose a tag"
- Type: `v2.0.0`
- Click "Create new tag: v2.0.0 on publish"

#### Release Title
```
Discord Translator Chat v2.0 - Manual Translate & Reply Support
```

#### Description

Copy dari `RELEASE_NOTES.md` atau gunakan template ini:

```markdown
## 🎉 What's New in v2.0

### Major Features
- 🔘 **Manual Translate Button** - Tombol globe (🌐) untuk terjemahan manual
- 🔁 **Reply Message Support** - Full support untuk pesan reply/quote
- 📝 **Visual Feedback** - Status icons (⏳, ✅, ❌, ⚠️)
- 🎨 **Hover Effects** - Smooth animations

### Bug Fixes
- ✅ Fixed reply text extraction bug
- ✅ Prevented duplicate translations
- ✅ Improved message detection
- ✅ Better manual translation persistence

### Performance
- ⚡ Reduced scan interval (5s → 10s)
- 🧹 Code optimization
- 📊 Better ID tracking with Set

---

## 📥 Installation

1. **Download** `Discord-Translator-Chat-v2.0.zip` below
2. **Extract** the ZIP file
3. **Open Chrome** → `chrome://extensions/`
4. **Enable** "Developer mode"
5. **Click** "Load unpacked"
6. **Select** the extracted folder
7. **Refresh** Discord page

---

## 🆚 Upgrade from v1.0

No breaking changes! Your settings will be preserved.

---

## 📖 Documentation

- [README.md](README.md) - Overview & features
- [INSTALL.md](INSTALL.md) - Detailed installation guide
- [FAQ.md](FAQ.md) - Common questions
- [CHANGELOG.md](CHANGELOG.md) - Full version history

---

## 🐛 Known Issues

- Rate limiting pada heavy usage
- Discord DOM changes may affect functionality
- Some complex messages need manual translation

**Workaround:** Use manual translate button (🌐)

---

## 📞 Support

- 🐛 [Report bugs](https://github.com/USERNAME/Discord-Translator-Chat/issues)
- 💬 [Discussions](https://github.com/USERNAME/Discord-Translator-Chat/discussions)
- ⭐ Star if you find it useful!

---

**Full Changelog:** [CHANGELOG.md](CHANGELOG.md)
```

Ganti `USERNAME` dengan username GitHub Anda.

### Step 4: Attach Binaries

1. Scroll ke section **"Attach binaries by dropping them here or selecting them."**
2. **Upload BOTH files:**
   - **Discord-Translator-Chat-v2.0.zip** (6.1 KB) - Recommended for users
   - **Discord-Translator-Chat-v2.0.crx** (6.8 KB) - For advanced users
3. **Drag and drop** kedua file atau click untuk browse
4. Wait for upload to complete
5. Both files akan muncul di list dengan nama dan size

**Note:** ZIP file adalah primary download. CRX untuk advanced users atau legacy support.

### Step 5: Additional Settings

**Optional Settings:**

- ✅ **Set as the latest release** - Check (recommended)
- ⬜ **Set as a pre-release** - Uncheck (unless beta)
- ⬜ **Create a discussion for this release** - Optional

### Step 6: Publish

1. **Preview** release dengan scroll ke atas
2. **Check** semua informasi sudah benar
3. Click **"Publish release"** (hijau, di bawah)

### Step 7: Verify

1. Release akan muncul di halaman Releases
2. Check link download ZIP berfungsi
3. Test download dan install extension

## 📸 Screenshot Checklist

Before publishing, pastikan:

- ✅ Tag version benar (`v2.0.0`)
- ✅ Title descriptive
- ✅ Description lengkap dengan markdown formatting
- ✅ ZIP file attached
- ✅ File size reasonable (~50 KB)
- ✅ "Latest release" checked
- ✅ "Pre-release" unchecked (unless beta)

## 🔄 Update Existing Release

Jika perlu edit release:

1. Go to Releases page
2. Click **"Edit"** pada release yang ingin diubah
3. Make changes
4. Click **"Update release"**

## 🗑️ Delete Release (if needed)

1. Edit release
2. Scroll ke bawah
3. Click **"Delete this release"**
4. Confirm

**Note:** Tag akan tetap ada. Untuk delete tag:
```bash
git tag -d v2.0.0
git push origin :refs/tags/v2.0.0
```

## 📋 Release Checklist

Sebelum publish:

- [ ] Code tested thoroughly
- [ ] Version bumped di manifest.json
- [ ] CHANGELOG.md updated
- [ ] README.md updated (if needed)
- [ ] All commits pushed to GitHub
- [ ] ZIP file generated dan tested
- [ ] RELEASE_NOTES.md prepared
- [ ] Tag version decided
- [ ] Release description ready
- [ ] Screenshot/demo ready (optional)

## 🎯 Best Practices

### Version Numbering

- **MAJOR** (v2.0.0): Breaking changes
- **MINOR** (v2.1.0): New features, backward compatible
- **PATCH** (v2.0.1): Bug fixes only

### Release Timing

- ✅ After thorough testing
- ✅ When significant changes accumulated
- ✅ On stable commits
- ❌ Don't release with known bugs

### Description Tips

- 📝 Clear and concise
- 🎯 Highlight major changes
- 🐛 List bug fixes
- 📖 Link to documentation
- 🙏 Credit contributors

## 📊 After Release

### Promote Release

1. **Update README.md**: Add download badge
   ```markdown
   [![Download](https://img.shields.io/github/v/release/USERNAME/Discord-Translator-Chat)](https://github.com/USERNAME/Discord-Translator-Chat/releases/latest)
   ```

2. **Social Media**: Share release announcement
   - Twitter
   - Reddit
   - Discord communities

3. **Update Discussions**: Announce in GitHub Discussions

### Monitor

- 📊 Check download statistics
- 🐛 Monitor issues for new bugs
- 💬 Respond to feedback
- ⭐ Thank users who star the repo

## 🔧 Automation (Advanced)

### GitHub Actions (Future)

Create `.github/workflows/release.yml` untuk auto-generate releases:

```yaml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Create ZIP
        run: |
          zip -r Discord-Translator-Chat-${{ github.ref_name }}.zip \
            manifest.json content.js popup.html popup.js style.css icon128.png
      - name: Create Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: ${{ github.ref }}
          release_name: Release ${{ github.ref }}
          draft: false
          prerelease: false
```

## 📞 Need Help?

- **GitHub Docs**: https://docs.github.com/en/repositories/releasing-projects-on-github
- **Issues**: Create issue di repository jika ada masalah

---

**Happy Releasing! 🎉**
