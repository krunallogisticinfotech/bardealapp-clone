import React from 'react';
import {Text, View, SafeAreaView, Image,StyleSheet} from 'react-native';
import Logo from '../assets/Logo.png';
const Loginscreen = () => {
  return (
    <SafeAreaView>
      <View style={s}>
        <Image source={Logo} />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
    container:{
        flex: 1;
    }
})

export default Loginscreen;
