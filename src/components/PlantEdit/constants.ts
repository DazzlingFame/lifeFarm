import {EditStep, EditStepCodes} from '../../screens/PlantEdit';
import {PlantKeys} from '../../Plant';

export const initialPlantAddSteps: EditStep[] = [
  {
    title: 'Как его зовут?',
    code: EditStepCodes.input,
    plantEditingField: PlantKeys.name,
  },
  {
    title: 'Кто он?',
    code: EditStepCodes.input,
    plantEditingField: PlantKeys.species,
  },
  {
    title: 'Когда он у тебя появился?',
    code: EditStepCodes.datePicker,
    plantEditingField: PlantKeys.birthDay,
  },
];
