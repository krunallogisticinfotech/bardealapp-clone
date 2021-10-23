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
        <View style={styles.breakLine}>
          <View style={styles.breakBorderLeft} />
          <Text style={styles.breakText}>Or</Text>
          <View style={styles.breakBorderRight} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signupscreen;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  logoHeader: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  signInText: {
    marginTop: 25,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  accountText: {
    fontSize: 14,
    color: '#001833',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  facebookIcon: {
    marginHorizontal: 10,
  },
  googleIcon: {
    marginHorizontal: 10,
  },
  orSection: {
    flexDirection: 'row',
  },
  leftLine: {
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
  rightLine: {
    borderTopWidth: 1,
  },
  breakLine: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  breakBorderLeft: {
    textAlign: 'center',
    marginLeft: 35,
    marginRight: 10,
    marginTop: 95,
    height: 1,
    backgroundColor: '#f2f2f2',
    width: 120,
  },
  breakText: {
    fontSize: 18,
    height: 25,
    marginTop: 85,
    color: '#757575',
  },
  breakBorderRight: {
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 35,
    marginTop: 95,
    height: 1,
    backgroundColor: '#f2f2f2',
    width: 120,
  },
});
