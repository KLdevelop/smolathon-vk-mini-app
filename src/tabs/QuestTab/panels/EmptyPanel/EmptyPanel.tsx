import { Button, Panel, PanelHeader, Title } from '@vkontakte/vkui';
import './EmptyPanel.scss';
import { QuestPanelProps } from '../questPanelProps';
import { Icon56GameOutline } from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const EmptyPanel = ({ id }: QuestPanelProps) => {
  const navigator = useRouteNavigator();

  return (
    <Panel nav={id} centered>
      <PanelHeader>Квест</PanelHeader>
      <Icon56GameOutline />
      <Title level="2">Начните квест</Title>
      <Button style={{ marginTop: '10px' }} size="m" onClick={() => navigator.push('/')}>
        На главную
      </Button>
    </Panel>
  );
};
