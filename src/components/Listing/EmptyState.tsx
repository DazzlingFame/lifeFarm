import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {EmptyStateStyles} from './EmptyStateStyles';

type Props = {
  onPress: () => void;
};

export const EmptyState: React.FC<Props> = ({onPress}) => {
  return (
    <View style={EmptyStateStyles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text>Добавить первое растение</Text>
      </TouchableOpacity>
    </View>
  );
};
