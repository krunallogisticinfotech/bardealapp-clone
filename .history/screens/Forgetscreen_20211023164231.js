import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Backarrow from 'react-native-vector-icons/Ionicons';

const Forgetscreen = ({navigation}) => {
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
      <View style={styles.headTexts}>
        <Text style={styles.headHeading}>Forgot Password</Text>
        <Text style={styles.headDesc}>
          Please enter your email and we will send you link to return to your
          account
        </Text>
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
  headTexts: {
    flex: 1,

    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 0,
  },
  headHeading: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 10,
  },
  headDesc: {
    fontSize: 20,
    textAlign: 'center',
    color: '#AAAAAA',
    marginBottom: 15,
    lineHeight:10,
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
