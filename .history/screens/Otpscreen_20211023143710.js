import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Backarrow from 'react-native-vector-icons/Ionicons';
const Otpscreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.backArrow}>
            <Backarrow />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otpscreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
