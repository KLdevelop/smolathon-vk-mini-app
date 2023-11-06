// import { useEffect } from 'react';
import './Map.scss';
// import { load } from '@2gis/mapgl';
// import * as React from 'react';

interface MapProps {
  width?: string;
  height: string;
}

export const Map = ({ width = '100%', height }: MapProps) => {
  return <div style={{ width, height, background: 'gray' }}>Maps</div>;
};

// export const Map = ({ width = '100%', height }: MapProps) => {
//   useEffect(() => {
//     let map;
//     load().then((mapglAPI) => {
//       map = new mapglAPI.Map('map-container', {
//         center: [55.31878, 25.23584],
//         zoom: 13,
//         // key: 'Your API access key',
//       });
//     });

//     // Удаляем карту при размонтировании компонента
//     return () => map && map.destroy();
//   }, []);

//   return (
//     <div style={{ width, height }}>
//       <MapWrapper />
//     </div>
//   );
// };

// const MapWrapper = React.memo(
//   () => {
//     return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>;
//   },
//   () => true,
// );

// import './Map.scss';
// import { YMaps, Map as MapContent, Placemark } from '@pbe/react-yandex-maps';

// export const Map = () => {
//   const defaultState = {
//     center: [55.751574, 37.573856],
//     zoom: 5,
//   };

//   return (
//     <YMaps
//       query={{
//         lang: 'ru_Ru',
//         apiKey: '838534a3-24ee-4579-9f5a-604373ec04ed',
//       }}
//     >
//       <MapContent defaultState={defaultState}>
//         <Placemark geometry={[55.684758, 37.738521]} />
//       </MapContent>
//     </YMaps>
//   );
// };
