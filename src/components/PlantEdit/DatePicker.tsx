import {View} from 'react-native';
import React, {useState} from 'react';
import {InputStyles} from './InputStyles';
import Submit from './Submit';

type Props = {
  initialDate?: number;
  onSubmit: (date: number) => void;
};

const DatePicker: React.FC<Props> = ({initialDate = Date.now(), onSubmit}) => {
  const [currentDate] = useState(initialDate);
  return (
    <View style={InputStyles.container}>
      <Submit onPress={() => onSubmit(currentDate)} />
    </View>
  );
};

export default DatePicker;
