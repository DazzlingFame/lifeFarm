import {Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {useState} from 'react';
import {InputStyles} from './InputStyles';
import Submit from './Submit';
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = {
  initialDate?: number;
  onSubmit: (date: number) => void;
};

const DatePicker: React.FC<Props> = ({initialDate = Date.now(), onSubmit}) => {
  const [date, setDate] = useState(new Date(initialDate));
  const [show, setShow] = useState(false);

  const onChange = (event: Event, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <View style={InputStyles.container}>
      <TouchableWithoutFeedback onPress={() => setShow(true)}>
        <Text>{date.toDateString()}</Text>
      </TouchableWithoutFeedback>
      {show && (
        <DateTimePicker value={date} onChange={onChange} mode={'date'} />
      )}
      <Submit onPress={() => onSubmit(date.getTime())} />
    </View>
  );
};

export default DatePicker;
