import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

class ButtonConnexion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    
    onChangeText(text) {
        // DO WHATEVER YOU NEED TO DO WITH WHAT USER ENTERED!!!
        if (text) {
           alert('Blank');
        }
        this.setState({ email, password });
  }
    render(){
        return(
            <View style={Styles.buttonContainer}>
                <TouchableOpacity
                style = {Styles.button}
                onPress={() => this._connect()}
                >
            <Text style={Styles.formButton}>Connexion</Text>
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

export default ButtonConnexion;