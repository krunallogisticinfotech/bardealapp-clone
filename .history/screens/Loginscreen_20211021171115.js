import React from 'react';
import {Text, View, SafeAreaView, Image,StyleSheet} from 'react-native';
import Logo from '../assets/Logo.png';
const Loginscreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={Logo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        marginTop:15px
    }
})

export default Loginscreen;
