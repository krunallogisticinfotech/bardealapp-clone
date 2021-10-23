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
            <Text>OTP Verification</Text>
            <Text>We sent otp verification to your email this code will expired in</Text>
            <Text>00:300</Text>
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
