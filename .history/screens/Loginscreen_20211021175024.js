import React from 'react';
import {Text, View, SafeAreaView, Image, StyleSheet} from 'react-native';
import Logo from '../assets/Logo.png';

const Loginscreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.applogo} source={Logo} />
        <Text style={styles.logoHeading}>Login in to bardeal</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  applogo: {
    marginTop: 50,
  },
  logoHeading: {
    backgroundColor: 'red',
    fontSize: 19,
   
    fontFamily:"AirbnbCerealMedium"
  },
});

export default Loginscreen;
