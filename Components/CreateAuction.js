import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

class CreateAuction extends React.Component {
    state = { titre: '', date_debut: '', date_fin: '', image: '', categorie: '', errorMessage: null}
    handleCreateAuction = () => {
        //code pour firebase A AJOUTER BORDEL DE MERDE JPP DE CE PROJET SMAH

        console.log('handleCreateAuction')
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.CreateAuction}>
                    <Text style={styles.title}>Création d'enchère</Text>
                    {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                    {this.state.errorMessage}
                    </Text>}
                    <TextInput 
                        style={styles.textinput} 
                        placeholder="Titre"
                        underlineColorAndroid={'transparent'}
                        onChangeText={titre => this.setState({ titre })}
                        value={this.state.titre}/>                    
                    <TextInput 
                        style={styles.textinput} 
                        placeholder="Date de début"
                        underlineColorAndroid={'transparent'}
                        onChangeText={date_debut => this.setState({ date_debut })}
                        value={this.state.date_debut}/>
                    <TextInput 
                        style={styles.textinput} 
                        placeholder="Date de fin"
                        underlineColorAndroid={'transparent'}
                        onChangeText={date_fin => this.setState({ date_fin })}
                        value={this.state.date_fin}/>
                    <TextInput 
                        style={styles.textinput} 
                        placeholder="Image"
                        underlineColorAndroid={'transparent'}
                        onChangeText={image => this.setState({ image })}
                        value={this.state.image}/>
                    <TextInput 
                        style={styles.textinput} 
                        placeholder="Catégorie"
                        underlineColorAndroid={'transparent'}
                        onChangeText={categorie => this.setState({ categorie })}
                        value={this.state.categorie}/>
                    <TouchableOpacity
                        style={styles.btntext}  
                        onPress={this.handleCreateAuction}>
                            <Text>Ajouter une enchère</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('FormConnexion')}>
                        <Text>RETOUR</Text>
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

    CreateAuction: {
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

export default CreateAuction;