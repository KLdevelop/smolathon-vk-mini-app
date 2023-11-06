import { createRoot } from 'react-dom/client';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

bridge.send('VKWebAppInit');

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ConfigProvider appearance="light">
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </Provider>,
);

// if (process.env.NODE_ENV === 'development') import('./eruda');
