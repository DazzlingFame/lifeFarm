import {
  ImagePickerNativeModule,
  ImagePickerOptions,
  ImagePickerResponse,
} from './types';

const ImagePickerManager: ImagePickerNativeModule =
  NativeModules.ImagePickerManager;
import {NativeModules} from 'react-native';

const DEFAULT_OPTIONS: ImagePickerOptions = {
  title: 'Select a Photo',
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take Photo…',
  chooseFromLibraryButtonTitle: 'Choose from Library…',
  quality: 1.0,
  allowsEditing: false,
  mediaType: 'photo',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  permissionDenied: {
    title: 'Permission denied',
    text:
      'To be able to take pictures with your camera and choose images from your library.',
    reTryTitle: 're-try',
    okTitle: "I'm sure",
  },
  tintColor: '',
};

type Callback = (response: ImagePickerResponse) => void;

class ImagePicker {
  showImagePicker(callback: Callback, options?: ImagePickerOptions): void {
    if (!options) {
      return ImagePickerManager.showImagePicker(DEFAULT_OPTIONS, callback);
    }

    return ImagePickerManager.showImagePicker(
      {
        ...DEFAULT_OPTIONS,
      },
      callback,
    );
  }

  launchCamera(callback: Callback): void {
    return ImagePickerManager.launchCamera(DEFAULT_OPTIONS, callback);
  }

  launchImageLibrary(callback: Callback): void {
    return ImagePickerManager.launchImageLibrary(DEFAULT_OPTIONS, callback);
  }
}

export default new ImagePicker();
