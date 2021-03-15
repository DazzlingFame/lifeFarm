import AsyncStorage from '@react-native-community/async-storage';

const saveItem = async (
  key: string,
  value: string | any | Array<any>,
): Promise<void> => {
  return await AsyncStorage.setItem(key, JSON.stringify(value));
};

type getItemType = <T>(key: string) => Promise<T>;
const getItem: getItemType = async (key) => {
  const val = await AsyncStorage.getItem(key);
  return val ? JSON.parse(val) : null;
};

const multiGet = async (
  keysArray: Array<string>,
): Promise<
  | {
      [key: string]: any;
    }
  | undefined
  | null
> => {
  let storeDataArray: Array<[string, string | null]> = [];

  try {
    storeDataArray = await AsyncStorage.multiGet(keysArray);
  } catch (e) {}

  const storeData: {
    [key: string]: any;
  } = {};

  for (let i = 0; i < storeDataArray.length; i++) {
    const dataKey: string = storeDataArray[i][0];
    const dataValue: string | null = storeDataArray[i][1];

    try {
      if (dataValue) {
        storeData[dataKey] = JSON.parse(dataValue);
      }
    } catch (e) {}
  }

  return storeData;
};

const removeItem = async (
  key: string,
  callback?: (error?: Error) => void,
): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key, callback);
  } catch (e) {}
};

export default {
  saveItem,
  getItem,
  multiGet,
  removeItem,
};
