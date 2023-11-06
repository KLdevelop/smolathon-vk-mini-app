import { View } from '@vkontakte/vkui';
import { TabProps } from '../TabProps';
import './QuestTab.scss';
import { useQuestTabPanel } from '@/hooks';
import { EmptyPanel, QuestPanelIDs } from './panels';

export const QuestTab = ({ id }: TabProps) => {
  const [activePanel, setActivePanel] = useQuestTabPanel();

  return (
    <View id={id} activePanel={activePanel}>
      <EmptyPanel id={QuestPanelIDs.Empty} setActivePanel={setActivePanel} />
    </View>
  );
};
