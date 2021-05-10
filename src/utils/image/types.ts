import {ImageURISource} from 'react-native';

export interface ImagePickerResponse {
  customButton: string;
  didCancel: boolean;
  error: string;
  data: string;
  uri: string;
  origURL?: string;
  isVertical: boolean;
  width: number;
  height: number;
  fileSize: number;
  type?: string;
  fileName?: string;
  path?: string;
  latitude?: number;
  longitude?: number;
  timestamp?: string;
}

export interface URIFile extends ImageURISource {
  uri: string;
  type: string;
  name: string;
}

type Callback = (response: ImagePickerResponse) => void;
type OptionsOrCallback = ImagePickerOptions | Callback;

export interface URIFile {
  uri: string;
  type: string;
  name: string;
}

export interface ImagePickerCustomButtonOptions {
  name?: string;
  title?: string;
}
export interface ImagePickerOptions {
  title?: string;
  cancelButtonTitle?: string;
  takePhotoButtonTitle?: string;
  chooseFromLibraryButtonTitle?: string;
  chooseWhichLibraryTitle?: string;
  customButtons?: ImagePickerCustomButtonOptions[];
  cameraType?: 'front' | 'back';
  mediaType?: 'photo' | 'video' | 'mixed';
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  videoQuality?: 'low' | 'medium' | 'high';
  durationLimit?: number;
  rotation?: number;
  allowsEditing?: boolean;
  noData?: boolean;
  storageOptions?: ImagePickerStorageOptions;
  permissionDenied?: ImagePickerPermissionDeniedOptions;
  tintColor?: number | string;
}
export interface ImagePickerStorageOptions {
  skipBackup?: boolean;
  path?: string;
  cameraRoll?: boolean;
  waitUntilSaved?: boolean;
  privateDirectory?: boolean;
}
export interface ImagePickerPermissionDeniedOptions {
  title: string;
  text: string;
  reTryTitle: string;
  okTitle: string;
}

export interface ImagePickerResponse {
  customButton: string;
  didCancel: boolean;
  error: string;
  data: string;
  uri: string;
  origURL?: string;
  isVertical: boolean;
  width: number;
  height: number;
  fileSize: number;
  type?: string;
  fileName?: string;
  path?: string;
  latitude?: number;
  longitude?: number;
  timestamp?: string;
}

export interface ImagePickerNativeModule {
  showImagePicker(
    options: ImagePickerOptions,
    callback: (response: ImagePickerResponse) => void,
  ): void;
  launchCamera(
    options: ImagePickerOptions,
    callback: (response: ImagePickerResponse) => void,
  ): void;
  launchImageLibrary(
    options: ImagePickerOptions,
    callback: (response: ImagePickerResponse) => void,
  ): void;
}
