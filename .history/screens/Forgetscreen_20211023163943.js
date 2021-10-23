import React from 'react';
import {StyleSheet, Text, View,SafeAreaView,TouchableOpacity} from 'react-native';

const Forgetscreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backarrow}>
        <TouchableOpacity>
          <Backarrow
            name="chevron-back-sharp"
            size={34}
            onPress={() => navigation.navigate('Login')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.otpTexts}>
        <Text style={styles.otpHeading}>OTP Verification</Text>
        <Text style={styles.otpDesc}>
          We sent otp verification to your email this code will expired in
        </Text>
        <Text style={styles.otpTime}>00:30</Text>
      </View>
      <View style={styles.continueBtn}>
        <TouchableOpacity style={styles.continueContainer}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Forgetscreen;

const styles = StyleSheet.create({});
