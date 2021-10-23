import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Logo from '../assets/Logo.png';
const Signupscreen = () => {
  return (
    <View>
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
    justifyContent: 'center',
    height: 50,
  },
  logo: {
    width: 50,
    height: 50,
  },
});
