import { Button, ButtonGroup, Div } from '@vkontakte/vkui';
import './TabHeader.scss';

interface Props {
  activeTab: string;
  tabs: string[];
  setActiveTab: (title: string) => void;
}

export const TabHeader = ({ tabs, activeTab, setActiveTab }: Props) => {
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
