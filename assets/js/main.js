(() => {
  'use strict';
  const root = document.documentElement;
  const languageButton = document.getElementById('language-toggle');
  const themeButton = document.getElementById('theme-toggle');
  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
  const queryLanguage = new URLSearchParams(location.search).get('lang');
  let language = ['en', 'zh'].includes(queryLanguage) ? queryLanguage : (read('zg-language') === 'zh' ? 'zh' : 'en');
  const updateThemeLabel = () => {
    const dark = root.dataset.theme === 'dark';
    const label = language === 'zh' ? (dark ? '切换浅色主题' : '切换深色主题') : (dark ? 'Switch to light theme' : 'Switch to dark theme');
    themeButton.setAttribute('aria-label', label);
    themeButton.title = label;
    themeButton.setAttribute('aria-pressed', String(dark));
  };
  const applyLanguage = () => {
    const chinese = language === 'zh';
    root.lang = chinese ? 'zh-CN' : 'en';
    languageButton.textContent = chinese ? 'EN' : '中文';
    languageButton.setAttribute('aria-label', chinese ? 'Switch to English' : '切换为中文');
    languageButton.title = chinese ? 'Switch to English' : '切换为中文';
    document.title = chinese ? '郭子豪 | AI for Science' : 'Zihao Guo | AI for Science';
    updateThemeLabel();
  };
  const savedTheme = read('zg-theme');
  root.dataset.theme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyLanguage();
  languageButton.addEventListener('click', () => {
    language = language === 'en' ? 'zh' : 'en';
    save('zg-language', language);
    const url = new URL(location.href);
    url.searchParams.set('lang', language);
    history.replaceState(null, '', url);
    applyLanguage();
  });
  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    save('zg-theme', root.dataset.theme);
    updateThemeLabel();
  });
  const feedback = document.getElementById('contact-feedback');
  let feedbackTimer;
  document.querySelectorAll('[data-copy-contact]').forEach(button => {
    button.addEventListener('click', async () => {
      clearTimeout(feedbackTimer);
      const value = button.dataset.copyContact;
      const name = button.dataset.contactName;
      try {
        await navigator.clipboard.writeText(value);
        feedback.textContent = language === 'zh' ? `${name} 已复制：${value}` : `${name} copied: ${value}`;
        feedbackTimer = setTimeout(() => { feedback.textContent = ''; }, 6000);
      } catch {
        feedback.textContent = language === 'zh' ? `请手动复制 ${name}：${value}` : `Copy ${name} manually: ${value}`;
      }
    });
  });
  document.querySelector('[data-year]').textContent = new Date().getFullYear();
  const links = [...document.querySelectorAll('.header-inner nav a')];
  const sections = links.map(link => document.querySelector(link.hash));
  const updateNavigation = () => {
    let current = sections[0];
    for (const section of sections) if (section.getBoundingClientRect().top <= 160) current = section;
    links.forEach(link => {
      const active = link.hash === '#' + current.id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
  };
  let pending = false;
  addEventListener('scroll', () => {
    if (!pending) { pending = true; requestAnimationFrame(() => { updateNavigation(); pending = false; }); }
  }, { passive: true });
  addEventListener('resize', updateNavigation);
  addEventListener('hashchange', updateNavigation);
  const dialog = document.getElementById('figure-dialog');
  const fullImage = document.getElementById('figure-full');
  const figureTitle = document.getElementById('figure-title');
  const closeButton = document.getElementById('figure-close');
  const figureViewport = document.querySelector('.figure-viewport');
  const sizeButton = document.getElementById('figure-size');
  const originalLink = document.getElementById('figure-original');
  sizeButton.addEventListener('click', () => {
    const original = figureViewport.classList.toggle('is-original');
    sizeButton.setAttribute('aria-pressed', String(original));
    figureViewport.scrollTo(0, 0);
  });
  fullImage.addEventListener('load', () => {
    fullImage.style.setProperty('--figure-width', fullImage.naturalWidth + 'px');
  });
  document.querySelectorAll('[data-figure]').forEach(link => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const preview = link.querySelector('img');
      figureViewport.classList.remove('is-original');
      sizeButton.setAttribute('aria-pressed', 'false');
      originalLink.href = link.href;
      fullImage.src = link.href;
      fullImage.alt = preview.alt;
      figureTitle.textContent = preview.alt;
      closeButton.setAttribute('aria-label', language === 'zh' ? '关闭图片' : 'Close image');
      dialog.showModal();
      figureViewport.scrollTo(0, 0);
    });
  });
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
  });
  updateNavigation();
})();
