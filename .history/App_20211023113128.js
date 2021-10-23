import React from 'react';
import Loginscreen from './screens/Loginscreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {

  const 

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Loginscreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
