import { Panel, View } from '@vkontakte/vkui';
import './WikiTab.scss';
import { TabProps } from '../TabProps';

export const WikiTab = ({ id }: TabProps) => {
  return (
    <View id={id} activePanel="main">
      <Panel id="main">Wiki Tab</Panel>
    </View>
  );
};
