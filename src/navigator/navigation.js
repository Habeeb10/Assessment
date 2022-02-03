import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Character from '../screens/Character';
import Episode from '../screens/Episode';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="character" component={Character} />
        <Stack.Screen name="episode" component={Episode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
