import React from 'react';
import {Text, View, SafeAreaView, Image, StyleSheet} from 'react-native';
import Logo from '../assets/Logo.png';
const Loginscreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.Applogo} source={Logo} />
        <Text style={styles.}>Login in to bardeal</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  Applogo: {
    marginTop: 50,
  },
});

export default Loginscreen;
