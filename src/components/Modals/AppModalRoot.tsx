import { ModalRoot } from '@vkontakte/vkui';
import { ModalIDs } from './modalIDs';
import { CityModal } from './CityModal';
import { useAppSelector, useCloseActiveModal, useSelectCity } from '@/hooks';

export const AppModalRoot = () => {
  const { activeModal } = useAppSelector((state) => state.modal);
  const [selectedCity, setSelectedCity] = useSelectCity();
  const closeActiveModal = useCloseActiveModal();

  return (
    <ModalRoot activeModal={activeModal}>
      <CityModal
        id={ModalIDs.CityModal}
        activeCity={selectedCity}
        closeModal={closeActiveModal}
        setActiveCity={setSelectedCity}
      />
    </ModalRoot>
  );
};
