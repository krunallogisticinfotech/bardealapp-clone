import React from 'react';
import {Text, View, SafeAreaView, Image, StyleSheet} from 'react-native';
import Logo from '../assets/Logo.png';
import FacebookIcon from '../assets/Facebook.png';
import GoogleIcon from '../assets/Google.png';
import AppleIcon from '../assets/Apple.png';

const Loginscreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.applogo} source={Logo} />
        <Text style={styles.logoHeading}>Login in to bardeal</Text>
        <Text style={styles.accountText}>
          Don't have an account?
          <Text onPress={console.log('Singup')} style={styles.signupText}>
            SignUp
          </Text>
        </Text>
        <View style={styles.socialIconContainer}>
          <Image style={styles.FacebookIcon} source={FacebookIcon} />
          <Image style={styles.GoogleIcon} source={GoogleIcon} />
          <Image style={styles.AppleIcon} source={AppleIcon} />
        </View>
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
    fontSize: 22,
    height: 25,
    fontWeight: '600',
    marginTop: 40,
  },
  accountText: {
    fontSize: 16,
    height: 20,
    marginTop: 20,
  },
  signupText: {
    color: '#FF7465',
    height: 20,
  },
  socialIconContainer:{
    flex: 2,
    flexDirection:'row',
  },
  FacebookIcon:{
    width: 100,
    height: 100,
    backgroundColor:'red',
  },
  GoogleIcon:{
    width: 50,
    height: 50,
    backgroundColor:'blue',
  },
  

});

export default Loginscreen;
