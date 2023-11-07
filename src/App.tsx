import { AppRoot, SplitLayout } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.scss';
import { Navigation } from './Navigation';
import { AppModalRoot } from './components';

function App() {
  return (
    <AppRoot>
      <SplitLayout modal={<AppModalRoot />}>
        <Navigation />
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
