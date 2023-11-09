import { Group } from '@vkontakte/vkui';
import './RouteContent.scss';
import { Map } from '@/components';
import { YanMap } from '@/components/YanMap/YanMap';

export const RouteContent = () => {
  return (
    <Group style={{ marginTop: '10px' }}>
      <YanMap/>
    </Group>
  );
};
