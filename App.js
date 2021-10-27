import React from 'react';
import 'react-native-gesture-handler';
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
import Clicksearchscreeen from './screens/Clicksearchscreeen';
import Notificationscreen from './screens/Notificationscreen';
//icons

import Homeicon from 'react-native-vector-icons/FontAwesome';
import Hearticon from 'react-native-vector-icons/FontAwesome';
import Usericon from 'react-native-vector-icons/FontAwesome5';
import Scanicon from './assets/scan.png';
import Bellicon from 'react-native-vector-icons/FontAwesome';
//importts

import {TouchableOpacity, View, Image} from 'react-native';

const Stack = createNativeStackNavigator();
const App = () => {
  const MyTheme = {
    colors: {
      background: 'transperent',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
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
        <Stack.Screen name="Clicksearch" component={Clicksearchscreeen} />
        <Stack.Screen name="Notification" component={Notificationscreen} />
        <Stack.Screen name="Scanqr" component={Scanqrscreen} />
        <Stack.Screen name="Home" component={Hometab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

const Hometab = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Homescreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FF7465',
        tabBarInactiveTintColor: '#D8D8D8',

        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#fff',
          borderColor: '#fff',
          height: 100,
          paddingTop: 10,
          borderRadius: 35,
          borderWidth: 1,
        },
      }}>
      <Tab.Screen
        name="Hometab"
        component={Homescreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Homeicon name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Carttab"
        component={Likescreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Hearticon name="heart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Scantab"
        component={Scanqrscreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Scanqr')}>
              <View>
                <Image
                  style={{width: 80, height: 80, marginTop: -60}}
                  source={Scanicon}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Liketab"
        component={Notificationscreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Bellicon name="bell" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profiletab"
        component={Profilescreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Usericon name="user-alt" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
