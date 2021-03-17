import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SubmitStyles} from './SubmitStyles';

type Props = {
  onPress: () => void;
};

const Submit: React.FC<Props> = ({onPress}) => (
  <TouchableOpacity style={SubmitStyles.container} onPress={onPress}>
    <Text>Далее</Text>
  </TouchableOpacity>
);

export default Submit;
