import {Plant} from './components/Listing';
import {ImageSourcePropType} from 'react-native';

export type Plant = Record<PlantKeys, PlantValues>;

export enum PlantKeys {
  image = 'image',
  name = 'name',
  species = 'species',
  birthDay = 'birthDay',
}

export type PlantValues = string | ImageSourcePropType | Date;

type PlantNameGetter = (plant: Plant) => string;
export const getPlantName: PlantNameGetter = (plant) => plant.name as string;

type PlantImageGetter = (plant: Plant) => ImageSourcePropType;
export const getPlantImage: PlantImageGetter = (plant) =>
  plant.image as ImageSourcePropType;
