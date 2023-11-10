import { Card, Counter, Image, Text, Subhead } from '@vkontakte/vkui';
import Smolensk from '@/data/Smolensk.png';
import './CardAttraction.scss';
import { StatusBlock } from './StatusBlock';

interface CardAttractionProps {
  status:null|string,
  num: number;
  title: string;
  type: string;
  address: string;
}

export const CardAttraction = ({ num, title, type, address , status=null}: CardAttractionProps) => {
  return (
    <Card className="cardAttraction">
      <div className="cardAttraction__leftGroup">
        <Counter mode="primary">{num}</Counter>
        <div className="cardAttraction__content">
          <div className="cardAttraction__content__titleBlock">
            <Subhead weight="3" className="cardAttraction__content__title">
              {title}
            </Subhead>
            <Subhead weight="2" className="cardAttraction__content__type">
              {type}
            </Subhead>
          </div>
          <Text className="cardAttraction__content__address">{address}</Text>
        </div>
      </div>
      <div className="cardAttraction__image">
       {status&& <StatusBlock status={status}/>}
        <Image src={Smolensk} size={72} />
      </div>
    </Card>
  );
};
