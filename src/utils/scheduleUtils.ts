export const dayTagToString = (tag: string): string => {
  switch (tag) {
    case 'Mon':
      return 'Понедельник';
    case 'Tue':
      return 'Вторник';
    case 'Wed':
      return 'Среда';
    case 'Thu':
      return 'Четверг';
    case 'Fri':
      return 'Пятница';
    case 'Sat':
      return 'Суббота';
    case 'Sun':
      return 'Воскресенье';
    default:
      return tag;
  }
};
