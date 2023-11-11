import { Button, Card, Div, FixedLayout, Panel, PanelHeader, PanelHeaderBack, Spacing } from '@vkontakte/vkui';
import { QuestPanelProps } from '../questPanelProps';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { HealthBar, Question, StickyFooter, Timer } from '@/components';
import { InputElem } from '@/components';

export const BossFightPanel = ({ id }: QuestPanelProps) => {
  const navigator = useRouteNavigator();

  return (
    <Panel nav={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => navigator.back()} />}>Битва с боссом</PanelHeader>
      <Div>
        <Card mode="outline" style={{ display: 'flex', alignContent: 'center' }}>
          <Div style={{ display: 'flex' }}>
            <HealthBar type="user" u_name="Никита" hp={3} currentHp={100} />
            <Timer />
            <HealthBar type="boss" u_name="Босс" hp={5} currentHp={60} />
          </Div>
        </Card>
        <Spacing size={20} />
        <Question
          num={1}
          question="Расположите в хронологической последовательности исторические события. Запишите цифры, которыми обозначены исторические события, в правильной последовательности.
 1. падение Византии;
 2. битва на реке Сить;
 3. Грюнвальдская битва."
        >
          <InputElem />
        </Question>
      </Div>
      <StickyFooter>
        <Button stretched size="l">
          Ответить на вопрос
        </Button>
      </StickyFooter>
    </Panel>
  );
};
