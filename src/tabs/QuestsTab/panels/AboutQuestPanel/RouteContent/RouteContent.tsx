import { Group, Div } from '@vkontakte/vkui';
import './RouteContent.scss';
import { Map, CardAttraction } from '@/components';

export const RouteContent = () => {
  return (
    <Group style={{ marginTop: '10px' }}>
      <Map width="100%" height="254px" />
      <Div style={{ display: 'grid', gap: '20px' }}>
        <CardAttraction num={1} title="Русская старина" type="Музей" address="ул. Тенишовой 7. Смоленск" />
        <CardAttraction num={2} title="Смоленск - щит России" type="Музей" address="3 Смоленск" />
        <CardAttraction num={3} title="Исторический музей" type="Музей" address="ул. Ленина 8 . Смоленск" />
        <CardAttraction num={4} title="Смоленская крепость" type="Замки" address=" Смоленск" />
      </Div>
    </Group>
  );
};
