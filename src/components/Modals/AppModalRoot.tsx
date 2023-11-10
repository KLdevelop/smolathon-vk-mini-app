import { ModalRoot } from '@vkontakte/vkui';
import { ModalIDs } from './modalIDs';
import { CityModal } from './CityModal';
import { useAppSelector, useCloseActiveModal } from '@/hooks';
import { DebugModal } from './DebugModal';
import { AttractionModal } from './AttractionModal/AttractionModal';

export const AppModalRoot = () => {
  const { activeModal } = useAppSelector((state) => state.modal);
  const closeActiveModal = useCloseActiveModal();

  return (
    <ModalRoot activeModal={activeModal}>
      <CityModal id={ModalIDs.CityModal} closeModal={closeActiveModal} />
      <DebugModal id={ModalIDs.DebugModal} closeModal={closeActiveModal} />
      <AttractionModal id={ModalIDs.AttractionModal} closeModal={closeActiveModal} />
    </ModalRoot>
  );
};
