import { Div } from '@vkontakte/vkui';
import './StickyFooter.scss';
import { ReactNode } from 'react';

interface StickyFooterProps {
  children: ReactNode;
}

export const StickyFooter = ({ children }: StickyFooterProps) => {
  return (
    <Div
      style={{
        position: 'sticky',
        bottom: 0,
        marginTop: 'auto',
        background: 'var(--vkui--color_background_content)',
      }}
    >
      {children}
    </Div>
  );
};
