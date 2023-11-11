import { StickyFooter } from '@/components';
import { Button, Card, Div, Panel, PanelHeader } from '@vkontakte/vkui';
import { QuestPanelProps } from '../questPanelProps';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { useGetRiddlesListQuery } from '@/api/riddlesApi';
import { useAppSelector } from '@/hooks';

export const RiddlePanel = ({ id }: QuestPanelProps) => {
  const { description } = useAppSelector((state) => state.riddle);
  const navigator = useRouteNavigator();
  const stepId = '51219208-8c66-4320-ac02-d37f7998ef63';
  const { data: riddlesResponse } = useGetRiddlesListQuery(stepId);

  console.log(riddlesResponse);

  const onButtonClick = () => {
    navigator.push('/quest/bossfight');
  };

  return (
    <Panel nav={id}>
      <PanelHeader>Загадка</PanelHeader>
      <Div>
        <Card mode="shadow">
          <Div>{description}</Div>
        </Card>
      </Div>
      <StickyFooter>
        <Button stretched size="l" onClick={onButtonClick}>
          Сканировать QR код и сразиться с боссом
        </Button>
      </StickyFooter>
    </Panel>
  );
};
