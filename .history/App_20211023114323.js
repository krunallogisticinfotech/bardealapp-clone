import React from 'react';
import Loginscreen from './screens/Loginscreen';
import Signupscreen from './screens/Signupscreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerS}}>
        <Stack.Screen name="Login" component={Loginscreen} />
        <Stack.Screen name="Signup" component={Signupscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
