import { Card, Div, Separator, Spacing } from '@vkontakte/vkui';
import { ReactNode } from 'react';
interface Props {
  question: string;
  children: ReactNode;
  num:number
}
export const Question = ({ num,question, children }: Props) => {
  return (
    <Card mode="outline">
      <Div>
        <p
          style={{
            color: 'var(--light-text-secondary)',
            fontSize: '13px',
            fontWeight: 500,
            lineHeight: '16px',
            letterSpacing: '0.2px',
            textTransform: 'uppercase',
          }}
        >
          Вопрос {num}
        </p>
      </Div>
      <Separator />
      <Div>
        <div
          style={{
            color: 'var(--light-text-primary, #000)',
            fontSize: '15px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0.2px',
          }}
        >
          {question}
        </div>
        <Spacing size={24} />
        <div>{children}</div>
      </Div>
    </Card>
  );
};
