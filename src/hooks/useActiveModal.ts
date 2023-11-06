import { ModalID } from '@/components';
import { openModal as openModalByID } from '@/redux/slices';
import { useAppDispatch } from './reduxHooks';

export const useOpenModal = (modalID: ModalID) => {
  const dispatch = useAppDispatch();
  const openModal = (): void => void dispatch(openModalByID(modalID));

  return openModal;
};
