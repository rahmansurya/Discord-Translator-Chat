# Contributing to Discord Translator Chat

Terima kasih atas minat Anda untuk berkontribusi pada Discord Translator Chat! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Guidelines](#coding-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

Proyek ini dan semua kontributor berkomitmen untuk menjaga lingkungan yang ramah dan inklusif. Dengan berpartisipasi, Anda diharapkan untuk menghormati semua kontributor lainnya.

## How Can I Contribute?

### 🐛 Reporting Bugs

Sebelum membuat bug report:
- Pastikan Anda menggunakan versi terbaru
- Cek apakah bug sudah dilaporkan di [Issues](https://github.com/username/Discord-Translator-Chat/issues)

Saat membuat bug report, jelaskan:
- **Judul yang deskriptif**
- **Langkah-langkah untuk mereproduksi**
- **Perilaku yang diharapkan**
- **Perilaku aktual**
- **Screenshots** (jika memungkinkan)
- **Versi Browser & Extension**

### 💡 Suggesting Features

Feature requests sangat diapresiasi! Jelaskan:
- **Use case** dari fitur tersebut
- **Mengapa fitur ini penting**
- **Bagaimana fitur ini bekerja** (jika ada ide implementasi)

### 🔧 Pull Requests

1. **Fork repository**
2. **Create feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with clear messages**
6. **Push to your fork**
7. **Open Pull Request**

## Development Setup

### Prerequisites

- Google Chrome (latest version)
- Text Editor (VS Code recommended)
- Git

### Setup Steps

1. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/Discord-Translator-Chat.git
   cd Discord-Translator-Chat
   ```

2. **Load extension in Chrome**
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the project folder

3. **Make changes**
   - Edit files as needed
   - Test on Discord

4. **Reload extension after changes**
   - Go to `chrome://extensions/`
   - Click reload button

## Coding Guidelines

### JavaScript

- **ES6+** syntax
- **Async/await** untuk asynchronous operations
- **Proper error handling** dengan try-catch
- **Meaningful variable names**
- **Functions should do one thing**
- **Comments** untuk logic yang kompleks (bukan obvious code)

### Code Style

```javascript
// Good
async function translateMessage(text) {
  if (!text) return null;
  
  try {
    const result = await fetch(url);
    return await result.json();
  } catch (error) {
    console.error("Translation failed:", error);
    return null;
  }
}

// Avoid
function translate(t) {
  fetch(url).then(r => r.json()).then(d => console.log(d));
}
```

### HTML/CSS

- **Semantic HTML**
- **BEM naming** untuk CSS classes (optional)
- **Responsive design**
- **Consistent spacing**

### File Organization

```
Discord-Translator-Chat/
├── manifest.json      # Extension config
├── content.js         # Main logic (clean, well-commented)
├── popup.html         # UI (semantic HTML)
├── popup.js           # UI logic (separated from HTML)
├── style.css          # Styles (organized)
└── README.md          # Documentation
```

## Commit Messages

### Format

```
<type>: <subject>

<body (optional)>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style (formatting, no logic change)
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples

```bash
# Good commits
git commit -m "feat: add manual translate button for reply messages"
git commit -m "fix: prevent duplicate translations on same message"
git commit -m "docs: update installation instructions"

# Avoid
git commit -m "update"
git commit -m "fix bug"
git commit -m "changes"
```

## Pull Request Process

### Before Submitting

✅ **Test your changes thoroughly**
- Auto translation works
- Manual button works
- Settings save correctly
- No console errors

✅ **Code quality**
- No commented-out code
- No unnecessary comments
- Clean and readable

✅ **Documentation**
- Update README if needed
- Add comments for complex logic

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Tested on Discord
- [ ] Tested multiple languages
- [ ] No console errors

## Screenshots
(if applicable)
```

### Review Process

1. **Automated checks** (if any)
2. **Code review** by maintainer
3. **Feedback & iterations**
4. **Approval & merge**

## Questions?

Jika ada pertanyaan:
- Open an [Issue](https://github.com/username/Discord-Translator-Chat/issues)
- Contact: your.email@example.com

---

**Thank you for contributing! 🙏**
