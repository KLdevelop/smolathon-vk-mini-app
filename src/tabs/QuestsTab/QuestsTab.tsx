import { Panel, View } from '@vkontakte/vkui';
import './QuestsTab.scss';
import { TabProps } from '../TabProps';

export const QuestsTab = ({ id }: TabProps) => {
  return (
    <View id={id} activePanel="main">
      <Panel id="main">Quests Tab</Panel>
    </View>
  );
};
