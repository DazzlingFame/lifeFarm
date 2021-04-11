import {TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {InputStyles} from './InputStyles';
import Submit from './Submit';

type Props = {
  initialText?: string;
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
