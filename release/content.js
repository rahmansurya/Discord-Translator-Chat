console.log("✅ Discord Simple Translator Aktif");

let settings = {
  enabled: true,
  targetLang: "id",
  sourceLang: "auto",
  showManualButton: true
};

const processedMessageIds = new Set();

async function loadSettings() {
  try {
    const result = await chrome.storage.local.get(["enabled", "targetLang", "sourceLang", "showManualButton"]);
    if (result.enabled !== undefined) settings.enabled = result.enabled;
    if (result.targetLang) settings.targetLang = result.targetLang;
    if (result.sourceLang) settings.sourceLang = result.sourceLang;
    if (result.showManualButton !== undefined) settings.showManualButton = result.showManualButton;
    console.log("⚙️ Settings loaded:", settings);
  } catch (e) {
    console.error("Failed to load settings:", e);
  }
}

async function translate(text) {
  if (!settings.enabled) return null;
  if (!text || text.length <= 1) return null;

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${settings.sourceLang}&tl=${settings.targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data && data[0]) {
      return data[0].map(x => x[0]).filter(Boolean).join("");
    }
    return null;
  } catch (err) {
    console.error("Translation error:", err);
    return null;
  }
}

function getMainMessageText(messageElement) {
  const replyContainer = messageElement.querySelector('[class*="repliedMessage"], [class*="replyContext"]');

  const allContents = messageElement.querySelectorAll('[class*="messageContent"]');
  for (const content of allContents) {
    if (replyContainer && replyContainer.contains(content)) continue;
    const text = content.innerText?.trim();
    if (text && text.length > 0) return text;
  }

  const allMarkups = messageElement.querySelectorAll('.markup');
  for (const markup of allMarkups) {
    if (replyContainer && replyContainer.contains(markup)) continue;
    const text = markup.innerText?.trim();
    if (text && text.length > 0) return text;
  }

  const allTextVariants = messageElement.querySelectorAll('[data-text-variant]');
  for (const el of allTextVariants) {
    if (replyContainer && replyContainer.contains(el)) continue;
    const text = el.innerText?.trim();
    if (text && text.length > 0) return text;
  }

  return null;
}

function getMainContentContainer(messageElement) {
  const replyContainer = messageElement.querySelector('[class*="repliedMessage"], [class*="replyContext"]');

  const allContents = messageElement.querySelectorAll('[class*="messageContent"]');
  for (const content of allContents) {
    if (replyContainer && replyContainer.contains(content)) continue;
    return content;
  }

  const allMarkups = messageElement.querySelectorAll('.markup');
  for (const markup of allMarkups) {
    if (replyContainer && replyContainer.contains(markup)) continue;
    return markup;
  }

  return null;
}

function getMessageId(messageElement) {
  return messageElement.id || null;
}

function addManualTranslateButton(messageElement, contentContainer) {
  if (!settings.showManualButton) return;
  if (messageElement.querySelector(".manual-translate-btn")) return;

  const actionsContainer = messageElement.querySelector('[role="group"]');
  if (!actionsContainer) return;

  const btn = document.createElement("button");
  btn.textContent = "🌐";
  btn.className = "manual-translate-btn";
  btn.title = "Terjemahkan pesan ini (manual)";
  btn.style.cssText = `
    background: transparent;
    border: none;
    border-radius: 4px;
    color: #b5bac1;
    cursor: pointer;
    font-size: 14px;
    padding: 4px 6px;
    margin-left: 4px;
    transition: all 0.2s;
  `;

  btn.addEventListener("mouseenter", () => {
    btn.style.background = "rgba(255,255,255,0.1)";
    btn.style.color = "#ffffff";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.background = "transparent";
    btn.style.color = "#b5bac1";
  });

  btn.addEventListener("click", async (e) => {
    e.stopPropagation();

    let existingTrans = messageElement.querySelector(".manual-translate");
    if (existingTrans) {
      existingTrans.remove();
      btn.textContent = "🌐";
      return;
    }

    const originalText = getMainMessageText(messageElement);

    if (!originalText || originalText.length <= 1) {
      btn.textContent = "❌";
      setTimeout(() => { btn.textContent = "🌐"; }, 1000);
      return;
    }

    btn.textContent = "⏳";
    btn.disabled = true;

    const translated = await translate(originalText);

    if (!translated || translated.toLowerCase() === originalText.toLowerCase()) {
      btn.textContent = "⚠️";
      setTimeout(() => { btn.textContent = "🌐"; }, 1500);
      btn.disabled = false;
      return;
    }

    const transDiv = document.createElement("div");
    transDiv.className = "simple-translate manual-translate";
    transDiv.innerHTML = `<span style="opacity:0.6; font-size:11px;">📝 Terjemahan:</span><br>${translated}`;

    const target = contentContainer || getMainContentContainer(messageElement) || messageElement;
    target.querySelector(".manual-translate")?.remove();
    target.appendChild(transDiv);

    btn.textContent = "✅";
    btn.disabled = false;
    setTimeout(() => {
      if (btn.textContent === "✅") btn.textContent = "🌐";
    }, 1500);
  });

  actionsContainer.appendChild(btn);
}

async function processMessage(messageElement) {
  if (!settings.enabled) return;

  const msgId = getMessageId(messageElement);

  if (msgId && processedMessageIds.has(msgId)) return;

  const originalText = getMainMessageText(messageElement);
  const contentContainer = getMainContentContainer(messageElement);

  if (msgId) processedMessageIds.add(msgId);

  if (originalText && originalText.length > 1 && contentContainer) {
    if (!contentContainer.querySelector('.simple-translate:not(.manual-translate)')) {
      const translated = await translate(originalText);

      if (translated &&
          translated.toLowerCase() !== originalText.toLowerCase() &&
          translated !== originalText) {

        const isReply = messageElement.querySelector('[class*="repliedMessage"], [class*="replyContext"]') !== null;

        const div = document.createElement("div");
        div.className = "simple-translate";

        if (isReply) {
          div.innerHTML = `<span style="opacity:0.6; font-size:11px;">🔁 Terjemahan (reply):</span><br>${translated}`;
        } else {
          div.innerText = translated;
        }

        contentContainer.appendChild(div);
      }
    }
  }

  addManualTranslateButton(messageElement, contentContainer);
}

function scan() {
  if (!settings.enabled) return;

  const messages = document.querySelectorAll('li[id^="chat-messages-"]');
  messages.forEach(message => {
    processMessage(message);
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "updateSettings") {
    settings = { ...settings, ...request.settings };
    console.log("Settings updated:", settings);

    if (request.settings.showManualButton === false) {
      document.querySelectorAll('.manual-translate-btn').forEach(btn => btn.remove());
    } else if (request.settings.showManualButton === true) {
      scan();
    }

    if (request.settings.enabled === false) {
      document.querySelectorAll('.simple-translate').forEach(el => el.remove());
      document.querySelectorAll('.manual-translate-btn').forEach(el => el.remove());
    }

    sendResponse({ success: true });
  }
});

async function init() {
  await loadSettings();

  const observer = new MutationObserver(() => {
    scan();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  setTimeout(() => {
    console.log("🔍 Initial scan...");
    scan();
  }, 3000);

  setInterval(scan, 10000);

  console.log("🚀 Discord Translator Ready!");
}

init();
