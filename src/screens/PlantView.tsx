import React from 'react';
import {View, Text} from 'react-native';
import {NavigationProp} from '../navigation';

export const PlantView: React.FC<NavigationProp> = ({route}) => (
  <View>
    <Text>{route.params.text}</Text>
  </View>
);
