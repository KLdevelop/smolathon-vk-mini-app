import { Group, CardGrid } from '@vkontakte/vkui';
import './RouteContent.scss';
import { YanMap, CardAttraction } from '@/components';
import { getAllCoordinatesFromSteps } from '@/utils';

interface RouteContentProps {
  questData: QuestData;
}

export const RouteContent = ({ questData }: RouteContentProps) => {
  const { steps } = questData;
  console.log(getAllCoordinatesFromSteps(steps));
  return (
    <Group className="routeContent">
      <YanMap markers={getAllCoordinatesFromSteps(questData.steps)} />
      <CardGrid size="l" className="routeContent__attractions">
        {steps.map((step) => (
          <CardAttraction num={step.order} title={step.name} type={step.place_type} address={step.address} />
        ))}
      </CardGrid>
    </Group>
  );
};
