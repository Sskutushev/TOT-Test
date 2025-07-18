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
    const notifBox = notifWrapper.querySelector('.notificationcontainer');
    
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
  initTabs('.desk-tab', '.desk-tab-pane'); // Для Рабочего стола
  initTabs('.favorites-tab', '.favorites-tab-pane'); // Для Избранного
  initTabs('.calendar-tab', '.calendar-tab-pane'); // Для Календаря


  // --- Сохранение позиции скролла ---
  const scrollableElement = document.querySelector('main');
  if (scrollableElement) {
    const restoreScroll = () => {
      const scrollPos = sessionStorage.getItem('scrollPosition');
      if (scrollPos) {
        scrollableElement.scrollTop = parseInt(scrollPos, 10);
        sessionStorage.removeItem('scrollPosition');
      }
    };

    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('scrollPosition', scrollableElement.scrollTop);
    });
    
    // Пытаемся восстановить позицию после полной загрузки страницы
    window.addEventListener('load', restoreScroll);
  }

});
  //  ——— POPUP «Создать» ———
  const btnOpen  = document.querySelector('.button-small-withicon');
  const overlay  = document.getElementById('popup-overlay');
  const btnClose = document.getElementById('icon-close');

  if (btnOpen && overlay) {
    btnOpen.addEventListener('click', () => {
      overlay.classList.add('active');
    });
  }
  if (btnClose && overlay) {
    btnClose.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
    // закрытие кликом по фону
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  }

