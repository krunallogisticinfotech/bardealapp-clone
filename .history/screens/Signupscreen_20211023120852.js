import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Logo from '../assets/Logo.png';
const Signupscreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.logoSection}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.logoSection}>
        <Image source={Logo} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
};

export default Signupscreen;

const styles = StyleSheet.create({
  logoSection: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'center'
  },
  logo: {
    width: 80,
    height: 80,
  },
});
