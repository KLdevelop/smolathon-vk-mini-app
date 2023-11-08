import { Button, Group, IconButton, ModalPage, ModalPageHeader, Div, Headline, Input, Card } from '@vkontakte/vkui';
import { Icon24CancelOutline } from '@vkontakte/icons';
import { ModalProps } from '../ModalProps';
import { StickyFooter } from '@/components';

interface Props extends ModalProps {}

export const DebugModal = ({ id, closeModal }: Props) => {
  const onAcceptClick = () => {
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
            <Input placeholder="0" style={{ marginRight: '4%' }} />
            <Input placeholder="0" />
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
