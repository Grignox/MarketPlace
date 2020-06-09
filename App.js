
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormConnexion from './Components/FormConnexion';
import FormInscription from './Components/FormInscription'
import Header from './Components/Header'
import Home from './Components/home'
import Enchere from './Components/Enchere'
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Header/> 
        <Stack.Navigator screenOptions={{ headerShown: false}} >

        <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
          name="FormInscription"
          component={FormInscription}
          />
          <Stack.Screen
          name="Enchere"
          component={Enchere}
          />
        </Stack.Navigator>

      </NavigationContainer>
    );
  }
  if(user){
  const Stack = createStackNavigator();
  return (
    <NavigationContainer
    independent = {true}>
        <Header/> 
        <Stack.Navigator screenOptions={{ headerShown: false}} >
        <Stack.Screen
          name="Enchere"
          component={Enchere}
        />
        </Stack.Navigator>

      </NavigationContainer>
    
  );
}
}

export default App;