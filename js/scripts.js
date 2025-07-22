document.addEventListener('DOMContentLoaded', () => {

  // ==================== ОБЩИЕ СКРИПТЫ ДЛЯ ВСЕХ СТРАНИЦ ====================

  // Клик по логотипу → на главную
  document.getElementById('totlogo')?.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  // Подсветка активного пункта в боковом меню
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.menupanel a').forEach(a => {
    if (a.getAttribute('href') === currentPage) {
      a.classList.add('active');
    }
  });

  // --- Дропдаун-меню профиля ---
  const profileMenu = document.getElementById('profile-menu');
  if (profileMenu) {
    profileMenu.addEventListener('click', e => {
      e.stopPropagation();
      profileMenu.classList.toggle('open');
    });
  }

  // --- Дропдаун уведомлений ---
  const notifWrapper = document.querySelector('.notification-wrapper');
  if (notifWrapper) {
    const bellBtn = notifWrapper.querySelector('.button-bell');
    const notifBox = notifWrapper.querySelector('.notification-dropdown');
    
    if (bellBtn) {
        bellBtn.addEventListener('click', e => {
            e.stopPropagation();
            notifWrapper.classList.toggle('open');
        });
    }

    if (notifBox) {
      notifBox.addEventListener('click', e => e.stopPropagation());
    }
  }

  // Закрытие всех дропдаунов по клику вне их
  document.addEventListener('click', () => {
    profileMenu?.classList.remove('open');
    notifWrapper?.classList.remove('open');
  });

  // --- Универсальный код для всех POPUP ОКОН ---
  const openPopupButtons = document.querySelectorAll('[data-popup-target]');
  const popupOverlays = document.querySelectorAll('.popup-overlay');
  
  openPopupButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const popupId = button.dataset.popupTarget;
      const popup = document.getElementById(popupId);
      if (popup) {
        popup.classList.add('active');
      }
    });
  });

  popupOverlays.forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay || e.target.closest('[data-close-popup]')) {
        overlay.classList.remove('active');
      }
    });
  });


  // ==================== ЛОГИКА ДЛЯ КОНКРЕТНЫХ СТРАНИЦ ====================

  // --- Логика табов ТОЛЬКО для стартовой страницы (index.html) ---
  // Находим оба блока с табами
  const educationSection = document.querySelector('.education-section');
  const investmentSection = document.querySelector('.investment-section');

  // Функция для инициализации одного блока табов
  function initializeTabIndex(section) {
    if (!section) return; // Если блока на странице нет, выходим

    const tabs = section.querySelectorAll('.tab');
    const panes = section.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Убираем active со всех табов и панелей ВНУТРИ ЭТОГО БЛОКА
        tabs.forEach(t => t.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));

        // Добавляем active кликнутому табу и нужной панели
        tab.classList.add('active');
        const targetPaneId = tab.dataset.target;
        section.querySelector(`#${targetPaneId}`)?.classList.add('active');
      });
    });
  }
  
  // Запускаем функцию для каждого блока на стартовой странице
  initializeTabIndex(educationSection);
  initializeTabIndex(investmentSection);


  // --- Универсальная функция для табов на ОСТАЛЬНЫХ страницах ---
  function initOtherPagesTabs(tabSelector, paneSelector) {
    const tabs = document.querySelectorAll(tabSelector);
    const panes = document.querySelectorAll(paneSelector);

    if (tabs.length > 0 && panes.length > 0) {
      tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
          e.preventDefault();

          tabs.forEach(t => t.classList.remove('active'));
          panes.forEach(p => p.classList.remove('active'));

          tab.classList.add('active');
          const targetPaneId = tab.dataset.tabTarget;
          document.getElementById(targetPaneId)?.classList.add('active');
        });
      });
    }
  }

  // Инициализация вкладок для других страниц
  initOtherPagesTabs('.desk-tab', '.desk-tab-pane');
  initOtherPagesTabs('.favorites-tab', '.favorites-tab-pane');
  initOtherPagesTabs('.calendar-tab', '.calendar-tab-pane');

});