import {FlatList, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationProp, SCREENS} from '../navigation';
import {ListingStyles} from './ListingStyles';
import {EmptyState, Plant, PlantCard} from '../components/Listing';
import AddPlantButton from '../components/Listing/AddPlantButton';
import {EditStep, EditStepCodes} from './PlantEdit';
import asyncStorage from '../utils/asyncStorage';
import {PLANTS_ARRAY_KEY} from '../constants';

const initialAddSteps: EditStep[] = [
  {
    title: 'Введите имя',
    code: EditStepCodes.input,
    plantEditingField: 'name',
  },
  {
    title: 'Введите вид',
    code: EditStepCodes.input,
    plantEditingField: 'species',
  },
];

export const Listing: React.FC<NavigationProp<{}>> = ({navigation}) => {
  const [plantItems, setPlantItems] = useState<Plant[]>([]);
  asyncStorage
    .getItem<Plant[] | undefined>(PLANTS_ARRAY_KEY)
    .then((savedPlants) => {
      setPlantItems(savedPlants || []);
    });

  const onPlantCardPressed = (plantItem: Plant) => {
    navigation.navigate(SCREENS.PlantView.name, {plant: plantItem});
  };

  const onPlantEditPressed = (steps: EditStep[]) => {
    navigation.push(SCREENS.PlantEdit.name, {steps, currentStep: steps[0]});
  };

  return (
    <View style={ListingStyles.container}>
      {!plantItems?.length ? (
        <EmptyState
          onPress={() => {
            onPlantEditPressed(initialAddSteps);
          }}
        />
      ) : (
        <>
          <FlatList
            numColumns={2}
            data={plantItems}
            renderItem={(renderItem) => (
              <PlantCard
                item={renderItem.item}
                onPress={() => onPlantCardPressed(renderItem.item)}
                key={renderItem.item.name}
              />
            )}
          />
          <AddPlantButton
            onPress={() => {
              onPlantEditPressed(initialAddSteps);
            }}
          />
        </>
      )}
    </View>
  );
};
