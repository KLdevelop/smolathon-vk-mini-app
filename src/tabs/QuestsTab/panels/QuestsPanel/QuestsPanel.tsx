import { Button, Div, Panel, PanelHeader, Title } from '@vkontakte/vkui';
import './QuestsPanel.scss';
import { ModalIDs, TabHeader } from '@/components';
import { useState } from 'react';
import { QuestsPanelProps } from '../questsPanelProps';
import { QuestsPanelIDs } from '..';
import { Icon16DropdownOutline } from '@vkontakte/icons';
import { useAppSelector, useOpenModal } from '@/hooks';

export const QuestsPanel = ({ id, setActivePanel }: QuestsPanelProps) => {
  const tabs = ['Новые', 'Активные'];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { selectedCity } = useAppSelector((state) => state.city);
  const openCityModal = useOpenModal(ModalIDs.CityModal);

  return (
    <Panel id={id}>
      <PanelHeader separator={false}>
        <Button
          appearance="neutral"
          after={<Icon16DropdownOutline style={{ color: 'var(--vkui--color_text_accent_themed)' }} />}
          mode="tertiary"
          size="s"
          hasHover={false}
          onClick={openCityModal}
        >
          <Title level="1" normalize>
            {selectedCity || 'Выбрать город'}
          </Title>
        </Button>
      </PanelHeader>
      <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      <Div>
        <Button onClick={() => setActivePanel && setActivePanel(QuestsPanelIDs.AboutQuest)}>
          Открыть описание квеста
        </Button>
      </Div>
    </Panel>
  );
};
