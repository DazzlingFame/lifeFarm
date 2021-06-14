import React from 'react';
import {View, Text, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {NavigationProp, SCREENS} from '../navigation';
import Avatar from '../components/PlantView';
import {getRandomImage} from '../utils/random';
import {PlantViewStyles} from './PlantViewStyles';
import {Plant} from '../Plant';
import {editNameStep, editPhotoStep} from '../components/PlantEdit';
import {parseDateTime} from '../utils/date';

const cactusPng = require('../assets/images/cactus.png');
const palmPng = require('../assets/images/palm-tree.png');

type NavigationData = {
  plant: Plant;
};

const PlantView: React.FC<NavigationProp<NavigationData>> = ({
  navigation,
  route,
}) => {
  const {plant} = route.params;
  const parsedBirthDayString = parseDateTime(plant.birthDay);

  return (
    <View>
      <ScrollView>
        <Avatar
          onLongPress={() => {
            navigation.push(SCREENS.PlantEdit.name, {
              plantItem: plant,
              steps: [editPhotoStep],
            });
          }}
          source={
            plant.image ?? getRandomImage(plant.name, [cactusPng, palmPng])
          }
        />
        <TouchableWithoutFeedback
          style={PlantViewStyles.headerTextContainer}
          onPress={() => {
            navigation.push(SCREENS.PlantEdit.name, {
              plantItem: plant,
              steps: [editNameStep],
            });
          }}>
          <Text
            style={
              PlantViewStyles.headerText
            }>{`${plant.species} ${plant.name}`}</Text>
        </TouchableWithoutFeedback>
        <Text>{parsedBirthDayString}</Text>
      </ScrollView>
    </View>
  );
};

export default PlantView;
