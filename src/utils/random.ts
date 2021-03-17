import {ImageSourcePropType} from 'react-native';

export const getRandomImage = (
  name: string,
  imagesArray: ImageSourcePropType[],
) => {
  return imagesArray[name.length % 2];
};
