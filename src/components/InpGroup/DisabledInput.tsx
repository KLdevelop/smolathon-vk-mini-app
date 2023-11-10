import { Input } from '@vkontakte/vkui';

interface Props {
  value: string;
}
export const DisabledInput = ({ value }: Props) => {
  return (
    <Input
      disabled
      defaultValue={value}
      style={{
        borderRadius: '8px',
        maxWidth: '90px',
        height: '100%',
        marginTop:'8px'
      }}
    />
  );
};
