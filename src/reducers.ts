import {AnyAction, combineReducers, Reducer} from 'redux';
import {
  ActionPushToPlantsList,
  ActionSetPlantsList,
  PUSH_TO_PLANTS_LIST,
  SET_PLANTS_LIST,
} from './actions';
import asyncStorage from './utils/asyncStorage';
import {PLANTS_ARRAY_KEY} from './constants';
import {Plant} from './Plant';

const plantsArray = (
  state: Plant[] = [],
  action: ActionSetPlantsList | ActionPushToPlantsList,
) => {
  switch (action.type) {
    case SET_PLANTS_LIST:
      asyncStorage.saveItem(PLANTS_ARRAY_KEY, action.plantsList);
      return action.plantsList;
    case PUSH_TO_PLANTS_LIST:
      const plantIndex = state.findIndex((item) => item.id === action.plant.id);
      if (plantIndex > -1) {
        state[plantIndex] = action.plant;
        asyncStorage.saveItem(PLANTS_ARRAY_KEY, state);
        return [...state];
      }
      const appendedState = [...state];
      appendedState.push(action.plant);
      asyncStorage.saveItem(PLANTS_ARRAY_KEY, appendedState);
      return appendedState;
    default:
      return state;
  }
};

const reducers = combineReducers({
  plantsArray,
});

export type AppState = ReturnType<typeof reducers>;

const rootReducer: Reducer<AppState, AnyAction> = (state, action) => {
  // @ts-ignore
  return reducers(state, action);
};

export default rootReducer;
