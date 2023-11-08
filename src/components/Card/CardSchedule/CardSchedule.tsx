import { Card, Div, Headline, Text, Title } from '@vkontakte/vkui';

export const CardSchedule = () => {
  return (
    <Card mode="outline">
      <Div>
        <Title level="3" style={{ color: 'var(--vkui--color_text_secondary)' }}>
          РАСПИСАНИЕ
        </Title>
      </Div>
      <Div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Headline>ВТ - ЧТ</Headline>
        <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>10:00 – 18:00</Text>
      </Div>
      <Div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Headline>ПТ</Headline>
        <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>10:00 – 17:00</Text>
      </Div>
      <Div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Headline>СБ - ВС</Headline>
        <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>10:00 – 18:00</Text>
      </Div>
    </Card>
  );
};
