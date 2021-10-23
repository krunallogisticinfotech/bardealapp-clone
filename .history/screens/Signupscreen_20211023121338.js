import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Logo from '../assets/Logo.png';
const Signupscreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoSection}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.signinText}>
        <Text>Already</Text>
      </View>
    </SafeAreaView>
  );
};

export default Signupscreen;

const styles = StyleSheet.create({
  
});
