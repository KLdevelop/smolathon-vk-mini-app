import { Button, Cell, Div, Group, IconButton, ModalPage, ModalPageHeader, Search } from '@vkontakte/vkui';
import { Icon24CancelOutline } from '@vkontakte/icons';
import { cities } from './constants';
import { ModalProps } from '../ModalProps';
import { useState } from 'react';
import { CircleCheckbox } from '@/components';

interface Props extends ModalProps {
  activeCity: string | null;
  setActiveCity: (city: string | null) => void;
}

const headerTitle = 'Выбор города';

export const CityModal = ({ id, activeCity, closeModal, setActiveCity }: Props) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const filteredCities = cities.filter(({ city }) =>
    city.trim().toLowerCase().includes(searchValue.trim().toLowerCase()),
  );
  const [selectedCity, setSelectedCity] = useState<string | null>(activeCity);

  const onAcceptClick = () => {
    setActiveCity(selectedCity);
    closeModal();
  };

  return (
    <ModalPage
      id={id}
      onClose={closeModal}
      settlingHeight={80}
      hideCloseButton={true}
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
        {filteredCities.map(({ city, id }) => (
          <Cell
            key={id}
            after={selectedCity == city && <CircleCheckbox selected />}
            onClick={() => setSelectedCity(city)}
          >
            {city}
          </Cell>
        ))}
      </Group>
      <Div
        style={{
          position: 'sticky',
          bottom: 0,
          paddingBottom: 16,
          paddingTop: 1,
          background: 'var(--vkui--color_background_content)',
        }}
      >
        <Button size="l" mode="primary" stretched onClick={onAcceptClick}>
          Применить
        </Button>
      </Div>
    </ModalPage>
  );
};
