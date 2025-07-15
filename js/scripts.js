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
