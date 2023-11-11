import { Div, Group } from '@vkontakte/vkui';
import { StartGameBanner, YanMap } from '@/components';

interface RouteContentProps {
  steps: Step[];
}

export const RouteContent = ({ steps }: RouteContentProps) => {
  return (
    <Group style={{ height: '50vh' }}>
      <div style={{ height: '100%', padding: 0 }}>
        <YanMap steps={steps} />
      </div>
      <Div>
        <StartGameBanner />
      </Div>
    </Group>
  );
};
