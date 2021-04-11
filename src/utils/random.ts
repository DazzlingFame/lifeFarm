import {ImageSourcePropType} from 'react-native';

export const getRandomImage = (
  name: string,
  imagesArray: ImageSourcePropType[],
) => {
  return imagesArray[name.length % 2];
};

type IdGenerator = () => string;
export const generateRandomChars: IdGenerator = () =>
  Math.random().toString(16).slice(-8);
