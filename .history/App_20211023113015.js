import React from 'react';
import Loginscreen from './screens/Loginscreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  return (
    <>
      <Loginscreen />
    </>
  );
};

export default App;
