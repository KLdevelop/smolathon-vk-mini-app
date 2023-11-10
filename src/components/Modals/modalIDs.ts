export const ModalIDs = {
  CityModal: 'CityModal',
  DebugModal: 'DebugModal',
  AttractionModal: 'AttractionModal',
  BossFightModal: 'BossFightModal',
} as const;

export type ModalID = (typeof ModalIDs)[keyof typeof ModalIDs];
