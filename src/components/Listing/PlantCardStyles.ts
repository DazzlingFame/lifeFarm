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
    backgroundColor: 'rgba(250, 250, 250, 0.8)',
    borderRadius: 16,
  },
  image: {
    flex: 1,
  },
  name: {
    position: 'absolute',
    bottom: 8,
    fontSize: 16,
    textShadowColor: '#FFFFFF',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 1,
  },
});
