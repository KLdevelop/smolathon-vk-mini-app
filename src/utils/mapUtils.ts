export function calculateMapCenter(coordinates: number[][]) {
  let sumLat = 0;
  let sumLng = 0;

  for (let i = 0; i < coordinates.length; i++) {
    sumLat += coordinates[i][0];
    sumLng += coordinates[i][1];
  }

  const centerLat = sumLat / coordinates.length;
  const centerLng = sumLng / coordinates.length;
  return [centerLat, centerLng];
}

export const getCoordinatesFromStep = ({ longitude: longtitude, latitude }: Step) => [latitude, longtitude];

export const sortStepsByOrder = (steps: Step[]) => steps.sort((step1, step2) => (step1.order > step2.order ? 1 : -1));

export const getAllCoordinatesFromSteps = (steps: Step[]) => steps.map(getCoordinatesFromStep);
