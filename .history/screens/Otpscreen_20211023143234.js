import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

const Otpscreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Otpscreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Otpscreen;

const styles = StyleSheet.create({
    container:{
        padding: 20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    }

});
