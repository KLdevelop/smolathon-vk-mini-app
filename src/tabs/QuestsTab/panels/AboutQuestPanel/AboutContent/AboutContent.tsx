import { Div, Title } from '@vkontakte/vkui';
import './AboutContent.scss';

interface AboutContentProps {
  title: string;
}

export const AboutContent = ({ title }: AboutContentProps) => {
  return (
    <Div>
      <Title>{title}</Title>
    </Div>
  );
};
