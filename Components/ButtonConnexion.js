import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

function ButtonConnexion(){

    return(
        <View style={Styles.buttonContainer}>
            <TouchableOpacity
            
            onPress={() => {}} 
             >
          <Text style={Styles.formButton}>Connexion</Text>
        </TouchableOpacity>
        </View>
    )
}
const Styles = StyleSheet.create({
   
    buttonContainer:{
        marginTop: 10
    },
    formButton:{
        color: 'white',
        backgroundColor: '#ff821d',
        width: 100,
        textAlign: "center"

    }

})

export default ButtonConnexion;