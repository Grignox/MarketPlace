/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import FormConnexion from './Components/FormConnexion';
import FormInscription from './Components/FormInscription';


import Header from './Components/Header';

const App: () => React$Node = () => {
  return (
    <>
     <Header/>
     <FormInscription/>
    </>
  );
};


export default App;
