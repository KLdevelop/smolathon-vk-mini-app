import { AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.scss';
import { Navigation } from './Navigation';
import { AppModalRoot } from './components';

function App() {
  return (
    <AppRoot>
      <AppModalRoot />
      <Navigation />
    </AppRoot>
  );
}

export default App;
