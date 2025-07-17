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
  initTabs('.popular.popular-education');
  initTabs('.popular.popular-invest');


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
  // Дропдаун-профиль
const profileMenu = document.getElementById('profile-menu');
const dropdown    = profileMenu.querySelector('.frame3953');

profileMenu.addEventListener('click', e => {
  e.stopPropagation();                 // не закрывать сразу
  profileMenu.classList.toggle('open');
});

// клик вне меню — закрыть
document.addEventListener('click', () => {
  profileMenu.classList.remove('open');
});
// ——— Дропдаун УВЕДОМЛЕНИЙ ———
  const notifWrapper = document.querySelector('.notification-wrapper');
  const bellBtn     = notifWrapper.querySelector('.button-bell');
  const notifBox    = notifWrapper.querySelector('.notificationcontainer');

  // клик по колокольчику — переключаем класс open
  bellBtn.addEventListener('click', e => {
    e.stopPropagation();                   // чтобы этот клик не дошёл до document
    notifWrapper.classList.toggle('open');
  });

  // клик в любой другой точке страницы — закрываем
  document.addEventListener('click', () => {
    notifWrapper.classList.remove('open');
  });

  // клик внутри самого выпадающего блока — не закрывать
  notifBox.addEventListener('click', e => {
    e.stopPropagation();
  });
  // === Marketplace: переключение вкладок ===
  document.querySelectorAll('.popular').forEach(section => {
    const tabs   = section.querySelectorAll('.popular-tabs .tab');
    const panes  = section.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // подсветить активный таб
        tabs.forEach(t => t.classList.toggle('tab--active', t === tab));
        // показать нужную панель
        panes.forEach(p => p.classList.toggle('active', p.id === tab.dataset.target));
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Находим главный скроллящийся элемент на странице
    const scrollableElement = document.querySelector('main');

    // Если на странице нет тега <main>, ничего не делаем
    if (!scrollableElement) {
        return;
    }

    // --- Функция восстановления скролла ---
    const restoreScroll = () => {
        const scrollPos = sessionStorage.getItem('scrollPosition');
        if (scrollPos) {
            // Прокручиваем сам элемент <main>, а не window
            scrollableElement.scrollTop = parseInt(scrollPos, 10);
            sessionStorage.removeItem('scrollPosition');
        }
    };

    // --- Сохранение позиции ---
    // Сохраняем позицию, когда пользователь уходит со страницы
    window.addEventListener('beforeunload', () => {
        // Получаем позицию скролла у элемента <main>, а не у window
        sessionStorage.setItem('scrollPosition', scrollableElement.scrollTop);
    });

    // --- Восстановление позиции ---
    // Пытаемся восстановить позицию сразу
    restoreScroll();
    
    // И на всякий случай, если контент грузится динамически,
    // следим за изменениями внутри <main>
    const observer = new MutationObserver(restoreScroll);
    observer.observe(scrollableElement, {
        childList: true, // следить за добавлением/удалением элементов
        subtree: true    // следить во всех вложенных элементах
    });

    // Чтобы наблюдатель не работал вечно, его можно отключить через некоторое время
    setTimeout(() => observer.disconnect(), 2000); // Отключаем через 2 секунды
});