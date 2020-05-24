import React, { useState, useEffect } from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import ButtonConnexion from '../Components/ButtonConnexion';
import auth from '@react-native-firebase/auth';

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
        <View style={Styles.MainContainer}>
        <View style={Styles.form}>
            <Text style={Styles.formTitle}>
                Se connecter
            </Text>
            <TextInput style={Styles.formInput} placeholder='Adresse e-mail' />
            <TextInput style={Styles.formInput} placeholder='Mot de passe' />
            <ButtonConnexion style={Styles.formButton}/>
        </View>
    </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}


// function FormConnexion(){

//     return(
//         <View style={Styles.MainContainer}>
//             <View style={Styles.form}>
//                 <Text style={Styles.formTitle}>
//                     Se connecter
//                 </Text>
//                 <TextInput style={Styles.formInput} placeholder='Adresse e-mail' />
//                 <TextInput style={Styles.formInput} placeholder='Mot de passe' />
//                 <ButtonConnexion style={Styles.formButton}/>
//             </View>
//         </View>
//     )

// }

const Styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5' 

    },
    formTitle:{
        color: 'white',
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center"

    },
    formInput:{
        height: 20,
        width: 200,
        marginBottom : 10,
        textAlign: "center",
        backgroundColor: 'white'
    },
    form:{
        backgroundColor: '#012941',
        paddingLeft : 50,
        paddingRight : 50,
        flex: 0.25,
        justifyContent:'center',
        alignItems: 'center',
    },
  
})

export default Auth;