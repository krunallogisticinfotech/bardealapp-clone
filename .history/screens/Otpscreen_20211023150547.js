import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Backarrow from 'react-native-vector-icons/Ionicons';
const Otpscreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backIcon}>
        <Backarrow name="chevron-back-sharp" size={34} />
      </View>
      <View>
          
      </View>
    </SafeAreaView>
  );
};

export default Otpscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backIcon: {
    padding: 25,
  },
});
