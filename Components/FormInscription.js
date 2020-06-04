import React from 'react';
import firebase from '@react-native-firebase';
import auth from '@react-native-firebase/auth';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class FormInscription extends React.Component {
    state = { prenom: '', nom: '', pseudo: '', email: '', password: '', ville: '', sexe: '', age: '', errorMessage: null}
    handleFormInscription = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('App'))
        .catch(error => this.setState({ errorMessage: error.message }))
        console.log('handleFormInscription')
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.FormInscription}>
                    <Text style={styles.title}>Inscription</Text>
                    {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                    {this.state.errorMessage}
                    </Text>}
                    <TextInput 
                        style={styles.textinput}
                        placeholder="Prénom"
                        underlineColorAndroid={'transparent'}
                        onChangeText={prenom => this.setState({ prenom })}
                        value={this.state.prenom}/>
                    <TextInput 
                        style={styles.textinput} 
                        placeholder="Nom"
                        underlineColorAndroid={'transparent'}
                        onChangeText={nom => this.setState({ nom })}
                        value={this.state.nom}/>                    
                    <TextInput 
                        style={styles.textinput} 
                        placeholder="Pseudo"
                        underlineColorAndroid={'transparent'}
                        onChangeText={pseudo => this.setState({ pseudo })}
                        value={this.state.pseudo}/>
                    <TextInput 
                        style={styles.textinput} 
                        placeholder="E-mail"
                        underlineColorAndroid={'transparent'}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}/>
                    <TextInput 
                        style={styles.textinput} 
                        placeholder="Mot de passe"
                        secureTextEntry={true} underlineColorAndroid={'transparent'}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}/>
                    <TextInput 
                        style={styles.textinput} 
                        placeholder="Ville"
                        underlineColorAndroid={'transparent'}
                        onChangeText={ville => this.setState({ ville })}
                        value={this.state.ville}/>
                    <TextInput 
                        style={styles.textinput} 
                        placeholder="Sexe"
                        underlineColorAndroid={'transparent'}
                        onChangeText={sexe => this.setState({ sexe })}
                        value={this.state.sexe}/>
                    <TextInput 
                        style={styles.textinput} 
                        placeholder="Age"
                        underlineColorAndroid={'transparent'}
                        onChangeText={age => this.setState({ age })}
                        value={this.state.age}/>
                    <TouchableOpacity
                        style={styles.btntext}  
                        onPress={this.handleFormInscription}>
                            <Text>S'enregistrer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('FormConnexion')}>
                        <Text>Already have an account? Login</Text>
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
        flex: 0.90,
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
        height: 40,
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