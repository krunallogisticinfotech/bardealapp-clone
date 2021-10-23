import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Backarrow from 'react-native-vector-icons/Ionicons';
const Otpscreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
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
    height: 10,
    backgroundColor:''
  },
});
