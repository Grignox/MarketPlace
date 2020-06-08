
import {View, TextInput, StyleSheet,Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import React, {useEffect } from 'react'





function   Enchere () {
  const reference = database().ref('/Enchere');
    const EnchereCollection = firestore().collection('/Enchere/');

    function onResult(QuerySnapshot) {
        console.log('Got Users collection result.');
      }
      
      function onError(error) {
        console.error(error);
      }
      
      EnchereCollection
        .onSnapshot(onResult, onError);
  }

const Styles = StyleSheet.create({
   
    button:{
        height:50,
        flex:1
    },

    view:{
       
    },

    textinput:{
       
        height: 50, 
        borderColor: '#20232a', 
        borderBottomWidth : 1, 
        paddingLeft:5
    },
    loading_container:{
        position: 'absolute',
        left : 0,
        right: 0,
        top : 100,
        bottom : 0,
        alignItems :'center',
        justifyContent: 'center'
    }

})

export default Enchere;