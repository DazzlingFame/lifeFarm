import {FlatList, View} from 'react-native';
import React from 'react';
import {NavigationProp, SCREENS} from '../navigation';
import {ListingStyles} from './ListingStyles';
import {PlantCardType, EmptyState, PlantCard} from '../components/Listing';

const plantCardsMock: PlantCardType[] = [
  {
    name: 'Oleg',
  },
  {
    name: 'Koshka',
  },
  {
    name: 'PalmTree',
  },
  {
    name: 'Koshka1',
  },
  {
    name: 'Koshka2',
  },
  {
    name: 'PalmTree1',
  },
  {
    name: 'Koshka3',
  },
  {
    name: 'Koshka4',
  },
  {
    name: 'PalmTree3',
  },
  {
    name: 'Koshka5',
  },
  {
    name: 'Koshka6',
  },
];

export const Listing: React.FC<NavigationProp> = ({navigation}) => {
  const isShowingEmptyState = false;

  const onPlantCardPressed = (plantItem: PlantCardType) => {
    navigation.navigate(SCREENS.PlantView.name, {text: plantItem.name});
  };

  return (
    <View style={ListingStyles.container}>
      {isShowingEmptyState ? (
        <EmptyState
          onPress={() => {
            navigation.navigate(SCREENS.PlantView.name, {text: 'View'});
          }}
        />
      ) : (
        <FlatList
          numColumns={2}
          data={plantCardsMock}
          renderItem={(renderItem) => (
            <PlantCard
              item={renderItem.item}
              onPress={() => onPlantCardPressed(renderItem.item)}
              key={renderItem.item.name}
            />
          )}
        />
      )}
    </View>
  );
};
