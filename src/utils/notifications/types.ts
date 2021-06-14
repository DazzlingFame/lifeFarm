export interface NotificationManagerNativeModule {
  scheduleNotification(timeToWait: number, header: string, text: string): void;
}
