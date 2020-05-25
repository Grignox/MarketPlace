import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import auth from '@react-native-firebase/auth';



 class ButtonDeconnexion extends React.Component{
     _deconnect(){
        auth()
    .signOut()
    .then(() => console.log('User signed out!'));
    };

    render(){
    return(
        <View style={Styles.buttonContainer}>
            <TouchableOpacity
            style = {Styles.button}
            onPress={() => this._deconnect()}
             >
          <Text style={Styles.formButton}>Se déconnecter</Text>
        </TouchableOpacity>
        </View>
    )
    }
}
const Styles = StyleSheet.create({
   
    buttonContainer:{
        marginTop: 10,
        borderRadius : 30
    },
    button:{
        borderRadius : 30
    },
    formButton:{
        color: 'white',
        backgroundColor: '#ff821d',
        width: 100,
        textAlign: "center"

    }

})

export default ButtonDeconnexion;