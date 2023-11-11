import { Button, Card, Text } from '@vkontakte/vkui';
import './StartGameBanner.scss';
import { Icon28PlaceOutline } from '@vkontakte/icons';
import { useAppSelector } from '@/hooks';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const StartGameBanner = () => {
  const { markers, debugData } = useAppSelector((state) => state.debugModal);
  const navigator = useRouteNavigator();

  if (!debugData) return null;

  const userCoordinates = debugData.coordinates;
  const currentMarker = markers.find((marker) => marker[0] === userCoordinates[0] && marker[1] === userCoordinates[1]);

  const onNavigateClick = () => {
    navigator.push('/quest/info');
  };

  if (currentMarker)
    return (
      <Card mode="shadow" className="StartGameBanner">
        <Icon28PlaceOutline />
        <Text>Вы дошли до места квеста можете начать игру</Text>
        <Button mode="tertiary" size="s" className="StartGameBanner__navigate" onClick={onNavigateClick}>
          Перейти
        </Button>
      </Card>
    );

  return null;
};
