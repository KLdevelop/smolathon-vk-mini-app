import { Task } from '@/components/Task';
import { Card, Div, Headline } from '@vkontakte/vkui';

export const CardTask = () => {
  return (
    <Card mode="shadow">
      <Div>
        <Headline level="1" style={{ color: 'var(--vkui--color_text_secondary)' }}>
          ЗАДАНИЯ
        </Headline>
      </Div>
      <Div>
        <Task />
        <Task />
        <Task />
      </Div>
    </Card>
  );
};
