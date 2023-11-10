import { Div, Title } from '@vkontakte/vkui';
import './AboutContent.scss';
import { routeTypeToString } from '@/utils';
import { ArticleLink, DescriptionItem, InfoItem } from '@/components';

interface AboutContentProps {
  questData: QuestData;
}

export const AboutContent = ({ questData }: AboutContentProps) => {
  return (
    <Div style={{ display: 'grid', gap: '20px' }}>
      <ArticleLink />
      <Title>{questData.name}</Title>
      <Div style={{ padding: 0, borderRadius: '8px' }}>
        <img
          src={questData.preview.sizes.o.url}
          alt=""
          style={{ width: '100%', height: '100%', borderRadius: '8px' }}
        />
      </Div>
      <DescriptionItem description={questData.description ?? ''} />
      <InfoItem
        duration={`~ ${questData.duration} минут`}
        reward={`${questData.reward} смолкоинов`}
        type={routeTypeToString(questData.type)}
      />
    </Div>
  );
};
