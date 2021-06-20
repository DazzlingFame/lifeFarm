import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {NavigationProp} from '../navigation';
import Avatar from '../components/PlantView';
import {getRandomImage} from '../utils/random';
import {PlantViewStyles} from './PlantViewStyles';
import {Plant} from '../Plant';
import {
  editBirthDayStep,
  editNameStep,
  editPhotoStep,
} from '../components/PlantEdit';
import {parseDateTime} from '../utils/date';
import {PlantData} from '../components/PlantView/PlantData';
import {InitEditScreenRouter} from '../components/PlantEdit/utils';
import {editInfoStep, editWateringStep} from '../components/PlantEdit/constants';
import ActionText from "../components/PlantView/ActionText";
import {plural} from "../utils/text";

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
  const routeToEditScreen = InitEditScreenRouter(navigation, plant);
  const parsedBirthDayString = parseDateTime(plant.birthDay);

  return (
    <View>
      <ScrollView>
        <Avatar
          onLongPress={() => routeToEditScreen([editPhotoStep])}
          source={
            plant.image ?? getRandomImage(plant.name, [cactusPng, palmPng])
          }
        />
        <TouchableWithoutFeedback
          style={PlantViewStyles.headerTextContainer}
          onLongPress={() => routeToEditScreen([editNameStep])}>
          <Text
            style={
              PlantViewStyles.headerText
            }>{`${plant.species} ${plant.name}`}</Text>
        </TouchableWithoutFeedback>
        <PlantData
          description={'Появился у тебя'}
          data={parsedBirthDayString}
          onLongPress={() => routeToEditScreen([editBirthDayStep])}
        />
        {plant.info ? (
          <PlantData
            description={'Особенность'}
            data={plant.info}
            onLongPress={() => routeToEditScreen([editInfoStep])}
          />
        ) : (
          <ActionText
            text={'Добавить особенность'}
            onPress={() => routeToEditScreen([editInfoStep])} />
        )}
        {plant.waterInterval ? (
            <PlantData
                description={'Поливать каждые'}
                data={`${plant.waterInterval} ${plural(plant.waterInterval, 'день', 'дня', 'дней')}`}
                onLongPress={() => routeToEditScreen([editWateringStep])}/>
            ) : (
            <ActionText
                text={'Добавить напоминание о поливе'}
                onPress={() => routeToEditScreen([editWateringStep])} />
            )
        }
      </ScrollView>
    </View>
  );
};

export default PlantView;
