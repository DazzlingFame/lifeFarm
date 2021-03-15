import React from 'react';
import {View, Text} from 'react-native';
import {NavigationProp} from '../navigation';
import {Plant} from '../components/Listing';

type NavigationData = {
  plant: Plant;
};

export const PlantView: React.FC<NavigationProp<NavigationData>> = ({
  route,
}) => (
  <View>
    <Text>{route.params.plant.name}</Text>
    <Text>{route.params.plant.species}</Text>
  </View>
);
