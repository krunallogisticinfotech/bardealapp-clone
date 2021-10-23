import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import EyeLine from 'react-native-vector-icons/Ionicons';
const Otpscreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.backArrow}>

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
