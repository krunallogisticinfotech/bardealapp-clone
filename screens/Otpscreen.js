import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Backarrow from 'react-native-vector-icons/Ionicons';
import {OTP} from 'react-native-otp-form';
const Otpscreen = ({navigation}) => {
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
        <OTP
          codeCount={4}
          containerStyle={{marginTop: 30}}
          otpStyles={styles.otpField}
          key={true}
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
  backarrow: {
    paddingLeft: 20,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  otpTexts: {
    flex: 1,

    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 0,
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
    borderRadius: 40,
  },
  continueText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});
