import {EditStep, EditStepCodes} from './types';

export const editNameStep: EditStep = {
  title: 'Как его зовут?',
  code: EditStepCodes.input,
  plantEditingField: 'name',
};

export const editSpeciesStep: EditStep = {
  title: 'Кто он?',
  code: EditStepCodes.input,
  plantEditingField: 'species',
};

export const editBirthDayStep: EditStep = {
  title: 'Когда он у тебя появился?',
  code: EditStepCodes.datePicker,
  plantEditingField: 'birthDay',
};

export const editPhotoStep: EditStep = {
  title: 'Как он выглядит?',
  code: EditStepCodes.image,
  plantEditingField: 'image',
};

export const editInfoStep: EditStep = {
  title: 'Что ещё хочешь о нём рассказать?',
  code: EditStepCodes.input,
  plantEditingField: 'info',
};

export const editWateringStep: EditStep = {
  title: 'Раз в сколько дней его поливать',
  code: EditStepCodes.water,
  plantEditingField: 'waterInterval',
};

export const initialPlantAddSteps: EditStep[] = [
  editNameStep,
  editSpeciesStep,
  editPhotoStep,
  editBirthDayStep,
];
