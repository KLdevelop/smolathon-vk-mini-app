import { Panel, PanelHeader } from '@vkontakte/vkui';
import { QuestPanelProps } from '../questPanelProps';

export const RiddlePanel = ({ id }: QuestPanelProps) => {
  return (
    <Panel nav={id}>
      <PanelHeader>Загадка</PanelHeader>
    </Panel>
  );
};
