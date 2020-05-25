import React, { useState, useEffect } from 'react';
import {View, TextInput, Text, StyleSheet, ImageBackground} from 'react-native';
import ButtonConnexion from '../Components/ButtonConnexion';
import auth from '@react-native-firebase/auth';
import ButtonDeconnexion from '../Components/ButtonDeconnexion';

const image = { uri: "https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" };
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

  auth()
  .signInWithEmailAndPassword('sarah.lane@gmail.com', 'SuperSecretPassword!')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });

  if (!user) {
    return (
        <View style={Styles.MainContainer}>
            <View style={Styles.BanerContainer}>
                <ImageBackground source={image} style={Styles.image}>
                    <Text style={Styles.BannerText} >Bienvenue chez Marketplace</Text>
                </ImageBackground>
            </View>
            <View style={Styles.FormContainer}>
                <View style={Styles.Allform}>
                    <Text style={Styles.formTitle}>
                        Se connecter
                    </Text>
                    <View style={Styles.form}>
                        <TextInput style={Styles.formInput} placeholder='Adresse e-mail' />
                        <TextInput style={Styles.formInput} placeholder='Mot de passe' />
                        <ButtonConnexion style={Styles.formButton}/>
                    </View>
                </View>
            </View>
        </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <ButtonDeconnexion/>
    </View>
  );
}


const Styles = StyleSheet.create({
    MainContainer:{
        flex: 1
    },
    FormContainer: {
        flex: 2.5,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5' 

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.8
      },
    BanerContainer:{
        flex : 1,
        
    },
    BannerText:{
        color: '#ff821d',
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold"
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
        marginBottom : 30,
        textAlign: "center",
        backgroundColor: 'white'
    },
    Allform:{
        backgroundColor: '#012941',
        paddingLeft : 50,
        paddingRight : 50,
        flex: 0.5,
        justifyContent:'space-around',
        alignItems: 'center',
        borderRadius : 20
    },
    form:{
        justifyContent: 'center',
        alignItems:"center"
    }
  
})

export default Auth;