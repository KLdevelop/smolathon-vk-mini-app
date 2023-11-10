import { Button, Div, Headline, Panel, PanelHeader, Title } from '@vkontakte/vkui';
import './EmptyPanel.scss';
import { QuestPanelProps } from '../questPanelProps';
import { Icon56GameOutline } from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const EmptyPanel = ({ id }: QuestPanelProps) => {
  const navigator = useRouteNavigator();

  return (
    <Panel nav={id} centered className="EmptyPanel">
      <PanelHeader>Квест</PanelHeader>
      <Div className="EmptyPanel__content">
        <Icon56GameOutline />
        <Title level="2">Начните квест</Title>
        <Headline className="EmptyPanel__subtitle">Для начала выберите и начните квест на главной странице</Headline>
        <Button style={{ marginTop: '10px' }} size="m" onClick={() => navigator.push('/')}>
          На главную
        </Button>
      </Div>
    </Panel>
  );
};
