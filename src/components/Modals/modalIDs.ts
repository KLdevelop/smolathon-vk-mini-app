export const ModalIDs = {
  CityModal: 'CityModal',
} as const;

export type ModalID = (typeof ModalIDs)[keyof typeof ModalIDs];
