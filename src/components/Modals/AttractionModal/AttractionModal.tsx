import { CardAddress, CardSchedule } from '@/components/Card';
import { DescriptionItem } from '@/components/Description';
import { MyGallery } from '@/components/MyGallery';
import { Icon24CancelOutline } from '@vkontakte/icons';
import { Div, IconButton, ModalPage, ModalPageHeader, Spacing, Title } from '@vkontakte/vkui';
import { ModalProps } from '../ModalProps';

interface Props extends ModalProps {}

export const AttractionModal = ({ id, closeModal }: Props) => {
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
          <Title level="2">Смоленск - щит России</Title>
        </ModalPageHeader>
      }
    >
      <Div>
        <MyGallery />
        <Spacing />
        <DescriptionItem description="Смоленская крепостная стена – памятник русского оборонительного зодчества, одна из крупнейших крепостей мира, символ российской..." />
        <Spacing />
        <CardAddress
          street="ул. Барклая-Де-Толли 7, Смоленск"
          phone="+7 4812 33 95 85"
          email="museum@smolkrepost.ru"
          web="https://smolkrepost.ru"
        />
        <Spacing />
        <CardSchedule />
        <Spacing />
      </Div>
    </ModalPage>
  );
};
