import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Logo from '../assets/Logo.png';
const Signupscreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logoHeader}>
          <Image source={Logo} />
          <Text style={styles.signInText}>already have accunt</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signupscreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
  },
  logoHeader:{
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
  },
  signInText:{
    ma
    textAlign:'center',
    fontSize:18,
    color:'black',
    height: 20,
    backgroundColor:'red',
  }
});
