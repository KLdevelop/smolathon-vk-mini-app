import { Button, Div, Panel, PanelHeader, Spacing, Title } from '@vkontakte/vkui';
import { QuestPanelProps } from '../questPanelProps';
import { Icon24HelpOutline } from '@vkontakte/icons';
import { CardTitle, StickyFooter, Task } from '@/components';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const QuestStagePanel = ({ id }: QuestPanelProps) => {
  const navigator = useRouteNavigator();
  const onTaskClick = () => navigator.push('/quest/riddle');

  return (
    <Panel nav={id}>
      <PanelHeader after={<Icon24HelpOutline />}>Этап квеста</PanelHeader>
      <Div>
        <Title level="2">Исторический музей</Title>
        <Spacing size={20} />
        <CardTitle title="ЗАДАНИЯ">
          <Task num={1} status={true} onClick={onTaskClick} />
          <Task num={2} status={false} />
          <Task num={3} status={true} />
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
