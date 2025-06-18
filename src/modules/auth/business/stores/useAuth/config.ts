import { LocalStorage } from '@core/localStorage';
import {
  createJSONStorage,
  type StateStorage,
  type PersistOptions,
} from 'zustand/middleware';

export const authStoreConfig = <T>(
  persistOptions: PersistOptions<T>,
): PersistOptions<T> => {
  const zustandStorage: StateStorage = {
    getItem: name => LocalStorage.getItem(name)!,
    setItem: (name, value) => LocalStorage.setItem(name, value),
    removeItem: name => LocalStorage.removeItem(name),
  };

  return {
    ...persistOptions,
    storage: createJSONStorage(() => zustandStorage),
  };
};
