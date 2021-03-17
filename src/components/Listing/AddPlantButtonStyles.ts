import {StyleSheet} from 'react-native';
import {WINDOW_WIDTH} from '../../constants';

const ADD_PLANT_FAB_SIZE = 50;

export const AddPlantButtonStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: WINDOW_WIDTH * 0.05,
    bottom: WINDOW_WIDTH * 0.05,
    height: ADD_PLANT_FAB_SIZE,
    width: ADD_PLANT_FAB_SIZE,
    borderRadius: ADD_PLANT_FAB_SIZE / 2,
    backgroundColor: '#CCCCCC',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 4,
  },
  plusSign: {
    fontSize: 30,
    flex: 1,
    textAlignVertical: 'center',
  },
});
