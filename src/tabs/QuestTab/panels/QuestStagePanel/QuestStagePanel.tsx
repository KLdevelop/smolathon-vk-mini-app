import { Panel, PanelHeader } from '@vkontakte/vkui';
import { QuestPanelProps } from '../questPanelProps';
import { Icon24HelpOutline } from '@vkontakte/icons';

export const QuestStagePanel = ({ id }: QuestPanelProps) => {
  return (
    <Panel nav={id}>
      <PanelHeader after={<Icon24HelpOutline />}>Этап квеста</PanelHeader>
    </Panel>
  );
};
