import { dayTagToString } from '@/utils';
import { Card, Div, Headline, Text, Title } from '@vkontakte/vkui';

interface CardScheduleProps {
  schedule: Schedule[];
}

export const CardSchedule = ({ schedule }: CardScheduleProps) => {
  return (
    <Card mode="outline">
      <Div>
        <Title level="3" style={{ color: 'var(--vkui--color_text_secondary)' }}>
          РАСПИСАНИЕ
        </Title>
      </Div>
      {schedule.map((scheduleItem) => (
        <Div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Headline>{`${dayTagToString(scheduleItem.week_day)}`}</Headline>
          <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>{`${scheduleItem.from_to}`}</Text>
        </Div>
      ))}
    </Card>
  );
};
