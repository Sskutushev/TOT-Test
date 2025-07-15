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
});
