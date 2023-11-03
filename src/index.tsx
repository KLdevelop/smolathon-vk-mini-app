import ReactDOM from 'react-dom/client';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import App from './App.tsx';

bridge.send('VKWebAppInit');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
);

if (process.env.NODE_ENV === 'development') import('./eruda');
