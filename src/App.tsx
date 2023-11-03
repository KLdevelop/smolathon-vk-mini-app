import { AppRoot, View, Panel, PanelHeader } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.scss';

function App() {
  return (
    <AppRoot>
      <View activePanel="main">
        <Panel id="main" centered>
          <PanelHeader>Test VK Mini App</PanelHeader>
          Test VK Mini App
        </Panel>
      </View>
    </AppRoot>
  );
}

export default App;
