import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {PlantCardStyles} from './PlantCardStyles';
import {getRandomImage} from '../../utils/random';
import {getPlantImage, getPlantName, Plant} from '../../Plant';

const cactusPng = require('../../assets/images/cactus-png.png');
const palmPng = require('../../assets/images/palm-tree-png.png');

type Props = {
  item: Plant;
  onPress: () => void;
  onLongPress?: () => void;
};

export const PlantCard: React.FC<Props> = ({item, onPress, onLongPress}) => {
  console.log('item', item);
  return (
    <TouchableOpacity
      style={PlantCardStyles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Image
        style={PlantCardStyles.image}
        resizeMode={'cover'}
        source={
          getPlantImage(item) ??
          getRandomImage(getPlantName(item), [cactusPng, palmPng])
        }
      />
      <Text style={PlantCardStyles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};
