import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import {NavigationProp, SCREENS} from '../navigation';
import Input from '../components/PlantEdit/Input';
import {PlantEditStyles} from './PlantEditStyles';
import DatePicker from '../components/PlantEdit/DatePicker';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {pushToPlantsList} from '../actions';
import {Plant} from '../Plant';
import {generateRandomChars} from '../utils/random';
import {EditStep, EditStepCodes} from '../components/PlantEdit';
import PhotoPicker from '../components/PlantEdit/PhotoPicker';

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
  const editedItem = useRef<Plant>(plantItem);
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
              // @ts-ignore
              editedItem.current[currentStep.plantEditingField] = submittedText;
              getNextStep();
            }}
          />
        );
      case EditStepCodes.datePicker:
        return (
          <DatePicker
            onSubmit={(submittedDate) => {
              // @ts-ignore
              editedItem.current[currentStep.plantEditingField] = submittedDate;
              getNextStep();
            }}>
            datePicker
          </DatePicker>
        );
      case EditStepCodes.image:
        return (
          <PhotoPicker
            initialImage={editedItem.current.image}
            onSubmit={(file) => {
              // @ts-ignore
              editedItem.current[currentStep.plantEditingField] = file;
              getNextStep();
            }}
          />
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
