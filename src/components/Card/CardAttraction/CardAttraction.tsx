import { Card, Counter, Div, Image, Text, Title } from '@vkontakte/vkui';
import Smolensk from '../../../data/Smolensk.png';
interface CardAttractionProps {
  title: string;
  type: string;
  address: string;
}

export const CardAttraction = ({ title, type, address }: CardAttractionProps) => {
  return (
    <Card style={{ maxWidth: '360px' }}>
      <Div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-around' }}>
        <Counter mode="primary">1</Counter>
        <div>
          <div style={{ marginBottom: '10%' }}>
            <Title level="3">{title}</Title>
            <Text weight="2" style={{ color: 'var(--vkui--color_text_secondary)', fontSize: '13px' }}>
              {type}
            </Text>
          </div>
          <Text style={{ color: 'var(--vkui--color_text_secondary)', fontSize: '13px' }}>{address}</Text>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src={Smolensk} size={64} />
        </div>
      </Div>
    </Card>
  );
};
