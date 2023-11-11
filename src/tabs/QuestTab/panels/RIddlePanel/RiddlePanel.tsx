import { StickyFooter } from '@/components';
import { Button, Card, Div, Panel, PanelHeader } from '@vkontakte/vkui';
import { QuestPanelProps } from '../questPanelProps';

export const RiddlePanel = ({ id }: QuestPanelProps) => {
  return (
    <Panel nav={id}>
      <PanelHeader>Загадка</PanelHeader>
      <Div>
        <Card mode="outline">
          <Div>
            В битвах и сраженьях, кровью веяло, Много солдат отважных уходило. Но один боец остался живой, И его историю
            с QR кодом ты найди. В музее военном, где подвиги хранятся, Солдатская мудрость и тайны раскрываются.
          </Div>
        </Card>
      </Div>
      <StickyFooter>
        <Button stretched size="l">
          Сканировать QR код
        </Button>
      </StickyFooter>
    </Panel>
  );
};
