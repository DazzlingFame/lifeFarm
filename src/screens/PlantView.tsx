import React from 'react';
import {View, Text, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {NavigationProp, SCREENS} from '../navigation';
import Avatar from '../components/PlantView';
import {getRandomImage} from '../utils/random';
import {PlantViewStyles} from './PlantViewStyles';
import {getPlantBirthDay, getPlantImage, getPlantName, Plant} from '../Plant';
import {editNameStep, editPhotoStep} from '../components/PlantEdit';

const cactusPng = require('../assets/images/cactus.png');
const palmPng = require('../assets/images/palm-tree.png');

type NavigationData = {
  plant: Plant;
};

const PlantView: React.FC<NavigationProp<NavigationData>> = ({
  navigation,
  route,
}) => {
  return (
    <View>
      <ScrollView>
        <Avatar
          onLongPress={() => {
            navigation.push(SCREENS.PlantEdit.name, {
              plantItem: route.params.plant,
              steps: [editPhotoStep],
            });
          }}
          source={
            getPlantImage(route.params.plant) ??
            getRandomImage(getPlantName(route.params.plant), [
              cactusPng,
              palmPng,
            ])
          }
        />
        <TouchableWithoutFeedback
          style={PlantViewStyles.headerTextContainer}
          onPress={() => {
            navigation.push(SCREENS.PlantEdit.name, {
              plantItem: route.params.plant,
              steps: [editNameStep],
            });
          }}>
          <Text
            style={
              PlantViewStyles.headerText
            }>{`${route.params.plant.species} ${route.params.plant.name}`}</Text>
        </TouchableWithoutFeedback>
        <Text>
          {new Date(getPlantBirthDay(route.params.plant)).toDateString()}
        </Text>
      </ScrollView>
    </View>
  );
};

export default PlantView;
