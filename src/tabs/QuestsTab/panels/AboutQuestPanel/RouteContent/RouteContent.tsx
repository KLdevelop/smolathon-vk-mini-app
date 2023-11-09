import { Group, CardGrid } from '@vkontakte/vkui';
import './RouteContent.scss';
import { YanMap, CardAttraction } from '@/components';

export const RouteContent = () => {
  return (
    <Group className="routeContent">
      <YanMap />
      <CardGrid size="l" className="routeContent__attractions">
        <CardAttraction num={1} title="Русская старина" type="Музей" address="ул. Тенишовой 7. Смоленск" />
        <CardAttraction num={2} title="Смоленск - щит России" type="Музей" address="3 Смоленск" />
        <CardAttraction num={3} title="Исторический музей" type="Музей" address="ул. Ленина 8 . Смоленск" />
        <CardAttraction num={4} title="Смоленская крепость" type="Замки" address=" Смоленск" />
      </CardGrid>
    </Group>
  );
};
