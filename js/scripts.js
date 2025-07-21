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
  
  // Открытие по клику на кнопку
  openPopupButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault(); // На случай, если кнопка является ссылкой
      const popupId = button.dataset.popupTarget;
      const popup = document.getElementById(popupId);
      if (popup) {
        popup.classList.add('active');
      }
    });
  });

  // Закрытие по клику на крестик ИЛИ на фон
  popupOverlays.forEach(overlay => {
    overlay.addEventListener('click', e => {
      // Закрываем, если кликнули на сам фон ИЛИ на элемент с атрибутом data-close-popup
      if (e.target === overlay || e.target.closest('[data-close-popup]')) {
        overlay.classList.remove('active');
      }
    });
  });

  // ==================== ЛОГИКА ДЛЯ КОНКРЕТНЫХ СТРАНИЦ ====================

  // --- Универсальная функция для переключения вкладок ---
  function initTabs(tabSelector, paneSelector) {
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

  // Инициализация вкладок для разных страниц
  initTabs('.desk-tab', '.desk-tab-pane');
  initTabs('.favorites-tab', '.favorites-tab-pane');
  initTabs('.calendar-tab', '.calendar-tab-pane');

});