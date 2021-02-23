import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from './navigation';

const Stack = createStackNavigator();

const App = () => {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
