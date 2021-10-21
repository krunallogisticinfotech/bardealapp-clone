import React from 'react';
import {Text, View, SafeAreaView, Image, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Logo from '../assets/Logo.png';
import AirbnbCerealMedium from '../assets/fonts/'
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
    color: '#333',
    fontSize: 40,
    backgroundColor: 'red',
    fontFamily: ${Fonts.font.AirbnbCerealMedium}
  },
});

export default Loginscreen;
