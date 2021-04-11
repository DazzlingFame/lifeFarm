import {EditStep, EditStepCodes} from '../../screens/PlantEdit';
import {PlantKeys} from '../../Plant';

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

export const editBirtDayStep = {
  title: 'Когда он у тебя появился?',
  code: EditStepCodes.datePicker,
  plantEditingField: PlantKeys.birthDay,
};

export const initialPlantAddSteps: EditStep[] = [
  editNameStep,
  editSpeciesStep,
  editBirtDayStep,
];
