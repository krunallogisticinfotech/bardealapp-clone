// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {NavigationContainer} from '@react-navigation/native';
// //screens
// import Loginscreen from './screens/Loginscreen';
// import Signupscreen from './screens/Signupscreen';
// import Otpscreen from './screens/Otpscreen';
// import Forgetscreen from './screens/Forgetscreen';
// import Resetscreen from './screens/Resetscreen';
// import Onbordingscreens from './screens/Onbordingscreens';
// import Categoryscreen from './screens/Categoryscreen';

// const Stack = createNativeStackNavigator();
// const MyTheme = {
//   colors: {
//     background: 'transperent',
//   },
// };

// function App() {
//   return (
//     <NavigationContainer theme={MyTheme}>
//       <Stack.Navigator
//         screenOptions={{headerShown: false}}
//         initialRouteName="Category">
// <Stack.Screen name="Login" component={Loginscreen} />
// <Stack.Screen name="Signup" component={Signupscreen} />
// <Stack.Screen name="Otp" component={Otpscreen} />
// <Stack.Screen name="Forgot" component={Forgetscreen} />
// <Stack.Screen name="Reset" component={Resetscreen} />
// <Stack.Screen name="Onbording" component={Onbordingscreens} />
// <Stack.Screen name="Category" component={Categoryscreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import Loginscreen from './screens/Loginscreen';
// import Signupscreen from './screens/Signupscreen';
// import Otpscreen from './screens/Otpscreen';
// import Forgetscreen from './screens/Forgetscreen';
// import Resetscreen from './screens/Resetscreen';
// import Onbordingscreens from './screens/Onbordingscreens';
// import Categoryscreen from './screens/Categoryscreen';
// const Stack = createNativeStackNavigator();

// const Customnavigation = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{headerShown: false}}
//       initialRouteName="Login">
//       <Stack.Screen name="Login" component={Loginscreen} />
//       <Stack.Screen name="Signup" component={Signupscreen} />
//       <Stack.Screen name="Otp" component={Otpscreen} />
//       <Stack.Screen name="Forgot" component={Forgetscreen} />
//       <Stack.Screen name="Reset" component={Resetscreen} />
//       <Stack.Screen name="Onbording" component={Onbordingscreens} />
//       <Stack.Screen name="Category" component={Categoryscreen} />
//       <Stack.Screen name="Home" component={Homescreen} />
//     </Stack.Navigator>
//   );
// };
// export default Customnavigation;
