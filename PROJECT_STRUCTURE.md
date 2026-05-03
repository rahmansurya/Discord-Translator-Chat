# 📁 Project Structure

Dokumentasi struktur file dan folder Discord Translator Chat.

## 📂 File Tree

```
Discord-Translator-Chat/
├── 📄 manifest.json          # Extension configuration (Manifest V3)
├── 📜 content.js             # Core translation logic & DOM manipulation
├── 🎨 popup.html             # Settings UI popup
├── ⚙️ popup.js               # Settings handler & UI logic
├── 💅 style.css              # Translation styling for Discord
├── 🖼️ icon128.png            # Extension icon (128x128)
│
├── 📖 README.md              # Main documentation & quick start
├── 📦 INSTALL.md             # Detailed installation guide
├── 🤝 CONTRIBUTING.md        # Contribution guidelines
├── 📋 CHANGELOG.md           # Version history & updates
├── ❓ FAQ.md                 # Frequently Asked Questions
├── 📝 LICENSE                # MIT License
├── 🙈 .gitignore             # Git ignore rules
└── 📚 PROJECT_STRUCTURE.md   # This file
```

## 📄 File Details

### Core Extension Files

#### `manifest.json`
**Purpose:** Extension configuration & permissions

**Key Properties:**
```json
{
  "manifest_version": 3,
  "name": "Penterjemah Chat Discord",
  "version": "2.0",
  "permissions": ["storage"],
  "host_permissions": ["https://discord.com/*"],
  "content_scripts": [...],
  "action": {...}
}
```

**Dependencies:**
- None (standard Chrome Extension format)

---

#### `content.js` (262 lines)
**Purpose:** Main translation engine & logic

**Key Functions:**
```javascript
loadSettings()              // Load dari Chrome Storage
translate(text)             // Google Translate API call
getMainMessageText()        // Extract message text (exclude reply)
getMainContentContainer()   // Get target container
addManualTranslateButton()  // Add 🌐 button
processMessage()            // Main processor
scan()                      // Scan all messages
init()                      // Initialize extension
```

**Dependencies:**
- Chrome Extension API (`chrome.storage`, `chrome.runtime`)
- Google Translate API (public endpoint)

**Event Listeners:**
- MutationObserver (DOM changes)
- chrome.runtime.onMessage (settings updates)

---

#### `popup.html` (292 lines)
**Purpose:** Settings UI interface

**Sections:**
1. **Header** - Title & branding
2. **Translation Switch** - Main toggle
3. **Language Selectors** - Source & target language
4. **More Settings** - Additional options
5. **Save Button** - Save & apply settings

**Inline Styles:**
- Discord-themed dark UI
- Custom toggle switches
- Responsive layout

**Dependencies:**
- popup.js

---

#### `popup.js` (48 lines)
**Purpose:** Settings handler & UI logic

**Key Functions:**
```javascript
DOMContentLoaded()  // Load current settings
saveBtn.click()     // Save & sync settings
```

**Chrome APIs Used:**
- `chrome.storage.local` (get/set)
- `chrome.tabs` (query, sendMessage, reload)

---

#### `style.css` (13 lines)
**Purpose:** Styling untuk translation result di Discord

**Classes:**
- `.simple-translate` - Translation container
- `.simple-translate:hover` - Hover effect

**Style Features:**
- Discord theme integration
- Subtle border separator
- Smooth hover transition

---

### Documentation Files

#### `README.md`
**Audience:** General users & developers

**Content:**
- Overview & features
- Installation guide (quick)
- Usage instructions
- Technology stack
- Contributing info
- License & contact

---

#### `INSTALL.md`
**Audience:** First-time users

**Content:**
- System requirements
- Step-by-step installation
- Setup & configuration
- Troubleshooting
- Platform-specific notes
- Update & uninstall guide

---

#### `CONTRIBUTING.md`
**Audience:** Contributors & developers

**Content:**
- Code of conduct
- Development setup
- Coding guidelines
- Commit message format
- Pull request process
- Code style examples

---

#### `CHANGELOG.md`
**Audience:** All users

**Content:**
- Version history
- New features
- Bug fixes
- Breaking changes
- Migration guides

---

#### `FAQ.md`
**Audience:** Users with questions

**Content:**
- Common questions
- Installation issues
- Usage tips
- Troubleshooting
- Security & privacy
- Development info

---

#### `LICENSE`
**Type:** MIT License

**Permissions:**
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use

---

#### `.gitignore`
**Purpose:** Exclude files from Git

**Excluded:**
- OS files (.DS_Store, Thumbs.db)
- Editor files (.vscode/, .idea/)
- Logs (*.log)
- Archives (*.zip, *.crx)

---

### Assets

#### `icon128.png`
**Type:** PNG Image
**Size:** 128x128 pixels
**Purpose:** Extension icon di toolbar & store

---

## 🔄 Data Flow

```
User Action → popup.js → Chrome Storage
                              ↓
                        content.js ← Settings
                              ↓
                        Discord DOM
                              ↓
                    Extract Message Text
                              ↓
                    Google Translate API
                              ↓
                    Inject Translation
                              ↓
                        style.css
```

## 🎯 File Responsibilities

### User Interface
- `popup.html` - UI structure
- `popup.js` - UI logic
- Inline CSS in popup.html - UI styling

### Core Logic
- `content.js` - All translation logic
- `manifest.json` - Configuration

### Styling
- `style.css` - Discord integration styles

### Documentation
- `README.md` - Main entry point
- `INSTALL.md` - Installation
- `CONTRIBUTING.md` - Development
- `FAQ.md` - Support
- `CHANGELOG.md` - History

## 📊 Code Statistics

| File | Lines | Purpose |
|------|-------|---------|
| content.js | 262 | Core logic |
| popup.html | 292 | UI markup |
| popup.js | 48 | UI handler |
| style.css | 13 | Styling |
| manifest.json | 23 | Config |
| **Total Code** | **638** | **5 files** |

## 🔧 Key Technologies

### Chrome Extension APIs
- Manifest V3
- Content Scripts
- Storage API
- Messaging API
- Tabs API

### Web Technologies
- JavaScript ES6+
- HTML5
- CSS3
- Async/Await
- MutationObserver

### External APIs
- Google Translate API (public endpoint)

## 📝 Naming Conventions

### Files
- `kebab-case.md` for documentation
- `camelCase.js` for scripts
- `lowercase.json` for config
- `lowercase.css` for styles

### Code
- `camelCase` for variables & functions
- `PascalCase` for classes (jika ada)
- `UPPER_CASE` for constants
- Descriptive names (avoid abbreviations)

## 🚀 Build & Deploy

### Development
```bash
1. Load unpacked di chrome://extensions/
2. Enable Developer Mode
3. Test di Discord
4. Reload extension setelah changes
```

### Production
```bash
1. Bump version di manifest.json
2. Update CHANGELOG.md
3. Test thoroughly
4. Create GitHub release
5. (Future) Submit to Chrome Web Store
```

## 📦 Dependencies

### Runtime Dependencies
- **None** - Pure vanilla JavaScript

### Development Dependencies
- Git (version control)
- Text Editor (VS Code recommended)
- Chrome Browser (testing)

### External Services
- Google Translate API (free tier)
- GitHub (hosting)

---

**Last Updated:** 2024-01-15  
**Version:** 2.0
