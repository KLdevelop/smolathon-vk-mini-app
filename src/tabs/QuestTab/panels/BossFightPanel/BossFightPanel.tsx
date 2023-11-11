import { Button, Card, Div, Panel, PanelHeader, PanelHeaderBack, Spacing } from '@vkontakte/vkui';
import { QuestPanelProps } from '../questPanelProps';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { CheckELem, HealthBar, MySnackbar, Question, RadioElem, StickyFooter, Timer } from '@/components';
import { InputElem } from '@/components';
import { ReactNode, useState } from 'react';
import { questions } from '@/components/Question/questions';

export const BossFightPanel = ({ id }: QuestPanelProps) => {
  const navigator = useRouteNavigator();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [snackbar,setSnackbar] = useState<null|ReactNode>(null) 
  const [bossHp,setBossHp] = useState(3) 
  const [currentHp,setCurrentHp] = useState(100) 

 
  const nextStep = () => {
    if (currentQuestion < 2) {
      setBossHp(bossHp-1)
      setSnackbar(<div></div>)
      setCurrentHp(currentHp-(currentHp/3))
      setCurrentQuestion(currentQuestion + 1);

    }
  };
  return (
    <Panel nav={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => navigator.back()} />}>Битва с боссом</PanelHeader>
      <Div>
        <Card mode="outline" style={{ display: 'flex', alignContent: 'center' }}>
          <Div style={{ display: 'flex' }}>
            <HealthBar type="user" u_name="Никита" hp={3} currentHp={100} />
            <Timer />
            <HealthBar type="boss" u_name="Босс" hp={bossHp} currentHp={currentHp} />
          </Div>
        </Card>
        <Spacing size={20} />
        <Question num={currentQuestion + 1} question={questions[currentQuestion].questions}>
          {questions[currentQuestion].type === 'input' && <InputElem />}
          {questions[currentQuestion].type === 'radio' &&
            questions[currentQuestion]?.elems?.map((i, ind) => <RadioElem key={ind} innerValue={i} outerValue={i} />)}
          {questions[currentQuestion].type === 'checkbox' &&
            questions[currentQuestion]?.elems?.map((i, ind) => <CheckELem key={ind} value={i} />)}
        </Question>
      </Div>
      <MySnackbar  status={true} setSnackbar={setSnackbar} snackbar={snackbar}/>
      <StickyFooter>
        <Button stretched size="l" onClick={nextStep}>
          Ответить на вопрос
        </Button>
      </StickyFooter>
    </Panel>
  );
};
