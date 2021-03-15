import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {EditStep} from '../../screens/PlantEdit';

type Props = {
  initialText?: string;
  step: EditStep;
  onSubmit: (text: string) => void;
};

const Input: React.FC<Props> = ({initialText, onSubmit, step}) => {
  const [currentText, setCurrentText] = useState(initialText || '');
  return (
    <View>
      <Text>{step.title}</Text>
      <TextInput onChangeText={(text) => setCurrentText(text)} />
      <TouchableOpacity onPress={() => onSubmit(currentText)}>
        <Text>Далее</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
