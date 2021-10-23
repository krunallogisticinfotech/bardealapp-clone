import * as React from 'react';
import Loginscreen from './screens/Loginscreen';
import Signupscreen from './screens/Signupscreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Loginscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
