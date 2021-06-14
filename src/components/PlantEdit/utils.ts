import {Navigation, SCREENS} from '../../navigation';
import {Plant} from '../../Plant';
import {EditStep} from './types';

type EditScreenInitializedRouter = (steps: EditStep[]) => void;

type EditScreenRouterInitializer = (
  navigation: Navigation,
  plant: Plant,
) => EditScreenInitializedRouter;
export const InitEditScreenRouter: EditScreenRouterInitializer = (
  navigation,
  plant,
) => (steps) => routeToEditScreen(navigation, plant, steps);

type EditScreenRouter = (
  navigation: Navigation,
  plantItem: Plant,
  steps: EditStep[],
) => void;
export const routeToEditScreen: EditScreenRouter = (
  navigation,
  plantItem,
  steps,
) => {
  navigation.push(SCREENS.PlantEdit.name, {
    plantItem,
    steps,
  });
};
