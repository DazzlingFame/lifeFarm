import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {NavigationProp} from '../navigation';
import Avatar from '../components/PlantView';
import {getRandomImage} from '../utils/random';
import {PlantViewStyles} from './PlantViewStyles';
import {getPlantBirthDay, getPlantImage, getPlantName, Plant} from '../Plant';

const cactusPng = require('../assets/images/cactus-png.png');
const palmPng = require('../assets/images/palm-tree-png.png');

type NavigationData = {
  plant: Plant;
};

export const PlantView: React.FC<NavigationProp<NavigationData>> = ({
  route,
}) => {
  return (
    <View>
      <ScrollView>
        <Avatar
          source={
            getPlantImage(route.params.plant) ??
            getRandomImage(getPlantName(route.params.plant), [
              cactusPng,
              palmPng,
            ])
          }
        />
        <View style={PlantViewStyles.headerTextContainer}>
          <Text
            style={
              PlantViewStyles.headerText
            }>{`${route.params.plant.species} ${route.params.plant.name}`}</Text>
        </View>
        <Text>
          {new Date(getPlantBirthDay(route.params.plant)).toDateString()}
        </Text>
      </ScrollView>
    </View>
  );
};
