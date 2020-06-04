//AJOUTER DANS CE SCRIPT LA FONCTION POUR VERIFIER SI LE USER EST CONNECTE PUIS SUPPRIMER CE COMMENTAIRE
//
//
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Chargement</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})