import { selectCity } from '@/redux/slices';
import { useAppDispatch, useAppSelector } from './reduxHooks';

export const useSelectCity = () => {
  const { selectedCity } = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();
  const chooseCity = (city: string | null): void => void dispatch(selectCity(city));

  return [selectedCity, chooseCity] as const;
};
