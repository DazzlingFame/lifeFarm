import {TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {EditStep} from '../../screens/PlantEdit';
import {InputStyles} from './InputStyles';
import Submit from './Submit';

type Props = {
  initialText?: string;
  step: EditStep;
  onSubmit: (text: string) => void;
};

const Input: React.FC<Props> = ({initialText, onSubmit}) => {
  const [currentText, setCurrentText] = useState(initialText || '');
  return (
    <View style={InputStyles.container}>
      <TextInput
        style={InputStyles.input}
        onChangeText={(text) => setCurrentText(text)}
      />
      <Submit onPress={() => onSubmit(currentText)} />
    </View>
  );
};

export default Input;
