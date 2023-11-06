import { Group } from '@vkontakte/vkui';
import './RouteContent.scss';
import { Map } from '@/components';

export const RouteContent = () => {
  return (
    <Group style={{ marginTop: '10px' }}>
      <Map width="100%" height="254px" />
    </Group>
  );
};
