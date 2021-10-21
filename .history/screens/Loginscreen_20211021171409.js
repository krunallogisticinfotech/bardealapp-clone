import React from 'react';
import {Text, View, SafeAreaView, Image, StyleSheet} from 'react-native';
import Logo from '../assets/Logo.png';
const Loginscreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.Applogo} source={Logo} />
        <Text>Login in to bardeal</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  
});

export default Loginscreen;
