import AsyncStorage from '@react-native-community/async-storage';

const get = async <T>(key: string): Promise<T | null> => {
  const data = await AsyncStorage.getItem(key);
  return data && JSON.parse(data);
};

const set = <T>(key: string, body: T): void => {
  AsyncStorage.setItem(key, JSON.stringify(body));
};

const log = (): void => {
  AsyncStorage.getAllKeys((_, keys) => {
    if (keys) {
      AsyncStorage.multiGet(keys, (__, stores) => {
        if (stores) {
          stores.map((___, i, store) => {
            console.log({ [store[i][0]]: store[i][1] });
          });
        } else {
          console.log('Store undefined');
        }
      });
    } else {
      console.log('Empty keys');
    }
  });
};

const asyncStorage = {
  get,
  set,
  log,
};

export default asyncStorage;
