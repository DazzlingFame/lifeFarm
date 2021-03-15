import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {AddPlantButtonStyles} from './AddPlantButtonStyles';

type Props = {
  onPress: () => void;
};

const AddPlantButton: React.FC<Props> = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={AddPlantButtonStyles.container}
      activeOpacity={0.8}>
      <Text style={AddPlantButtonStyles.plusSign}>+</Text>
    </TouchableOpacity>
  );
};

export default AddPlantButton;
