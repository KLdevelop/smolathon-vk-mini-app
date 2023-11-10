import { ModalRoot } from '@vkontakte/vkui';
import { ModalIDs } from './modalIDs';
import { CityModal } from './CityModal';
import { useAppSelector, useCloseActiveModal } from '@/hooks';
import { DebugModal } from './DebugModal';
import { AttractionModal } from './AttractionModal/AttractionModal';
import { BossFightModal } from './BossFightModal';

export const AppModalRoot = () => {
  const { activeModal } = useAppSelector((state) => state.modal);
  const { step } = useAppSelector((state) => state.attractionModal);
  const closeActiveModal = useCloseActiveModal();

  return (
    <ModalRoot activeModal={activeModal}>
      <CityModal id={ModalIDs.CityModal} closeModal={closeActiveModal} />
      <DebugModal id={ModalIDs.DebugModal} closeModal={closeActiveModal} />
      <AttractionModal id={ModalIDs.AttractionModal} closeModal={closeActiveModal} step={step!} />
      <BossFightModal id={ModalIDs.BossFightModal} closeModal={closeActiveModal} />
    </ModalRoot>
  );
};
