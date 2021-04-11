import {Plant} from './Plant';

export const SET_PLANTS_LIST = 'SET_PLANTS_LIST';
export type ActionSetPlantsList = {
  type: typeof SET_PLANTS_LIST;
  plantsList: Plant[];
};
export const setPlantsList = (plantsList: Plant[]): ActionSetPlantsList => ({
  type: SET_PLANTS_LIST,
  plantsList,
});

export const PUSH_TO_PLANTS_LIST = 'PUSH_TO_PLANTS_LIST';
export type ActionPushToPlantsList = {
  type: typeof PUSH_TO_PLANTS_LIST;
  plant: Plant;
};
export const pushToPlantsList = (plant: Plant): ActionPushToPlantsList => ({
  type: PUSH_TO_PLANTS_LIST,
  plant,
});
