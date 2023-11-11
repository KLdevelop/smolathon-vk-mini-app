import { randomInteger } from '.';

const storage = localStorage;

export const getUserId = () => {
  let id = storage.getItem('user_id');

  if (!id) {
    id = '' + randomInteger(1, 9000);
    storage.setItem('user_id', id);
  }

  return id;
};
