import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from './navigation';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

const Stack = createStackNavigator();

const App = () => {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={SCREENS.Listing.name}
            component={SCREENS.Listing.component}
          />
          <Stack.Screen
            name={SCREENS.PlantView.name}
            component={SCREENS.PlantView.component}
          />
          <Stack.Screen
            name={SCREENS.PlantEdit.name}
            component={SCREENS.PlantEdit.component}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
