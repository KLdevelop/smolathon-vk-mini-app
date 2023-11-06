import { Button, Panel, PanelHeader, Title } from '@vkontakte/vkui';
import './EmptyPanel.scss';
import { QuestPanelProps } from '../questPanelProps';
import { Icon56GameOutline } from '@vkontakte/icons';
import { useNavigate } from '@/hooks';
import { Tabs } from '@/tabs/tabs';

export const EmptyPanel = ({ id }: QuestPanelProps) => {
  const navigate = useNavigate();

  return (
    <Panel id={id} centered>
      <PanelHeader>Квест</PanelHeader>
      <Icon56GameOutline />
      <Title level="2">Начните квест</Title>
      <Button style={{ marginTop: '10px' }} size="m" onClick={() => navigate(Tabs.QuestsTab)}>
        На главную
      </Button>
    </Panel>
  );
};
