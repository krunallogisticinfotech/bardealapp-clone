import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Logo from '../assets/Logo.png';
import FacebookIcon from 'react-native-vector-icons/Entypo';
import GoogleIcon from 'react-native-vector-icons/Entypo';
const Signupscreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logoHeader}>
          <Image source={Logo} />
          <Text style={styles.signInText}>Register in to Bardeal</Text>
          <Text style={styles.accountText}>
            Already have an account?
            <Text
              style={{color: '#FC3637'}}
              onPress={() => navigation.navigate('Login')}>
              {' '}
              Sign In
            </Text>
          </Text>
        </View>
        <View style={styles.socialIcons}>
          <FacebookIcon
            name="facebook-with-circle"
            color="#3B5999"
            size={50}
            style={styles.facebookIcon}
            onPress={() => console.log('facebook')}
          />
          <GoogleIcon
            name="google--with-circle"
            color="#FC3637"
            size={50}
            style={styles.googleIcon}
            onPress={() => console.log('google plus')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signupscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logoHeader: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  signInText: {
    marginTop: 25,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    height: 20,
    fontWeight: '600',
  },
  accountText: {
    height: 20,
    fontSize: 14,
    color: '#001833',
  },
  socialIcons:{
    flex: 2,
    flexDirection:'column',
    
  }
});
