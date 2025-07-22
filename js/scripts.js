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

  // --- УНИВЕРСАЛЬНЫЙ КОД ДЛЯ ВСЕХ POPUP ОКОН ---
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

  // --- Логика для страниц с НЕСКОЛЬКИМИ независимыми блоками табов (Главная, Маркетплейс) ---
  function initializeIndependentTabs(section) {
    if (!section) return;

    const tabs = section.querySelectorAll('.tab');
    const panes = section.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active', 'tab--active'));
        panes.forEach(p => p.classList.remove('active'));

        tab.classList.add('active', 'tab--active');
        const targetPaneId = tab.dataset.target;
        section.querySelector(`#${targetPaneId}`)?.classList.add('active');
      });
    });
  }
  
  document.querySelectorAll('.education-section, .investment-section, .popular--education, .popular--invest').forEach(section => {
    initializeIndependentTabs(section);
  });


  // --- Универсальная функция для страниц с ОДНИМ блоком табов ---
  function initSingleTabs(tabSelector, paneSelector) {
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
  initSingleTabs('.desk-tab', '.desk-tab-pane');
  initSingleTabs('.favorites-tab', '.favorites-tab-pane');
  initSingleTabs('.calendar-tab', '.calendar-tab-pane');
  initSingleTabs('.product-tab', '.product-tab-pane'); // <-- ВОТ ЭТА СТРОКА ВСЁ ИСПРАВИТ
});