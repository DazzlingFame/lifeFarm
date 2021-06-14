import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import NotificationsManager from '../../utils/notifications/NotificationsManager';
import AddNotificationViewStyles from './AddNotificationViewStyles';

export const AddNotificationView: React.FC = () => (
  <TouchableOpacity
    style={AddNotificationViewStyles.container}
    onPress={() =>
      NotificationsManager.scheduleNotification(
        5,
        'LifePlant',
        'Please water me',
      )
    }>
    <Text>Добавить напоминание о поливе</Text>
  </TouchableOpacity>
);
