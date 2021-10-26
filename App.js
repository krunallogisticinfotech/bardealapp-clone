import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//tabscreems
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Likescreen from './screens/Likescreen';
import Profilescreen from './screens/Profilescreen';
import Scanqrscreen from './screens/Scanqrscreen';

//stackscreen
import Loginscreen from './screens/Loginscreen';
import Signupscreen from './screens/Signupscreen';
import Otpscreen from './screens/Otpscreen';
import Forgetscreen from './screens/Forgetscreen';
import Resetscreen from './screens/Resetscreen';
import Onbordingscreens from './screens/Onbordingscreens';
import Categoryscreen from './screens/Categoryscreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBarOptions={{
          labelStyle: {fontSize: 18},
          activeTintColor: 'red',
          inactiveTintColor: 'black',
        }}>
        <Tab.Screen name="Home" component={Homestack} />
        <Tab.Screen name="Cart" component={Cartscreen} />
        <Tab.Screen name="Scan" component={Scanqrscreen} />
        <Tab.Screen name="Like" component={Likescreen} />
        <Tab.Screen name="Profile" component={Profilescreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

const Homestack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Login" component={Loginscreen} />
      <Stack.Screen name="Signup" component={Signupscreen} />
      <Stack.Screen name="Otp" component={Otpscreen} />
      <Stack.Screen name="Forgot" component={Forgetscreen} />
      <Stack.Screen name="Reset" component={Resetscreen} />
      <Stack.Screen name="Onbording" component={Onbordingscreens} />
      <Stack.Screen name="Category" component={Categoryscreen} />
      <Stack.Screen name="Home" component={Homescreen} />
    </Stack.Navigator>
  );
};

export default App;
