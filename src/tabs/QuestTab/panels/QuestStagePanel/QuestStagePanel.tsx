import { Button, Div, Panel, PanelHeader, Spacing, Title } from '@vkontakte/vkui';
import { QuestPanelProps } from '../questPanelProps';
import { Icon24HelpOutline } from '@vkontakte/icons';
import { CardTitle, StickyFooter, Task } from '@/components';

export const QuestStagePanel = ({ id }: QuestPanelProps) => {
  return (
    <Panel nav={id}>
      <PanelHeader after={<Icon24HelpOutline />}>Этап квеста</PanelHeader>
      <Div>
        <Title level="2">Исторический музей</Title>
        <Spacing size={20} />
        <CardTitle title="ЗАДАНИЯ">
          <Task num={1} status={true} />
          <Task num={2} status={false} />
          <Task num={3} status={true} />
        </CardTitle>
      </Div>
      <StickyFooter>
        <Button size="l" stretched>
          Введите кодовое слово
        </Button>
      </StickyFooter>
    </Panel>
  );
};
