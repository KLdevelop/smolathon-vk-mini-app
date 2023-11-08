export const ModalIDs = {
  CityModal: 'CityModal',
  DebugModal: 'DebugModal',
} as const;

export type ModalID = (typeof ModalIDs)[keyof typeof ModalIDs];
