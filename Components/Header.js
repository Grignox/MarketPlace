import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import { white } from 'color-name';

function Header(){

    return(
        <View style={Styles.mainContainer}>
            <View style={Styles.headerContainer}>
                <Text style={Styles.nameApp}>
                    Marketplace
                </Text>
                
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    mainContainer :{
        height: 100,
        backgroundColor: '#012941'
    },
    headerContainer:{
        flex: 1,
        justifyContent: "center",
        paddingTop : 50,
        paddingBottom: 20,
        alignContent: "center",
       flexDirection: "row",
        
    },
    nameApp:{
        color:'white',
        fontSize: 20
    }
    
})
export default Header;