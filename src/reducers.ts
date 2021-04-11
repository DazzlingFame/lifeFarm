import {AnyAction, combineReducers, Reducer} from 'redux';
import {Plant} from './components/Listing';
import {
  ActionPushToPlantsList,
  ActionSetPlantsList,
  PUSH_TO_PLANTS_LIST,
  SET_PLANTS_LIST,
} from './actions';
import asyncStorage from './utils/asyncStorage';
import {PLANTS_ARRAY_KEY} from './constants';

const plantsArray = (
  state: Plant[] = [],
  action: ActionSetPlantsList | ActionPushToPlantsList,
) => {
  switch (action.type) {
    case SET_PLANTS_LIST:
      asyncStorage.saveItem(PLANTS_ARRAY_KEY, action.plantsList);
      return action.plantsList;
    case PUSH_TO_PLANTS_LIST:
      state.push(action.plant);
      asyncStorage.saveItem(PLANTS_ARRAY_KEY, state);
      return state;
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
