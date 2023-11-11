import { Avatar, Progress, SimpleCell } from '@vkontakte/vkui';
import { Icon24Like } from '@vkontakte/icons';
import './HealthBar.scss';

interface Props {
  type: string;
  u_name: string;
  hp: number;
  currentHp:number
}

export const HealthBar = ({ type, u_name, hp,currentHp }: Props) => {
  return (
    <div className="healthBar">
      <div className="healthBar_user">
        {type == 'user' && (
          <SimpleCell className="healthBar_user_cell" before={<Avatar />}>
            <span className="healthBar_user_cell_name">{u_name} </span>
          </SimpleCell>
        )}
        {type !== 'user' && (
          <SimpleCell className="healthBar_user_cell_boss" after={<Avatar />}>
            <span className="healthBar_user_cell_boss_name">{u_name} </span>
          </SimpleCell>
        )}
      </div>
      <div className="healthBar_progress">
        <Progress height={20} value={currentHp} style={{ width: '110px' }} />
      </div>
      <div className="healthBar_hp">
        <Icon24Like className="healthBar_hp_like" />
        <span className="healthBar_hp_val">
          {hp}/{type == 'user' ? 3 : 7}
        </span>
      </div>
    </div>
  );
};
