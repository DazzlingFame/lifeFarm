import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationProp, SCREENS} from '../navigation';
import {ListingStyles} from './ListingStyles';
import {EmptyState, PlantCard} from '../components/Listing';
import AddPlantButton from '../components/Listing/AddPlantButton';
import asyncStorage from '../utils/asyncStorage';
import {PLANTS_ARRAY_KEY} from '../constants';
import {connect} from 'react-redux';
import {AppState} from '../reducers';
import {Dispatch} from 'redux';
import {setPlantsList} from '../actions';
import {getPlantId, Plant} from '../Plant';
import {EditStep, initialPlantAddSteps} from '../components/PlantEdit';

type StateProps = {
  plantsArray: Plant[];
};

type DispatchProps = {
  setPlants: (plantsArray: Plant[]) => void;
};

type Props = NavigationProp<{}> & StateProps & DispatchProps;

const Listing: React.FC<Props> = ({setPlants, navigation, plantsArray}) => {
  useEffect(() => {
    asyncStorage
      .getItem<Plant[] | undefined>(PLANTS_ARRAY_KEY)
      .then((savedPlants) => {
        setPlants(savedPlants || []);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPlantCardPressed = (plantItem: Plant) => {
    navigation.navigate(SCREENS.PlantView.name, {plant: plantItem});
  };

  const onDeletePlant = (plantItem: Plant) => {
    const filteredPlantItems = plantsArray.filter(
      (item) => item.name !== plantItem.name,
    );
    setPlants(filteredPlantItems);
    asyncStorage.saveItem(PLANTS_ARRAY_KEY, filteredPlantItems).then(() => {});
  };

  const onPlantEditPressed = (steps: EditStep[]) => {
    navigation.push(SCREENS.PlantEdit.name, {steps});
  };

  return (
    <View style={ListingStyles.container}>
      {!plantsArray?.length ? (
        <EmptyState
          onPress={() => {
            onPlantEditPressed(initialPlantAddSteps);
          }}
        />
      ) : (
        <>
          <FlatList
            numColumns={2}
            data={plantsArray}
            contentContainerStyle={ListingStyles.contentContainer}
            renderItem={(renderItem) => (
              <PlantCard
                item={renderItem.item}
                onPress={() => onPlantCardPressed(renderItem.item)}
                onLongPress={() => onDeletePlant(renderItem.item)}
                key={getPlantId(renderItem.item)}
              />
            )}
          />
          <AddPlantButton
            onPress={() => {
              onPlantEditPressed(initialPlantAddSteps);
            }}
          />
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    plantsArray: state.plantsArray,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setPlants: (plantsList: Plant[]) => dispatch(setPlantsList(plantsList)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
