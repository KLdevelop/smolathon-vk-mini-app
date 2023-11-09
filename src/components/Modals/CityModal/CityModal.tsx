import { Button, Cell, Group, IconButton, ModalPage, ModalPageHeader, Search } from '@vkontakte/vkui';
import { Icon24CancelOutline } from '@vkontakte/icons';
import { cities } from './constants';
import { ModalProps } from '../ModalProps';
import { useState } from 'react';
import { CircleCheckbox, StickyFooter } from '@/components';
import { useSearchSettlementsQuery } from '@/api/settlementsApi';

interface Props extends ModalProps {
  activeCity: string | null;
  setActiveCity: (city: string | null) => void;
}

const headerTitle = 'Выбор города';

export const CityModal = ({ id, activeCity, closeModal, setActiveCity }: Props) => {
  const [searchValue, setSearchValue] = useState<string>('');
  // const filteredCities = cities.filter(({ city }) =>
  //   city.trim().toLowerCase().includes(searchValue.trim().toLowerCase()),
  // );
  const { data: citiesResponse } = useSearchSettlementsQuery(searchValue);
  console.log(citiesResponse);
  const filteredCities = citiesResponse && citiesResponse.ok ? citiesResponse.result : undefined;
  const [selectedCity, setSelectedCity] = useState<string | null>(activeCity);

  const onAcceptClick = () => {
    setActiveCity(selectedCity);
    closeModal();
  };

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
          {headerTitle}
        </ModalPageHeader>
      }
    >
      <Group header={<Search value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />}>
        {!!filteredCities &&
          filteredCities.map(({ id, name }) => (
            <Cell
              key={id}
              after={selectedCity == name && <CircleCheckbox selected />}
              onClick={() => setSelectedCity(name)}
            >
              {name}
            </Cell>
          ))}
      </Group>
      <StickyFooter>
        <Button size="l" stretched onClick={onAcceptClick}>
          Применить
        </Button>
      </StickyFooter>
    </ModalPage>
  );
};
