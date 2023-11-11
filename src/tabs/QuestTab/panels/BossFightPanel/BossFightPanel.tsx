import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import { QuestPanelProps } from '../questPanelProps';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const BossFightPanel = ({ id }: QuestPanelProps) => {
  const navigator = useRouteNavigator();

  return (
    <Panel nav={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => navigator.back()} />}>Битва с боссом</PanelHeader>
    </Panel>
  );
};
