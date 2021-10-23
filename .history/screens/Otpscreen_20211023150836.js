import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Backarrow from 'react-native-vector-icons/Ionicons';
const Otpscreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backIcon}>
        <Backarrow name="chevron-back-sharp" size={34} />
      </View>
      <View style={styles.otpTexts}>
        <Text style={styles.otpHeading}>OTP Verification</Text>
        <Text style={styles.otpDesc}>We sent otp verification to your email this code will expired in</Text>
        <Text style={styles.otpTime}>00:30</Text>
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
  otpText:{
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
  }
});
