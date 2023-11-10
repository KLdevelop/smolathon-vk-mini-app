import { useState } from 'react';
import { GeolocationControl, Map, Placemark, YMaps, ZoomControl, Polyline } from '@pbe/react-yandex-maps';
import styled from 'styled-components';
import { calculateMapCenter } from '@/utils';
import { useOpenModal } from '@/hooks/useActiveModal';
import { ModalIDs } from '../Modals/modalIDs';
// import YandexLogo from '@/data/yandexlogo.svg';

const MapContainer = styled.div`
  display: grid;
  height: 300px;
  width: 100%;
`;

interface MapProps {
  markers: number[][];
}

export const YanMap = ({ markers }: MapProps) => {
  const [mapData] = useState<ymaps.IMapState>({
    center: calculateMapCenter(markers),
    zoom: 13,
  });

  const openAttractionModal = useOpenModal(ModalIDs.AttractionModal);

  return (
    <MapContainer>
      <YMaps>
        <div>
          <Map width={'100%'} height={'100%'} defaultState={mapData}>
            {markers.map((coordinate, index) => (
              <Placemark onClick={openAttractionModal} key={`${index}-${coordinate}`} geometry={coordinate} />
            ))}
            {/* <Placemark
              onClick={openAttractionModal}
              key="user"
              geometry={markers}
              options={{
                iconLayout: 'default#image',
                iconImageSize: [40, 40],
                iconImageHref: YandexLogo,
              }}
            /> */}
            <ZoomControl />
            <GeolocationControl />
            <Polyline
              geometry={markers}
              options={{
                strokeColor: '#3F8AE0',
                strokeWidth: 4,
                strokeOpacity: 0.5,
              }}
            />
          </Map>
        </div>
      </YMaps>
    </MapContainer>
  );
};
