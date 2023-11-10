import { Card, Div, Subhead } from '@vkontakte/vkui';
import { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export const CardTitle = ({ title, children }: Props) => {
  return (
    <Card mode="outline">
      <Div>
        <Subhead
          style={{
            color: 'var(--vkui--color_text_secondary)',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '18px',
            letterSpacing: '0.2px',
          }}
        >
          {title}
        </Subhead>
        {children}
      </Div>
    </Card>
  );
};
