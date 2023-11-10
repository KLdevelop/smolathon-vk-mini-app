import { Button, Group, IconButton, ModalPage, ModalPageHeader, Div, Headline, Input, Card } from '@vkontakte/vkui';
import { Icon24CancelOutline } from '@vkontakte/icons';
import { ModalProps } from '../ModalProps';
import { StickyFooter } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useEffect, useState } from 'react';
import { setDebugData } from '@/redux/slices';

interface Props extends ModalProps {}

export const DebugModal = ({ id, closeModal }: Props) => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const { debugData } = useAppSelector((state) => state.debugModal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (debugData) {
      setLatitude(debugData.coordinates[0]);
      setLongitude(debugData.coordinates[1]);
    }
  }, [debugData]);

  const onAcceptClick = () => {
    dispatch(setDebugData({ coordinates: [latitude, longitude] }));
    closeModal();
  };

  return (
    <ModalPage
      id={id}
      onClose={closeModal}
      settlingHeight={100}
      hideCloseButton
      header={
        <ModalPageHeader
          before={
            <IconButton onClick={closeModal}>
              <Icon24CancelOutline />
            </IconButton>
          }
        >
          Debug
        </ModalPageHeader>
      }
    >
      <Group>
        <Div>
          <Headline style={{ color: 'var(--vkui--color_text_secondary)' }}>Новые координаты</Headline>
          <div style={{ display: 'flex', marginTop: '3%' }}>
            <Input
              type="number"
              style={{ marginRight: '4%' }}
              value={latitude === 0 ? '' : latitude}
              onChange={({ target: { value } }) => setLatitude(Number(value))}
            />
            <Input
              type="number"
              value={longitude === 0 ? '' : longitude}
              onChange={({ target: { value } }) => setLongitude(Number(value))}
            />
          </div>
          <Card mode="outline" style={{ marginTop: '3%' }}>
            <Div>Это действие остановит отслеживание геолокации в реальном времени до перезапуска приложения</Div>
          </Card>
        </Div>
      </Group>
      <StickyFooter>
        <Button size="l" stretched onClick={onAcceptClick}>
          Применить
        </Button>
      </StickyFooter>
    </ModalPage>
  );
};
