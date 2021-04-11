import {ComponentClass, FunctionComponent} from 'react';
import Listing from './screens/Listing';
import {PlantView} from './screens/PlantView';
import PlantEdit from './screens/PlantEdit';

export type NavigationProp<T> = {
  route: {
    params: T;
  };
  navigation: {
    navigate: (screenName: string, params?: any) => void;
    push: (screenName: string, params?: any) => void;
    goBack: () => void;
    popToTop: () => void;
  };
};

type Screen = {
  name: string;
  component: ComponentClass<any, any> | FunctionComponent<any>;
};

enum ScreenNames {
  ListingName = 'Listing',
  PlantViewName = 'PlantView',
  PlantEditName = 'PlantEdit',
}

type Screens = Record<ScreenNames, Screen>;

export const SCREENS: Screens = {
  Listing: {
    name: ScreenNames.ListingName,
    component: Listing,
  },
  PlantView: {
    name: ScreenNames.PlantViewName,
    component: PlantView,
  },
  PlantEdit: {
    name: ScreenNames.PlantEditName,
    component: PlantEdit,
  },
};
