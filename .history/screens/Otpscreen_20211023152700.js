import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Backarrow from 'react-native-vector-icons/Ionicons';
import {OTP} from 'react-native-otp-form';
const Otpscreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Backarrow name="chevron-back-sharp" size={34} />
        </TouchableOpacity>
      </View>
      <View style={styles.otpTexts}>
        <Text style={styles.otpHeading}>OTP Verification</Text>
        <Text style={styles.otpDesc}>
          We sent otp verification to your email this code will expired in
        </Text>
        <Text style={styles.otpTime}>00:30</Text>
        <OTP
          codeCount={4}
          containerStyle={{marginTop: 30}}
          otpStyles={styles.otpField}
        />
      </View>
      <View style={styles.continueBtn}>
        <TouchableOpacity style={styles.continueContainer}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
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
  otpTexts: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: -80,
  },
  otpHeading: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 10,
  },
  otpDesc: {
    fontSize: 20,
    textAlign: 'center',
    color: '#AAAAAA',
    marginBottom: 15,
  },
  otpTime: {
    fontSize: 20,
    color: '#aaaaaa',
  },
  otpField: {
    backgroundColor: '#F7F8FB',
    borderRadius: 20,
  },
  continueBtn: {
    padding: 20,
  },
  continueContainer: {
    backgroundColor: '#FF7465',
    padding: 20,
  },
  
});
