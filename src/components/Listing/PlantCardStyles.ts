import {StyleSheet} from 'react-native';
import {WINDOW_WIDTH} from '../../constants';

export const PlantCardStyles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH * 0.45,
    height: WINDOW_WIDTH * 0.45,
    marginLeft: WINDOW_WIDTH * 0.033,
    marginTop: WINDOW_WIDTH * 0.033,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan',
  },
});
