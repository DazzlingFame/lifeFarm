import {ImageSourcePropType, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {PlantCardStyles} from './PlantCardStyles';

export type PlantCardType = {
  image?: ImageSourcePropType;
  name: string;
};

type Props = {
  item: PlantCardType;
  onPress: () => void;
};

export const PlantCard: React.FC<Props> = ({item, onPress}) => {
  return (
    <TouchableOpacity style={PlantCardStyles.container} onPress={onPress}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};
