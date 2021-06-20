import {Plant} from '../../Plant';

export enum EditStepCodes {
  input,
  image,
  datePicker,
  success,
  water,
}

export type EditStep = {
  code: EditStepCodes;
  plantEditingField: keyof Plant;
  title: string;
  optional?: boolean;
  isLastStep?: boolean;
};
