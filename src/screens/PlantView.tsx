import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {NavigationProp} from '../navigation';
import {Plant} from '../components/Listing';
import Avatar from '../components/PlantView';
import {getRandomImage} from '../utils/random';

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
            route.params.plant.image ??
            getRandomImage(route.params.plant.name, [cactusPng, palmPng])
          }
        />
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text
            style={{
              fontSize: 20,
            }}>{`${route.params.plant.species} ${route.params.plant.name}`}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
