import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const SubmitStyles = StyleSheet.create({
  container: {
    marginTop: 12,
    alignSelf: 'center',
    borderRadius: 20,
    fontSize: 20,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.inputBackground,
  },
});
