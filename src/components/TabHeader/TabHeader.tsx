import { Button, ButtonGroup, Div } from '@vkontakte/vkui';
import './TabHeader.scss';

interface Props<TabID extends string> {
  activeTab: TabID;
  tabs: TabID[];
  setActiveTab: (title: TabID) => void;
}

export const TabHeader = <TabID extends string>({ tabs, activeTab, setActiveTab }: Props<TabID>) => {
  return (
    <Div style={{ background: 'var(--vkui--color_background_content)' }}>
      <ButtonGroup stretched mode="horizontal" className="tabHeader" gap="s">
        {tabs.map((tab) => (
          <Button
            key={tab}
            mode={activeTab === tab ? 'outline' : 'tertiary'}
            appearance={activeTab === tab ? 'accent' : 'neutral'}
            onClick={() => setActiveTab(tab)}
            size="m"
            stretched
          >
            {tab}
          </Button>
        ))}
      </ButtonGroup>
    </Div>
  );
};
