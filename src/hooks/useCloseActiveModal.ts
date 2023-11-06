import { closeModal } from '@/redux/slices';
import { useAppDispatch } from './reduxHooks';

export const useCloseActiveModal = () => {
  const dispatch = useAppDispatch();
  const closeActiveModal = (): void => void dispatch(closeModal());

  return closeActiveModal;
};
