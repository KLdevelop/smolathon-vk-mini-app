import { AppRoot, SplitLayout } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.scss';
import { Navigation } from './Navigation';
import { AppModalRoot } from './components';
import { root } from './navigations';
import { getUserId } from './utils';
import axios from 'axios';
import { apiUrl } from './api/apiUrl';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const id = getUserId();

    axios.post(`${apiUrl}accounts/create`, {
      account_id: id,
    });
  }, []);

  return (
    <AppRoot>
      <SplitLayout modal={<AppModalRoot />}>
        <Navigation id={root} />
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
