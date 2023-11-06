import { Card, Div, Headline, Text } from '@vkontakte/vkui';

export const InfoItem = () => {
  return (
    <Card mode="shadow">
      <Div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Headline>Прохождение</Headline>
        <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>2 часа 30 минут</Text>
      </Div>
      <Div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Headline>Награда за квест</Headline>
        <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>60 Смолкоинов</Text>
      </Div>
      <Div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Headline>Тип квеста</Headline>
        <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>Маршрутный</Text>
      </Div>
    </Card>
  );
};
