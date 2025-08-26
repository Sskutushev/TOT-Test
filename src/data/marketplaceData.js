export const educationProducts = [
  {
    id: 1, type: 'course', imageUrl: '/img/investment-course-promo.svg', rating: 4.8, reviews: 120, 
    title: 'Умный инвестор в криптовалютах', 
    tags: [{text: 'Курс', modifier: 'tag--course'}, {text: 'Нач', modifier: 'tag--level'}, {text: '1 мес', modifier: 'tag--time'}],
    description: 'Полный курс по основам крипто-инвестирования, от блокчейна до анализа рынка.',
    price: 567
  },
  {
    id: 2, type: 'webinar', imageUrl: '/img/investment-course-promo.svg', rating: 4.9, reviews: 85, 
    title: 'Торговые стратегии 2025', 
    tags: [{text: 'Вебинар', modifier: 'tag--webinar'}, {text: 'Про', modifier: 'tag--level'}, {text: '3 ч', modifier: 'tag--time'}],
    description: 'Обзор и применение продвинутых торговых стратегий на текущем рынке.',
    price: 99
  },
  {
    id: 3, type: 'consult', imageUrl: '/img/investment-course-promo.svg', rating: 5.0, reviews: 45, 
    title: 'Личная консультация по портфелю', 
    tags: [{text: 'Консульт', modifier: 'tag--consult'}, {text: 'Все', modifier: 'tag--level'}, {text: '1 ч', modifier: 'tag--time'}],
    description: 'Персональный разбор вашего инвестиционного портфеля и рекомендации.',
    price: 250
  },
];

export const investProducts = [
  {
    id: 1, type: 'fund', label: 'ОПИФ', currency: 'EUR', asset: 'Облигации', growthValue: '+20,69%', growthPeriod: 'Всё время',
    chartUrl: '/img/Chart Container.svg', rating: 4.5, reviews: 150, title: 'Еврооблигации',
    recommendedTerm: 'от 2 лет', riskLevel: 'Низкий'
  },
  {
    id: 2, type: 'strategy', label: 'Автослед.', currency: 'USD', asset: 'Акции', growthValue: '+45,12%', growthPeriod: 'За год',
    chartUrl: '/img/Chart Container (1).svg', rating: 4.9, reviews: 95, title: 'Технологический сектор США',
    recommendedTerm: 'от 1 года', riskLevel: 'Высокий'
  },
  {
    id: 3, type: 'moex', label: 'Биржа', currency: 'RUB', asset: 'Акции', growthValue: '+15,5%', growthPeriod: 'За год',
    chartUrl: '/img/Chart Container.svg', rating: 4.2, reviews: 210, title: 'Голубые фишки РФ',
    recommendedTerm: 'от 3 лет', riskLevel: 'Средний'
  },
];
