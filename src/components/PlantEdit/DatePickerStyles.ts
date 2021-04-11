import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const DatePickerStyles = StyleSheet.create({
  input: {
    marginTop: 24,
    borderRadius: 8,
    fontSize: 20,
    backgroundColor: COLORS.inputBackground,
    padding: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
});
