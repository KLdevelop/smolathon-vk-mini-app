import { Card, Counter, Image, Text, Subhead } from '@vkontakte/vkui';
import './CardAttraction.scss';
import { StatusBlock } from './StatusBlock';
import { useOpenModal } from '@/hooks';
import { ModalIDs } from '@/components';

interface CardAttractionProps {
  status?: null | string;
  num: number;
  title: string;
  type: string;
  address: string;
  img?: string;
}

export const CardAttraction = ({ num, title, type, address, img, status = null }: CardAttractionProps) => {
  const openAttractionModal = useOpenModal(ModalIDs.AttractionModal);

  return (
    <Card className="cardAttraction" onClick={openAttractionModal}>
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
        {status && <StatusBlock status={status} />}
        <Image src={img} size={72} />
      </div>
    </Card>
  );
};
