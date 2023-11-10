import { useState } from 'react';
import { GeolocationControl, Map, Placemark, YMaps, ZoomControl, Polyline } from '@pbe/react-yandex-maps';
import styled from 'styled-components';
import { calculateMapCenter, getAllCoordinatesFromSteps } from '@/utils';
// import YandexLogo from '@/data/yandexlogo.svg';

const MapContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
`;

interface MapProps {
  steps: Step[];
  onMarkerClick?: () => void;
}

export const YanMap = ({ steps, onMarkerClick }: MapProps) => {
  const markers = getAllCoordinatesFromSteps(steps);

  const [mapData] = useState<ymaps.IMapState>({
    center: calculateMapCenter(markers),
    zoom: 13,
  });

  return (
    <MapContainer>
      <YMaps>
        <div>
          <Map width={'100%'} height={'100%'} defaultState={mapData}>
            {markers.map((coordinate, index) => (
              <Placemark onClick={onMarkerClick} key={`${index}-${coordinate}`} geometry={coordinate} />
            ))}
            {/* <Placemark
              onClick={openAttractionModal}
              key="user"
              geometry={mapData.center}
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
