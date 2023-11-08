import { View } from '@vkontakte/vkui';
import { TabProps } from '../TabProps';
import './QuestTab.scss';
import { EmptyPanel, QuestPanelIDs } from './panels';
import { useGetPanelForView } from '@vkontakte/vk-mini-apps-router';

export const QuestTab = ({ id }: TabProps) => {
  const activePanel = useGetPanelForView();

  return (
    <View nav={id} activePanel={activePanel ?? QuestPanelIDs.Empty}>
      <EmptyPanel id={QuestPanelIDs.Empty} />
    </View>
  );
};
