import { useState } from "react";

import {
  GeolocationControl,
  Map,
  Placemark,
  YMaps,
  ZoomControl
} from "@pbe/react-yandex-maps";
import styled from "styled-components";

const MapContainer = styled.div`
  display: grid;
  height:300px;
  width: 100vw;
`;

export const YanMap=()=> {
  const [mapData, _setMapData] = useState({
    center: [55.751574, 37.573856],
    zoom: 13
    // controls: ['zoomControl', 'geolocationControl'],
  });
  const [coordinates, _setCoordinates] = useState<[number, number][]>([
    [55.684758, 37.738521],
    [57.684758, 39.738521]
  ]);
  return (
    <MapContainer>
      <YMaps>
        <div>
          <Map width={"100%"} height={"100%"} defaultState={mapData}>
            {coordinates.map((coordinate, index) => (
              <Placemark key={`${index}-${coordinate}`} geometry={coordinate} />
            ))}
            <ZoomControl />
            <GeolocationControl />
          </Map>
        </div>
      </YMaps>
    </MapContainer>
  );
}
