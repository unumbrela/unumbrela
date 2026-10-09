// Apply saved preferences before the stylesheet paints the page.
(() => {
  const root = document.documentElement;
  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const language = new URLSearchParams(location.search).get('lang');
  root.lang = (['en', 'zh'].includes(language) ? language : read('zg-language')) === 'zh' ? 'zh-CN' : 'en';
  const saved = read('zg-theme');
  root.dataset.theme = ['dark', 'light'].includes(saved) ? saved : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
})();
