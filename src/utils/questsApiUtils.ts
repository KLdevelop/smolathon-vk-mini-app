export const routeTypeToString = (routeType: string): string => {
  switch (routeType) {
    case 'route':
      return 'Маршрутный квест';
    default:
      return routeType;
  }
};
