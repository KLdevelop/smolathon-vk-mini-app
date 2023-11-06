import { AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.scss';
import { Navigation } from './Navigation';
import { AppModalRoot } from './components';
import { useAppSelector } from './hooks';

function App() {
  const { activeModal } = useAppSelector((state) => state.modal);

  return (
    <AppRoot>
      <AppModalRoot />
      {activeModal === null && <Navigation />}
    </AppRoot>
  );
}

export default App;
