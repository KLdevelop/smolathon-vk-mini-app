import { Div, Group, Text, Title } from '@vkontakte/vkui';

export const InfoItem = () => {
  return (
    <Group>
      <Div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Title level="3">Прохождение</Title>
        <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>2 часа 30 минут</Text>
      </Div>
      <Div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Title level="3">Награда за квест</Title>
        <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>60 Смолкоинов</Text>
      </Div>
      <Div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Title level="3">Тип квеста</Title>
        <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>Маршрутный</Text>
      </Div>
    </Group>
  );
};
