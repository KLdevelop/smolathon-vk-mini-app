import { Div, Title } from '@vkontakte/vkui';
import './AboutContent.scss';
import { ArticleLink, DescriptionItem, InfoItem } from '@/components';

interface AboutContentProps {
  questData: QuestData;
}

export const AboutContent = ({ questData }: AboutContentProps) => {
  return (
    <Div style={{ display: 'grid', gap: '20px' }}>
      <ArticleLink/>
      <Title>{questData.title}</Title>
      <Div style={{ padding: 0 }}>
        <img src={questData.img} alt="" style={{ width: '100%', height: '100%' }} />
      </Div>
      <DescriptionItem description={questData.description ?? ''} />
      <InfoItem />
    </Div>
  );
};
