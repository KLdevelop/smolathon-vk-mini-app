import { useState } from 'react';
import { Card, Div, Text, Title } from '@vkontakte/vkui';
import './DescriptionItem.scss';

interface DescriptionItemProps {
  description: string;
}

export const DescriptionItem = ({ description }: DescriptionItemProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Card mode="shadow">
      <Div>
        <Title style={{ color: 'var(--vkui--color_text_secondary)' }} className="descriptionTitle" level="3">
          ОПИСАНИЕ
        </Title>
        <Text className={` descriptionText ${showMore ? '' : 'descriptionTextHidden'}`}>{description}</Text>
        <Text
          style={{ color: 'var(--vkui--color_text_accent)' }}
          className="descriptionText"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Свернуть' : 'Показать всё'}
        </Text>
      </Div>
    </Card>
  );
};
