import React from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import Logo from '../assets/Logo.png';
const Loginscreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Image source={Logo} />
      </View>
    </SafeAreaView>
  );
};

export default Loginscreen;
