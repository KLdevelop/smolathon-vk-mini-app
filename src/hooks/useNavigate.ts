import { setActiveTab } from '@/redux/slices';
import { useAppDispatch } from './reduxHooks';
import { Tab } from '@/tabs';

export const useNavigate = () => {
  const dispatch = useAppDispatch();
  const navigate = (tab: Tab) => dispatch(setActiveTab(tab));

  return navigate;
};
