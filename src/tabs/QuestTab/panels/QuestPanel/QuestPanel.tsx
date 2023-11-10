import { Panel, PanelHeader } from '@vkontakte/vkui';
import { QuestPanelProps } from '../questPanelProps';
import { Icon20HelpOutline } from '@vkontakte/icons';
import { TabHeader } from '@/components';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { RouteContent } from './RouteContent';

interface Props extends QuestPanelProps {
  activeQuest: QuestData | null;
}

export const QuestPanel = ({ id, activeQuest }: Props) => {
  const { tab: activeTabId } = useActiveVkuiLocation();
  const tabs = [
    {
      tabId: 'route',
      title: 'Маршрут',
      route: `/quest`,
    },
    {
      tabId: 'info',
      title: 'Квест',
      route: `/quest/info`,
    },
  ];

  return (
    <Panel nav={id}>
      <PanelHeader after={<Icon20HelpOutline />}>Квест</PanelHeader>
      <TabHeader activeTabId={activeTabId ?? 'route'} tabs={tabs} />
      {activeQuest && activeTabId === 'route' ? <RouteContent steps={activeQuest.steps} /> : null}
    </Panel>
  );
};
