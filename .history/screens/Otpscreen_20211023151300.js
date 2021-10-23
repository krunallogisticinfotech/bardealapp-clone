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
        <Text style={styles.otpDesc}>
          We sent otp verification to your email this code will expired in
        </Text>
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
  otpTexts: {
    flex: 1,
    padding:20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  otpHeading:{
      fontSize:28,
      fontWeight:'600',
      marginBottom:10,
  },
  otpDesc:{
      fontSize:20,
      textAlign:'center',
      color:'#AAAAAA',
      marginBottom:20,
  },
  otpText:{
      fontSize:20,
      color:'#aaaaaa',
  }
});
