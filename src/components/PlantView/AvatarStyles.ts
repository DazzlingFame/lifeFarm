import {StyleSheet} from 'react-native';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../constants';

export const AvatarStyles = StyleSheet.create({
  shadowContainer: {overflow: 'hidden', paddingBottom: 5},
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: WINDOW_HEIGHT * 0.3,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    flex: 1,
    width: WINDOW_WIDTH,
    alignSelf: 'center',
  },
});
