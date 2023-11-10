import { Icon28CheckCircleFill } from '@vkontakte/icons';
import { Icon24ChevronRightSmallOutline } from '@vkontakte/icons';
import { Cell, Counter } from '@vkontakte/vkui';
import './Task.scss';
export const Task = () => {
  return (
    <div className="task">
      {true ? <Counter mode="primary">1</Counter> : <Icon28CheckCircleFill />}
      <div className="task_title">
        В битвах и сраженьях кровью веяло, Много солдат отважных уходило. Но один боец остался живой, И его историю с QR
      </div>
      <Cell className="task_ico">
        <Icon24ChevronRightSmallOutline />
      </Cell>
    </div>
  );
};
