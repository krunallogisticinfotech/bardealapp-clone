import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Backarrow from 'react-native-vector-icons/Ionicons';
const Otpscreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.backArrow}>
          <Backarrow name="chevron-back-sharp" size={35} />
        </View>
        <View style={styles.otpText}>
            <Text style={styles.otpTextHeading}>OTP Verification</Text>
            <Text style={styles.otpTextDesc}>We sent otp verification to your email this code will expired in</Text>
            <Text style={styles.otpTextTime}>00:30</Text>
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
  otpText:{
      fle
  }
});
