import React from 'react';
import {Text, View, SafeAreaView, Image, StyleSheet} from 'react-native';
import Logo from '../assets/Logo.png';
import FacebookIcon from 'react-native-vector-icons/Entypo';
import GoogleIcon from 'react-native-vector-icons/Entypo';
import AppleIcon from 'react-native-vector-icons/FontAwesome';

const Loginscreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.applogo} source={Logo} />
        <Text style={styles.logoHeading}>Login in to bardeal</Text>
        <Text style={styles.accountText}>
          Don't have an account?
          <Text onPress={console.log('Singup')} style={styles.signupText}>
            {' '}
            SignUp
          </Text>
        </Text>
        <View style={styles.socialIconContainer}>
          <FacebookIcon
            name="facebook-with-circle"
            color="#3B5999"
            size={40}
            
            style={styles.facebookIcon}
          />
          <GoogleIcon
            name="google--with-circle"
            color="#FC3637"
            size={40}
            style={styles.googleIcon}
          />
          <AppleIcon
            name="apple"
            color="#fff"
            size={40}
            style={styles.appleIcon}
          />
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
    flex: 3,
    flexDirection:'row',
  },
  facebookIcon:{
    height: 50,
    
  },
  googleIcon:{
    height: 50,
  },
  appleIcon:{
    height: 50,
    width: 50,
    backgroundColor:'#001833',
    
  },
});

export default Loginscreen;
