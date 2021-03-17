import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const InputStyles = StyleSheet.create({
  input: {
    marginTop: 24,
    borderRadius: 8,
    fontSize: 20,
    backgroundColor: COLORS.inputBackground,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
});
