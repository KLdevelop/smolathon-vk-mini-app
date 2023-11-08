import { AppRoot, SplitLayout } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.scss';
import { Navigation } from './Navigation';
import { AppModalRoot } from './components';
import { root } from './navigation';

function App() {
  return (
    <AppRoot>
      <SplitLayout modal={<AppModalRoot />}>
        <Navigation id={root} />
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
