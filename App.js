
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormConnexion from './Components/FormConnexion';
import FormInscription from './Components/FormInscription'
import Header from './Components/Header'
import Home from './Components/home'



export default class App extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Header/> 
        <Stack.Navigator screenOptions={{ headerShown: false}} >
          <Stack.Screen
          name="FormInscription"
          component={FormInscription}
          />
          <Stack.Screen
            name="FormConnexion"
            component={FormConnexion}
            
          />
          <Stack.Screen
            name="Home"
            component={Home}
            
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}