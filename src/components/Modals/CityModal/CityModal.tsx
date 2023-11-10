import { Button, Cell, Group, IconButton, ModalPage, ModalPageHeader, Search } from '@vkontakte/vkui';
import { Icon24CancelOutline } from '@vkontakte/icons';
import { ModalProps } from '../ModalProps';
import { useEffect, useState } from 'react';
import { CircleCheckbox, StickyFooter } from '@/components';
import { useSearchSettlementsQuery } from '@/api/settlementsApi';
import { useSelectCity } from '@/hooks';

interface Props extends ModalProps {}

const headerTitle = 'Выбор города';

export const CityModal = ({ id, closeModal }: Props) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { data: citiesResponse } = useSearchSettlementsQuery(searchValue);
  const filteredCities = citiesResponse?.ok ? citiesResponse.result : undefined;
  const [activeCity, setActiveCity] = useSelectCity();
  const [selectedCity, setSelectedCity] = useState<Settlement | null>(null);

  useEffect(() => {
    setSelectedCity(activeCity);
  }, [activeCity]);

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
            <IconButton onClick={closeModal} aria-label="Закрыть">
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
          filteredCities.map((settlement) => (
            <Cell
              key={settlement.id}
              after={selectedCity?.id === settlement.id && <CircleCheckbox selected />}
              onClick={() => setSelectedCity(settlement)}
            >
              {settlement.name}
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
