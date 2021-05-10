import {PlantKeys} from '../../Plant';

export enum EditStepCodes {
  input,
  image,
  datePicker,
  success,
}

export type EditStep = {
  code: EditStepCodes;
  plantEditingField: PlantKeys;
  title: string;
  optional?: boolean;
  isLastStep?: boolean;
};
