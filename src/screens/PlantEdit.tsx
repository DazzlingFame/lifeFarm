import React, {useRef} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  NativeModules,
} from 'react-native';
import {NavigationProp, SCREENS} from '../navigation';
import {Plant} from '../components/Listing';
import Input from '../components/PlantEdit/Input';
import {PlantEditStyles} from './PlantEditStyles';
import DatePicker from '../components/PlantEdit/DatePicker';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {pushToPlantsList} from '../actions';
import {PlantKeys} from '../Plant';
import {generateRandomChars} from '../utils/random';

const {CameraModule} = NativeModules;

export enum EditStepCodes {
  input,
  photo,
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

type DispatchProps = {
  addNewPlant: (plant: Plant) => void;
};

type OwnProps = {
  plantItem: Plant;
  steps: EditStep[];
  currentStep?: EditStep;
};

type Props = NavigationProp<OwnProps> & DispatchProps;

const PlantEdit: React.FC<Props> = ({addNewPlant, route, navigation}) => {
  const {steps, plantItem} = route.params;
  const editedItem = useRef<Plant>(
    plantItem || {
      name: '',
      species: '',
    },
  );
  const currentStep = route.params.currentStep ?? steps[0];
  let currentStepIndex = steps.findIndex(
    (step) => step.plantEditingField === currentStep.plantEditingField,
  );

  const getCurrentStepComponent = () => {
    switch (currentStep?.code) {
      case EditStepCodes.input:
        return (
          <Input
            onSubmit={(submittedText) => {
              editedItem.current[currentStep.plantEditingField] = submittedText;
              getNextStep();
            }}
          />
        );
      case EditStepCodes.datePicker:
        return (
          <DatePicker
            onSubmit={(submittedDate) => {
              editedItem.current[currentStep.plantEditingField] = submittedDate;
              getNextStep();
            }}>
            datePicker
          </DatePicker>
        );
      case EditStepCodes.photo:
        return (
          <TouchableWithoutFeedback
            onPress={() => {
              CameraModule.createCameraEvent('q', 'q');
            }}>
            <Text>photo</Text>
          </TouchableWithoutFeedback>
        );
      default:
        return <Text>EMPTY</Text>;
    }
  };

  const getNextStep = () => {
    if (currentStepIndex + 1 === steps.length) {
      editedItem.current.id = generateRandomChars();
      addNewPlant(editedItem.current);
      navigation.popToTop();
      navigation.navigate(SCREENS.PlantView.name, {
        plant: editedItem.current,
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addNewPlant: (plant: Plant) => {
    dispatch(pushToPlantsList(plant));
  },
});

export default connect(null, mapDispatchToProps)(PlantEdit);
