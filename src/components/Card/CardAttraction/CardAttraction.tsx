import { Card, Counter, Div, Image, Text, Subhead } from '@vkontakte/vkui';
// import {  } from 'node_modules/@vkontakte/vkui/dist/index';
import Smolensk from '../../../data/Smolensk.png';
interface CardAttractionProps {
  num:number,
  title: string;
  type: string;
  address: string;
}

export const CardAttraction = ({num, title, type, address }: CardAttractionProps) => {
  return (
    <Card style={{ maxWidth: '360px',marginBottom:"3%" }}>
      <Div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-around' }}>
        <Counter mode="primary">{num}</Counter>
        <div>
          <div style={{ marginBottom: '6%' }}>
            <Subhead weight={2} level="1">{title}</Subhead>
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
