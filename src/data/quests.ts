import smolensk from './Smolensk.png';

export const quests: Quests = {
  1: {
    id: 1,
    title: 'Смоленск - щит России',
    estimationTime: '~ 2 часа 30 минут',
    description:
      'Этот маршрут предлагает погрузиться в историю и героическое прошлое города Смоленск. Смоленск является одним из самых важных исторических... ',
    reward: '60 Смоилкоинов',
    type: 'Маршрутный',
    img: smolensk,
  },
} as const;
