import { Card, Div, Headline, Text } from '@vkontakte/vkui';

interface InfoItemProps {
  duration: string;
  reward: string;
  type: string;
}

export const InfoItem = ({ duration, reward, type }: InfoItemProps) => {
  return (
    <Card mode="shadow">
      <Div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Headline>Прохождение</Headline>
        <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>{duration}</Text>
      </Div>
      <Div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Headline>Награда за квест</Headline>
        <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>{reward}</Text>
      </Div>
      <Div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Headline>Тип квеста</Headline>
        <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>{type}</Text>
      </Div>
    </Card>
  );
};
