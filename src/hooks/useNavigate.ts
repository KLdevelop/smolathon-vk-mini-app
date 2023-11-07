import { setActiveTab } from '@/redux/slices';
import { useAppDispatch } from './reduxHooks';
import { Tab } from '@/navigation';

export const useNavigate = () => {
  const dispatch = useAppDispatch();
  const navigate = (tab: Tab) => dispatch(setActiveTab(tab));

  return navigate;
};
