import { Panel, View } from '@vkontakte/vkui';
import './AchievementsTab.scss';
import { TabProps } from '../TabProps';

export const AchievementsTab = ({ id }: TabProps) => {
  return (
    <View id={id} activePanel="main">
      <Panel id="main">Achievements Tab</Panel>
    </View>
  );
};
