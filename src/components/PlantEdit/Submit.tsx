import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SubmitStyles} from './SubmitStyles';

type Props = {
  text?: string;
  onPress: () => void;
};

const Submit: React.FC<Props> = ({text, onPress}) => (
  <TouchableOpacity style={SubmitStyles.container} onPress={onPress}>
    <Text>{text || 'Далее'}</Text>
  </TouchableOpacity>
);

export default Submit;
