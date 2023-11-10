import { CardAddress, CardSchedule } from '@/components/Card';
import { DescriptionItem } from '@/components/Description';
import { MyGallery } from '@/components/MyGallery';
import { Icon24CancelOutline } from '@vkontakte/icons';
import { Div, IconButton, ModalPage, ModalPageHeader, Spacing, Title } from '@vkontakte/vkui';
import { ModalProps } from '../ModalProps';

interface Props extends ModalProps {
  step: Step;
}

export const AttractionModal = ({ id, closeModal, step }: Props) => {
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
          <Title level="2">{step.name}</Title>
        </ModalPageHeader>
      }
    >
      <Div>
        <MyGallery />
        <Spacing />
        <DescriptionItem description={step.description ?? ''} />
        <Spacing />
        <CardAddress street={step.address} phone={step.phone} email={step.email} web={step.website} />
        <Spacing />
        <CardSchedule />
        <Spacing />
      </Div>
    </ModalPage>
  );
};
