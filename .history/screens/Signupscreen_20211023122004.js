import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Logo from '../assets/Logo.png';
const Signupscreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logoHeader}>
          <Image source={Logo} />
        </View>
        <View style={styles.signinText}>
          <Text>Already have</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signupscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    backgroundColor: 'green',
  },
  logoHeader: {
    flex: 3,
    alignItems: 'center',
  },
});
