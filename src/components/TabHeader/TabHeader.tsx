import { Button, ButtonGroup, Div } from '@vkontakte/vkui';
import './TabHeader.scss';

interface Props {
  activeTab: string;
  tabs: string[];
  setActiveTab: (title: string) => void;
}

export const TabHeader = ({ tabs, activeTab, setActiveTab }: Props) => {
  return (
    <Div>
      <ButtonGroup stretched mode="horizontal" className="tabHeader" gap="s">
        {tabs.map((tab) => (
          <Button
            mode={activeTab === tab ? 'outline' : 'tertiary'}
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
