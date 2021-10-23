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
const Signupscreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logoHeader}>
          <Image source={Logo} />
          <Text style={styles.signInText}>Register in to Bardeal</Text>
          <Text style={styles.accountText}>
            Already have an account?<Text style={{color:'#FC3637'}} onPress={()=> navigation.navigate('Login')}> Sign In</Text>
          </Text>
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
    marginBottom:15,
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    height: 20,
    fontWeight: '600',
  },
  accountText: {
    height: 20,
    font
    color: '#001833',
  },
});
