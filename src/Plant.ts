import {Plant} from './components/Listing';
import {ImageSourcePropType} from 'react-native';

export type Plant = Record<PlantKeys, PlantValues>;

export enum PlantKeys {
  id = 'id',
  image = 'image',
  name = 'name',
  species = 'species',
  birthDay = 'birthDay',
}

export type PlantValues = string | ImageSourcePropType | Date;

type PlantIdGetter = (plant: Plant) => string;
export const getPlantId: PlantIdGetter = (plant) => plant.id as string;

type PlantNameGetter = (plant: Plant) => string;
export const getPlantName: PlantNameGetter = (plant) => plant.name as string;

type PlantBirthDayGetter = (plant: Plant) => number;
export const getPlantBirthDay: PlantBirthDayGetter = (plant) => plant.birthDay;

type PlantImageGetter = (plant: Plant) => ImageSourcePropType;
export const getPlantImage: PlantImageGetter = (plant) =>
  plant.image as ImageSourcePropType;
