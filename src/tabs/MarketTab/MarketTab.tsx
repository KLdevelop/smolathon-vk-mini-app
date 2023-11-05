import { Panel, View } from '@vkontakte/vkui';
import './MarketTab.scss';
import { TabProps } from '../TabProps';

export const MarketTab = ({ id }: TabProps) => {
  return (
    <View id={id} activePanel="main">
      <Panel id="main">Market Tab</Panel>
    </View>
  );
};
