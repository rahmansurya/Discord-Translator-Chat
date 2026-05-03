document.addEventListener('DOMContentLoaded', async () => {
  const result = await chrome.storage.local.get([
    'enabled', 'targetLang', 'sourceLang'
  ]);

  document.getElementById('enableSwitch').checked = result.enabled !== false;
  document.getElementById('targetLang').value = result.targetLang || 'id';
  document.getElementById('sourceLang').value = result.sourceLang || 'auto';
  document.getElementById('autoTranslate').checked = true;
  document.getElementById('showNotify').checked = false;
  document.getElementById('showManualBtn').checked = result.showManualButton !== false;

  document.getElementById('saveBtn').addEventListener('click', async () => {
    const settings = {
      enabled: document.getElementById('enableSwitch').checked,
      targetLang: document.getElementById('targetLang').value,
      sourceLang: document.getElementById('sourceLang').value,
      autoTranslate: document.getElementById('autoTranslate').checked,
      showNotify: document.getElementById('showNotify').checked,
      showManualButton: document.getElementById('showManualBtn').checked
    };

    await chrome.storage.local.set(settings);

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    try {
      await chrome.tabs.sendMessage(tab.id, {
        type: 'updateSettings',
        settings: settings
      });
    } catch (e) {
      console.log("Content script not ready, will apply on refresh");
    }

    const btn = document.getElementById('saveBtn');
    const originalText = btn.textContent;
    btn.textContent = '✅ Saved!';
    btn.style.background = '#23a55a';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '#5865f2';
    }, 1500);

    if (confirm('Settings saved! Refresh Discord to apply changes?')) {
      chrome.tabs.reload(tab.id);
    }
  });
});
