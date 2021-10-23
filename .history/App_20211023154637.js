import React from 'react';
import Loginscreen from './screens/Loginscreen';
import Signupscreen from './screens/Signupscreen';
import Otpscreen from './screens/Otpscreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const MyTheme = {
  colors: {
    background: 'transperent',
  },
};

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Otp">
        <Stack.Screen name="Login" component={Loginscreen} />
        <Stack.Screen name="Signup" component={Signupscreen} />
        <Stack.Screen
          name="Otp"
          component={Otpscreen}
          options={{
            headerShown: true,
            title:'',
            
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
