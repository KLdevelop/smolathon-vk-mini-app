import { Checkbox } from '@vkontakte/vkui';

interface Props {
  value: string;
}

export const CheckELem = ({ value }: Props) => {
  return <Checkbox defaultChecked>{value}</Checkbox>;
};
