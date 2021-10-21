import React from 'react';
import {Text, View, SafeAreaView, Image,StyleSheet} from 'react-native';
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

const style = StyleSheet.create

export default Loginscreen;
