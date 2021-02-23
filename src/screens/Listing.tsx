import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NavigationProp, SCREENS} from '../navigation';

export const Listing: React.FC<NavigationProp> = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(SCREENS.PlantView.name, {text: 'View'});
        }}>
        <Text>Listing</Text>
      </TouchableOpacity>
    </View>
  );
};
