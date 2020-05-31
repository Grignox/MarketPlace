import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class FormInscription extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.FormInscription}>
                    <Text style={styles.title}>Inscription</Text>
                    <TextInput style={styles.textinput} placeholder="Prénom"
                    underlineColorAndroid={'transparent'}/>
                    <TextInput style={styles.textinput} placeholder="Nom"
                    underlineColorAndroid={'transparent'}/>
                    <TextInput style={styles.textinput} placeholder="Pseudo"
                    underlineColorAndroid={'transparent'}/>
                    <TextInput style={styles.textinput} placeholder="E-mail"
                    underlineColorAndroid={'transparent'}/>
                    <TextInput style={styles.textinput} placeholder="Mot de passe"
                    secureTextEntry={true} underlineColorAndroid={'transparent'}/>
                    <TextInput style={styles.textinput} placeholder="Ville"
                    underlineColorAndroid={'transparent'}/>
                    <TextInput style={styles.textinput} placeholder="Sexe"
                    underlineColorAndroid={'transparent'}/>
                    <TextInput style={styles.textinput} placeholder="Age"
                    underlineColorAndroid={'transparent'}/>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btntext}>S'enregistrer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },

    FormInscription: {
        backgroundColor: '#012941',
        paddingLeft : 50,
        paddingRight : 50,
        flex: 0.75,
        justifyContent:'center',
        alignItems: 'center', 
    },
    title: {
        color: 'white',
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center"
    },
    textinput: {
        height: 20,
        width: 200,
        marginBottom : 10,
        textAlign: "center",
        backgroundColor: 'white'
    },
    button:{
        marginTop: 10,
    },

    btntext:{
        color: 'white',
        backgroundColor: '#ff821d',
        width: 100,
        textAlign: "center",
    }
});