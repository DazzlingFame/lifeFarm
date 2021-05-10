import {PlantKeys} from '../../Plant';
import {EditStep, EditStepCodes} from './types';

export const editNameStep = {
  title: 'Как его зовут?',
  code: EditStepCodes.input,
  plantEditingField: PlantKeys.name,
};

export const editSpeciesStep = {
  title: 'Кто он?',
  code: EditStepCodes.input,
  plantEditingField: PlantKeys.species,
};

export const editBirthDayStep = {
  title: 'Когда он у тебя появился?',
  code: EditStepCodes.datePicker,
  plantEditingField: PlantKeys.birthDay,
};

export const editPhotoStep = {
  title: 'Как он выглядит?',
  code: EditStepCodes.image,
  plantEditingField: PlantKeys.image,
};

export const initialPlantAddSteps: EditStep[] = [
  editNameStep,
  editSpeciesStep,
  editPhotoStep,
  editBirthDayStep,
];
