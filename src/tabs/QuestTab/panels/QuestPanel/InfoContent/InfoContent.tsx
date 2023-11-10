import { CardAttraction } from '@/components';
import { CardGrid, Group } from '@vkontakte/vkui';

interface InfoContentProps {
  steps: Step[];
}

export const InfoContent = ({ steps }: InfoContentProps) => {
  return (
    <Group>
      <CardGrid size="l">
        {steps.map((step) => (
          <CardAttraction
            key={step.id}
            num={step.order}
            title={step.name}
            type={step.place_type}
            address={step.address}
            status={step.status}
          />
        ))}
      </CardGrid>
    </Group>
  );
};
