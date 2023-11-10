import { Radio } from '@vkontakte/vkui';

interface Props {
  innerValue: string;
  outerValue: string;
}

export const RadioElem = ({ innerValue, outerValue }: Props) => {
  return (
    <Radio name="radio" value={innerValue} defaultChecked>
      {outerValue}
    </Radio>
  );
};
