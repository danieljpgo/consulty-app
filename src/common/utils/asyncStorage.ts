import AsyncStorage from '@react-native-community/async-storage';

const get = async <T>(key: string): Promise<T | null> => {
  const data = await AsyncStorage.getItem(key);
  return data && JSON.parse(data);
};

const set = <T>(key: string, body: T): void => {
  AsyncStorage.setItem(key, JSON.stringify(body));
};

const asyncStorage = {
  get,
  set,
};

export default asyncStorage;
