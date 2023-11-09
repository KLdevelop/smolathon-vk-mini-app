import { Button, ButtonGroup, Div } from '@vkontakte/vkui';
import './TabHeader.scss';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

interface Props {
  activeTabId: string;
  tabs: {
    tabId: string;
    title: string;
    route: string;
  }[];
}

export const TabHeader = ({ tabs, activeTabId }: Props) => {
  const navigator = useRouteNavigator();

  return (
    <Div style={{ background: 'var(--vkui--color_background_content)' }}>
      <ButtonGroup stretched mode="horizontal" className="tabHeader" gap="s">
        {tabs.map(({ tabId, title, route }) => (
          <Button
            key={route}
            mode={activeTabId === tabId ? 'outline' : 'tertiary'}
            appearance={activeTabId === tabId ? 'accent' : 'neutral'}
            onClick={() => navigator.push(route)}
            size="m"
            stretched
          >
            {title}
          </Button>
        ))}
      </ButtonGroup>
    </Div>
  );
};
