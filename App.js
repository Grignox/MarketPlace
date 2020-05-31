/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './Components/home';


import Header from './Components/Header';

const App: () => React$Node = () => {
  return (
    <>
     <Header/>
     <Home/>
    </>
  );
};


export default App;
