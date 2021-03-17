import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import {NavigationProp, SCREENS} from '../navigation';
import {Plant} from '../components/Listing';
import Input from '../components/PlantEdit/Input';
import asyncStorage from '../utils/asyncStorage';
import {PLANTS_ARRAY_KEY} from '../constants';
import {PlantEditStyles} from './PlantEditStyles';

export enum EditStepCodes {
  input,
  photo,
  datePicker,
  success,
}

export type EditStep = {
  code: EditStepCodes;
  plantEditingField: string;
  title: string;
  optional?: boolean;
  isLastStep?: boolean;
};

type OwnProps = {
  plantItem: Plant;
  currentStep: EditStep;
  steps: EditStep[];
};

type Props = NavigationProp<OwnProps>;

const PlantEdit: React.FC<Props> = ({route, navigation}) => {
  const {steps, plantItem, currentStep} = route.params;
  const editedItem = useRef(
    plantItem || {
      name: '',
      species: '',
    },
  );
  let currentStepIndex = steps.findIndex(
    (step) => step.plantEditingField === currentStep.plantEditingField,
  );

  const getCurrentStepComponent = () => {
    switch (currentStep?.code) {
      case EditStepCodes.input:
        return (
          <Input
            step={currentStep}
            onSubmit={(submittedText) => {
              switch (currentStep.plantEditingField) {
                case 'name':
                  editedItem.current.name = submittedText;
                  break;
                case 'species':
                  editedItem.current.species = submittedText;
                  break;
              }
              getNextStep();
            }}
          />
        );
      case EditStepCodes.datePicker:
        return <Text>datePicker</Text>;
      case EditStepCodes.photo:
        return <Text>photo</Text>;
      default:
        return <Text>EMPTY</Text>;
    }
  };

  const getNextStep = () => {
    console.log('INDEX', currentStepIndex, steps.length);
    if (currentStepIndex + 1 === steps.length) {
      asyncStorage
        .getItem<Plant[] | undefined>(PLANTS_ARRAY_KEY)
        .then((plantsArray) => {
          let newPlantsArray: Plant[] = [];
          if (plantsArray?.length) {
            newPlantsArray = plantsArray;
          }
          newPlantsArray.push(editedItem.current);
          asyncStorage.saveItem(PLANTS_ARRAY_KEY, newPlantsArray).then(() => {
            navigation.popToTop();
            navigation.navigate(SCREENS.PlantView.name, {
              plant: editedItem.current,
            });
          });
        });
    } else {
      navigation.push(SCREENS.PlantEdit.name, {
        plantItem: editedItem.current,
        currentStep: steps[currentStepIndex + 1],
        steps,
      });
    }
  };

  return (
    <View style={PlantEditStyles.container}>
      <Text style={PlantEditStyles.header}>{currentStep.title}</Text>
      {getCurrentStepComponent()}
    </View>
  );
};

export default PlantEdit;
