import './CircleCheckbox.scss';
import { Icon20CheckCircleOff, Icon20CheckCircleOn } from '@vkontakte/icons';

interface CircleCheckboxProps {
  selected?: boolean;
}

export const CircleCheckbox = ({ selected = false }: CircleCheckboxProps) => {
  return selected ? <Icon20CheckCircleOn /> : <Icon20CheckCircleOff />;
};
