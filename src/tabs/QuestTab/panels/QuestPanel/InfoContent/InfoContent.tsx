import { CardAttraction } from '@/components';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { CardGrid, Group } from '@vkontakte/vkui';

interface InfoContentProps {
  steps: Step[];
}

export const InfoContent = ({ steps }: InfoContentProps) => {
  const navigator = useRouteNavigator();

  const onCardClick = () => {
    navigator.push('/quest/stage');
  };

  return (
    <Group>
      <CardGrid size="l">
        {steps.map((step) => (
          <CardAttraction
            key={step.id}
            num={step.order}
            title={step.name}
            type={step.place_type}
            address={step.address}
            img={step.images[0] && step.images[0].sizes.m.url}
            status={step.status}
            onClick={onCardClick}
          />
        ))}
      </CardGrid>
    </Group>
  );
};
