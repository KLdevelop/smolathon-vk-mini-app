import { useState } from 'react';

import { GeolocationControl, Map, Placemark, YMaps, ZoomControl, Polyline } from '@pbe/react-yandex-maps';
import styled from 'styled-components';

const MapContainer = styled.div`
  display: grid;
  height: 300px;
  width: 100vw;
`;
function calculateMapCenter(coordinates) {
  let sumLat = 0;
  let sumLng = 0;

  for (let i = 0; i < coordinates.length; i++) {
    sumLat += coordinates[i][0];
    sumLng += coordinates[i][1];
  }

  const centerLat = sumLat / coordinates.length;
  const centerLng = sumLng / coordinates.length;
console.log([centerLng,centerLat ])
  return  [centerLat ,centerLng];
}

export const YanMap = () => {
  const [mapData, _setMapData] = useState({
    center: calculateMapCenter([
      [54.778416, 32.056272],
      [54.782886, 31.970284],
      [54.781019, 32.032101],
      [54.78238, 31.958829],
    ]),
    zoom: 13,
    // controls: ['zoomControl', 'geolocationControl'],
  });
  const [coordinates, _setCoordinates] = useState<[number, number][]>([
    [54.778416, 32.056272],
    [54.782886, 31.970284],
    [54.781019, 32.032101],
    [54.78238, 31.958829],
  ]);
  return (
    <MapContainer>
      <YMaps>
        <div>
          <Map width={'100%'} height={'100%'} defaultState={mapData}>
            {coordinates.map((coordinate, index) => (
              <Placemark
                key={`${index}-${coordinate}`}
                geometry={coordinate}
                // options={{
                //   iconLayout: "default#image",
                //   iconImageSize: [50, 50],
                //   iconImageHref:` https://img.icons8.com/ios-filled/2x/marker-${'1'.charCodeAt(0)}.png`
                // }}
              />
            ))}
            <ZoomControl />
            <GeolocationControl />
            <Polyline
              geometry={[
                [54.778416, 32.056272],
                [54.782886, 31.970284],
                [54.781019, 32.032101],
                [54.78238, 31.958829],
              ]}
              options={{
                balloonCloseButton: false,
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
