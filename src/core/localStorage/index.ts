import { StorageApi } from '@core/localStorage/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getItem<T>(key: string): Promise<T | null> {
  const value = await AsyncStorage.getItem(key);

  if (value) return JSON.parse(value);
  return null;
}

async function setItem<T>(key: string, value: T) {
  AsyncStorage.setItem(key, JSON.stringify(value));
}

async function removeItem(key: string) {
  AsyncStorage.removeItem(key);
}

export const LocalStorage: StorageApi = {
  getItem,
  setItem,
  removeItem,
};
