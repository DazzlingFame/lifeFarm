import {KeyboardTypeOptions, TextInput, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {InputStyles} from './InputStyles';
import Submit from './Submit';

type Props = {
  initialText?: string;
  keyboardType?: KeyboardTypeOptions;
  onSubmit: (text: string) => void;
};

const Input: React.FC<Props> = ({initialText, onSubmit, keyboardType}) => {
  const [currentText, setCurrentText] = useState(initialText || '');
  let inputRef = useRef<TextInput>(null);
  useEffect(() => {
    inputRef.current?.focus?.();
  });
  return (
    <View style={InputStyles.container}>
      <TextInput
        ref={inputRef}
        style={InputStyles.input}
        onChangeText={(text) => setCurrentText(text)}
        keyboardType={keyboardType ?? 'default'}
      />
      <Submit onPress={() => onSubmit(currentText)} />
    </View>
  );
};

export default Input;
