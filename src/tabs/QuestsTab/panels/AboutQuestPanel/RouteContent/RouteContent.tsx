import { Group, CardGrid } from '@vkontakte/vkui';
import './RouteContent.scss';
import { YanMap, CardAttraction } from '@/components';
import { getAllCoordinatesFromSteps } from '@/utils';

interface RouteContentProps {
  questData: QuestData;
}

export const RouteContent = ({ questData }: RouteContentProps) => {
  const { steps } = questData;

  return (
    <Group className="routeContent">
      <YanMap markers={getAllCoordinatesFromSteps(questData.steps)} />
      <CardGrid size="l" className="routeContent__attractions">
        {steps.map((step) => (
          <CardAttraction
            key={step.id}
            num={step.order}
            title={step.name}
            type={step.place_type}
            address={step.address}
            img={step.images.length > 0 ? step.images[0].sizes.m.url : undefined}
          />
        ))}
      </CardGrid>
    </Group>
  );
};
