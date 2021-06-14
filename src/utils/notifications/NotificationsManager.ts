import {NotificationManagerNativeModule} from './types';
import {NativeModules} from 'react-native';

const NotificationsManager: NotificationManagerNativeModule =
  NativeModules.LocalPushSenderModule;

class Notification {
  scheduleNotification(timeToWait: number, header: string, text: string) {
    NotificationsManager.scheduleNotification(timeToWait, header, text);
  }
}

export default new Notification();
