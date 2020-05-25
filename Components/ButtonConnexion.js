import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

function ButtonConnexion(){

    return(
        <View style={Styles.buttonContainer}>
            <TouchableOpacity
            style = {Styles.button}
            onPress={() => {}} 
             >
          <Text style={Styles.formButton}>Connexion</Text>
        </TouchableOpacity>
        </View>
    )
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

export default ButtonConnexion;