import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Backarrow from 'react-native-vector-icons/Ionicons';
const Otpscreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default Otpscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  },
});
