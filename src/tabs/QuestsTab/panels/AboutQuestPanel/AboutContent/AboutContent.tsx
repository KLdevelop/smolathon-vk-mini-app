import { Div, Title } from '@vkontakte/vkui';
import './AboutContent.scss';
import { CardSchedule, DescriptionItem, InfoItem } from '@/components';

interface AboutContentProps {
  questData: QuestData;
}

export const AboutContent = ({ questData }: AboutContentProps) => {
  return (
    <Div style={{ display: 'grid', gap: '20px' }}>
      <Title>{questData.title}</Title>
      <Div style={{ padding: 0 }}>
        <img src={questData.img} alt="" style={{ width: '100%', height: '100%' }} />
      </Div>
      <DescriptionItem description={questData.description ?? ''} />
      <CardSchedule />
      <InfoItem />
    </Div>
  );
};
