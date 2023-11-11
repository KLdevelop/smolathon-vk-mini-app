import { useState } from 'react';
import { GeolocationControl, Map, Placemark, YMaps, ZoomControl, Polyline } from '@pbe/react-yandex-maps';
import styled from 'styled-components';
import { calculateMapCenter, getAllCoordinatesFromSteps, getCoordinatesFromStep } from '@/utils';
import UserMarker from '@/data/Marker.svg';
import { useAppSelector, useOpenModal } from '@/hooks';
import { ModalIDs } from '..';
// import YandexLogo from '@/data/yandexlogo.svg';

const MapContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
`;

interface MapProps {
  steps: Step[];
  onMarkerClick?: (step: Step) => void;
}

export const YanMap = ({ steps, onMarkerClick }: MapProps) => {
  const markers = getAllCoordinatesFromSteps(steps);

  const [mapData] = useState<ymaps.IMapState>({
    center: calculateMapCenter(markers),
    zoom: 13,
  });

  const openDebugModal = useOpenModal(ModalIDs.DebugModal);
  const { debugData } = useAppSelector((state) => state.debugModal);
  const userCoordinates = debugData ? debugData.coordinates : mapData.center;
  console.log(userCoordinates);

  return (
    <MapContainer>
      <YMaps>
        <div>
          <Map width={'100%'} height={'100%'} defaultState={mapData}>
            {steps.map((step) => (
              <Placemark
                onClick={() => onMarkerClick && onMarkerClick(step)}
                key={step.id}
                geometry={getCoordinatesFromStep(step)}
              />
            ))}
            <Placemark
              onClick={openDebugModal}
              key="user"
              geometry={userCoordinates}
              options={{
                iconLayout: 'default#image',
                iconImageSize: [40, 40],
                iconImageHref: UserMarker,
              }}
            />
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
