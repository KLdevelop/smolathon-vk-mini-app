import { Button, Div, Panel, PanelHeader, Spacing, Title } from '@vkontakte/vkui';
import { QuestPanelProps } from '../questPanelProps';
import { Icon24HelpOutline } from '@vkontakte/icons';
import { CardTitle, StickyFooter, Task } from '@/components';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { useGetRiddlesListQuery } from '@/api';
import { useAppDispatch } from '@/hooks';
import { riddleActions } from '@/redux/slices';

export const QuestStagePanel = ({ id }: QuestPanelProps) => {
  const navigator = useRouteNavigator();
  const dispatch = useAppDispatch();
  const onTaskClick = (riddle: Riddle) => {
    dispatch(riddleActions.setDescription(riddle.description));
    navigator.push('/quest/riddle');
  };
  const stepId = '51219208-8c66-4320-ac02-d37f7998ef63';
  const { data: riddlesResponse } = useGetRiddlesListQuery(stepId);
  const riddles = riddlesResponse?.result ?? [];

  return (
    <Panel nav={id}>
      <PanelHeader after={<Icon24HelpOutline />}>Этап квеста</PanelHeader>
      <Div>
        <Title level="2">Исторический музей</Title>
        <Spacing size={20} />
        <CardTitle title="ЗАДАНИЯ">
          {riddles.map((riddle, i) => (
            <Task
              key={riddle.id}
              num={i + 1}
              status={true}
              description={riddle.description}
              onClick={() => onTaskClick(riddle)}
            />
          ))}
        </CardTitle>
      </Div>
      <StickyFooter>
        <Button size="l" stretched>
          Решить загадку{/* Введите кодовое слово */}
        </Button>
      </StickyFooter>
    </Panel>
  );
};
