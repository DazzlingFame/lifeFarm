import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {PlantDataStyles} from './PlantDataStyles';

type Props = {
  description: string;
  data: string;
  onLongPress: () => void;
};
export const PlantData: React.FC<Props> = (props) => (
  <TouchableWithoutFeedback
    onLongPress={props.onLongPress}
    style={PlantDataStyles.touchableContainer}>
    <View style={PlantDataStyles.container}>
      <Text style={PlantDataStyles.description}>{props.description}</Text>
      <Text style={PlantDataStyles.data}>{props.data}</Text>
    </View>
  </TouchableWithoutFeedback>
);
