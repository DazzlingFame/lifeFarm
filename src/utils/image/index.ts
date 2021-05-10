import {Alert, PixelRatio} from 'react-native';
import {ImagePickerResponse, URIFile} from './types';
import ImagePicker from './ImagePicker';

export const getImageSource = (
  host: string = '',
  link: string = '',
): {uri: string} => {
  const protocol = __DEV__ ? 'http://' : 'https://';
  return {
    uri: protocol + host + link,
  };
};

export type OnImageChosen = (file: URIFile) => void;
type ImagePickerType = (onImageChosen: OnImageChosen) => void;
export const showImagePicker: ImagePickerType = (onImageChosen) => {
  Alert.alert('Отправить фото', undefined, [
    {
      text: 'Выбрать из галереи...',
      onPress: () => {
        launchImageLibrary(onImageChosen);
      },
    },
    {
      text: 'Сделать снимок...',
      onPress: () => {
        launchCamera(onImageChosen);
      },
    },
    {
      text: 'Отмена',
      onPress: () => {},
      style: 'cancel',
    },
  ]);
};

export const launchCamera: ImagePickerType = async (onImageChosen) => {
  ImagePicker.launchCamera((response) => {
    if (response.error) {
      console.error({response}, 'ImagePicker. Failed launchCamera request');
    } else if (response.uri) {
      onImageChosen(responseToFile(response));
    }
  });
};

export const launchImageLibrary: ImagePickerType = (onImageChosen) => {
  ImagePicker.launchImageLibrary((response) => {
    if (response.error) {
      console.error({response}, 'ImagePicker. Failed launchGallery request');
    } else if (response.uri) {
      onImageChosen(responseToFile(response));
    }
  });
};

type ResponseToFile = (response: ImagePickerResponse) => URIFile;
const responseToFile: ResponseToFile = (response) => ({
  uri: response.uri || '',
  type: response.type || 'image/jpeg',
  name: 'file.jpg',
});

export const getImagePreviewSource = (
  host: string = '',
  link: string = '',
  size: number,
): {uri: string} => {
  const fullSource = getImageSource(host, link);
  const intSize = Math.round(PixelRatio.getPixelSizeForLayoutSize(size));
  const stringSize = intSize.toString();
  return {
    uri: `${fullSource.uri}-h${stringSize}.jpg`,
  };
};
