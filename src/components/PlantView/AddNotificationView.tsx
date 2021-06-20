import React from 'react';
import NotificationsManager from '../../utils/notifications/NotificationsManager';
import ActionText from "./ActionText";

export const AddNotificationView: React.FC = () => (
  <ActionText
    onPress={() =>
      NotificationsManager.scheduleNotification(
        5,
        'LifePlant',
        'Please water me',
      )
    }
    text={'Добавить напоминание о поливе'}
  />
);
