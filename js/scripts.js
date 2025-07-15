document.addEventListener('DOMContentLoaded', () => {
  // Логотип ↔ index.html
  const logo = document.getElementById('totlogo');
  if (logo) {
    logo.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  // Подсветка активного пункта меню
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.frame3944 a').forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.field-small-search input.search-input');
  if (!searchInput) return;

  // при фокусе убираем placeholder
  searchInput.addEventListener('focus', function() {
    this.placeholder = '';
  });

  // при потере фокуса — возвращаем, если поле пустое
  searchInput.addEventListener('blur', function() {
    if (!this.value) {
      this.placeholder = 'Поиск…';
    }
  });

  // чтобы можно было кликнуть по любому месту контейнера и сфокусить инпут
  const searchContainer = document.querySelector('.field-small-search');
  searchContainer.addEventListener('click', () => {
    searchInput.focus();
  });
});
