import { Button, Group, IconButton, ModalPage, ModalPageHeader, Div} from '@vkontakte/vkui';
import { Icon24CancelOutline } from '@vkontakte/icons';
import { ModalProps } from '../ModalProps';
import { StickyFooter } from '@/components';

interface Props extends ModalProps {}

export const BossFightModal = ({ id, closeModal }: Props) => {
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
          Битва с боссом
        </ModalPageHeader>
      }
    >
      <Group>
        <Div>Вы правильно ввели кодовое слово, теперь вы можете начать битву с боссом</Div>
      </Group>
      <StickyFooter>
        <Button size="l" stretched onClick={onAcceptClick}>
          Начать битву
        </Button>
      </StickyFooter>
    </ModalPage>
  );
};
