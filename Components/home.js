import React, { useState, useEffect } from 'react';
import {View, TextInput, Text, StyleSheet, ImageBackground} from 'react-native';
import ButtonConnexion from '../Components/ButtonConnexion';
import auth from '@react-native-firebase/auth';
import FormConnexion  from '../Components/FormConnexion'
import ButtonDeconnexion from '../Components/ButtonDeconnexion';




function Auth() {
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
      
    return (
       <FormConnexion/>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <ButtonDeconnexion/>
    </View>
  );
}



export default Auth;