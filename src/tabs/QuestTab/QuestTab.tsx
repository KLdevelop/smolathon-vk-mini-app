import { Panel, View } from '@vkontakte/vkui';
import { TabProps } from '../TabProps';
import './QuestTab.scss';
import { useState } from 'react';

export const QuestTab = ({ id }: TabProps) => {
  const [activePanel, setActivePanel] = useState('main');

  return (
    <View id={id} activePanel={activePanel}>
      <Panel id="main">Quest tab</Panel>
    </View>
  );
};
