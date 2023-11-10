import { selectCity } from '@/redux/slices';
import { useAppDispatch, useAppSelector } from './reduxHooks';

export const useSelectCity = () => {
  const { settlement: selectedCity } = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();
  const chooseCity = (city: Settlement | null): void => void dispatch(selectCity(city));

  return [selectedCity, chooseCity] as const;
};
