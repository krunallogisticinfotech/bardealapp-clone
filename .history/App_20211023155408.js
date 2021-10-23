import React from 'react';
import Loginscreen from './screens/Loginscreen';
import Signupscreen from './screens/Signupscreen';
import Otpscreen from './screens/Otpscreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Backarrow from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();
const MyTheme = {
  colors: {
    background: 'transperent',
  },
};

function App(navigaton) {
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
            title: '',
            headerLeft: () => (
              <Backarrow
                name="chevron-back-sharp"
                size={32}
                onPress={() => navigation.navigate('Login')}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
