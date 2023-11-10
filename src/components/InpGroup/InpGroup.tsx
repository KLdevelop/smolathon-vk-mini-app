import { FormItem, FormLayoutGroup, Input } from '@vkontakte/vkui';

export const InpGroup = () => {
  return (
    <FormLayoutGroup mode="horizontal" segmented 
    style={{padding:"12px 0"}}
    >
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
