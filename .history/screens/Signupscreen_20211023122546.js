import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Logo from '../assets/Logo.png';
const Signupscreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{flex: 1, flexDirection:'', backgroundColor: 'red',padding:10}}>
          <View>
            <Image source={Logo} />
          </View>
          <View>
            <Image source={Logo} />
          </View>
        </View>
    </SafeAreaView>
  );
};

export default Signupscreen;

const styles = StyleSheet.create({});
