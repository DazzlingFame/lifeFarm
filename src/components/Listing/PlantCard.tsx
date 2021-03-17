import {Image, ImageSourcePropType, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {PlantCardStyles} from './PlantCardStyles';
import {getRandomImage} from '../../utils/random';

const cactusPng = require('../../assets/images/cactus-png.png');
const palmPng = require('../../assets/images/palm-tree-png.png');

export type Plant = {
  image?: ImageSourcePropType;
  name: string;
  species: string;
};

type Props = {
  item: Plant;
  onPress: () => void;
};

export const PlantCard: React.FC<Props> = ({item, onPress}) => {
  return (
    <TouchableOpacity style={PlantCardStyles.container} onPress={onPress}>
      <Image
        style={{flex: 1}}
        resizeMode={'contain'}
        source={item.image ?? getRandomImage(item.name, [cactusPng, palmPng])}
      />
      <Text style={PlantCardStyles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};
