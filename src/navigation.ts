import {ComponentClass, FunctionComponent} from 'react';
import {Listing} from './screens/Listing';
import {PlantView} from './screens/PlantView';

export type NavigationProp = {
  navigation: {
    navigate: (screenName: string, params?: any) => void;
  };
};

type Screen = {
  name: string;
  component: ComponentClass<any, any> | FunctionComponent<any>;
};

type Screens = Record<string, Screen>;

export const SCREENS: Screens = {
  Listing: {
    name: 'Listing',
    component: Listing,
  },
  PlantView: {
    name: 'PlantView',
    component: PlantView,
  },
};
