import { Icon28CheckCircleFill } from '@vkontakte/icons';
import { Icon24ChevronRightSmallOutline } from '@vkontakte/icons';
import { Cell, Counter } from '@vkontakte/vkui';
import './Task.scss';

interface Props {
  num: number;
  status: boolean;
  onClick?: () => void;
}

export const Task = ({ num, status, onClick }: Props) => {
  return (
    <div className="task">
      {status ? (
        <Counter mode="primary">{num}</Counter>
      ) : (
        <Cell className="task_cell">
          <Icon28CheckCircleFill />
        </Cell>
      )}
      <div className="task_title">
        В битвах и сраженьях кровью веяло, Много солдат отважных уходило. Но один боец остался живой, И его историю с QR
      </div>
      <Cell className="task_ico" onClick={onClick}>
        <Icon24ChevronRightSmallOutline />
      </Cell>
    </div>
  );
};
