export const ModalIDs = {
  CityModal: 'CityModal',
  DebugModal: 'DebugModal',
  AttractionModal:'AttractionModal'
} as const;

export type ModalID = (typeof ModalIDs)[keyof typeof ModalIDs];
