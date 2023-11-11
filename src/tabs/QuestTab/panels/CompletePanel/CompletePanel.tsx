import { Button, Panel, PanelHeader, Title, Text } from '@vkontakte/vkui';
import { QuestPanelProps } from '../questPanelProps';
import { Icon28CupOutline } from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const CompletePanel = ({ id }: QuestPanelProps) => {
  const navigator = useRouteNavigator();
  const onClick = () => navigator.push('/quest');

  return (
    <Panel nav={id} centered>
      <PanelHeader>Завершение</PanelHeader>
      <Icon28CupOutline width={56} height={56} />
      <Title>Вы завершили квест</Title>
      <Text style={{ marginTop: '5px', marginBottom: '7px' }}>
        Вы успешно прошли битву с боссом и заработали 60 смолкоинов
      </Text>
      <Button size="l" onClick={onClick}>
        На страницу квеста
      </Button>
    </Panel>
  );
};
