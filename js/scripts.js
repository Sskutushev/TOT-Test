document.addEventListener('DOMContentLoaded', () => {
  // Логотип → index.html
  document.getElementById('totlogo')?.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  // Подсветка активного пункта меню
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.frame3944 a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  // Поисковая строка
  const searchInput = document.querySelector('.field-small-search .search-input');
  if (searchInput) {
    searchInput.addEventListener('focus', function() { this.placeholder = ''; });
    searchInput.addEventListener('blur', function() {
      if (!this.value) this.placeholder = 'Поиск…';
    });
    document.querySelector('.field-small-search')
      .addEventListener('click', () => searchInput.focus());
  }

  // Tabs
  function initTabs(containerSelector) {
    const root = document.querySelector(containerSelector);
    if (!root) return;
    const tabs = root.querySelectorAll('.tab');
    const panes = root.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.toggle('active', t === tab));
        panes.forEach(p => p.classList.toggle('active', p.id === tab.dataset.target));
      });
    });
  }
  initTabs('.education-section');
  initTabs('.investment-section');

  const tabs = document.querySelectorAll('.feed-tabs .tab');
  const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // 1) снять active со всех
        tabs.forEach(t => t.classList.remove('active'));
        // 2) поставить active на кликнутый
        tab.classList.add('active');
  
        // 3) переключить контент
        const targetId = tab.dataset.tab;
        contents.forEach(c => {
          c.style.display = c.id === targetId ? 'block' : 'none';
        });
      });
    });
  });
// Инициализация табов для messages (ms-tabs)
  const msTabsContainer = document.querySelector('.ms-tabs');
  if (msTabsContainer) {
    const msTabs = msTabsContainer.querySelectorAll('.tab');
    msTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // 1) снять active со всех
        msTabs.forEach(t => t.classList.remove('tab--active'));
        // 2) поставить active на кликнутый
        tab.classList.add('tab--active');
        // 3) тут можно добавить вашу логику подгрузки/фильтрации сообщений
      });
    });
  }