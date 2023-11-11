import { StickyFooter } from '@/components';
import { Button, Card, Div, Panel, PanelHeader } from '@vkontakte/vkui';
import { QuestPanelProps } from '../questPanelProps';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const RiddlePanel = ({ id }: QuestPanelProps) => {
  const navigator = useRouteNavigator();

  const onButtonClick = () => {
    navigator.push('/quest/bossfight');
  };

  return (
    <Panel nav={id}>
      <PanelHeader>Загадка</PanelHeader>
      <Div>
        <Card mode="shadow">
          <Div>
            В битвах и сраженьях, кровью веяло, Много солдат отважных уходило. Но один боец остался живой, И его историю
            с QR кодом ты найди. В музее военном, где подвиги хранятся, Солдатская мудрость и тайны раскрываются.
          </Div>
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
