import { FormItem, FormLayoutGroup, Input } from '@vkontakte/vkui';

export const InpGroup = () => {
  return (
    <FormLayoutGroup mode="horizontal" segmented>
      <FormItem>
        <Input />
      </FormItem>
      <FormItem>
        <Input />
      </FormItem>
      <FormItem>
        <Input />
      </FormItem>
    </FormLayoutGroup>
  );
};
