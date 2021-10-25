import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Backarrow from 'react-native-vector-icons/Ionicons';
import EyeLine from 'react-native-vector-icons/Entypo';
const Resetscreen = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

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
        <Text style={styles.headHeading}>Reset Password</Text>
        <Text style={styles.headDesc}>
          Please enter your email and we will send you link to return to your
          account
        </Text>
        <View style={styles.email}>
          <Text style={styles.emailLabel}>New Password</Text>
          <TextInput
            style={styles.emailField}
            placeholder="Enter New Password"
          />
        </View>
        <TouchableOpacity>
          <EyeLine
            onPress={() => {
              setShow(!show);
              setVisible(!visible);
            }}
            name={show === false ? 'eye-with-line' : 'eye'}
            size={25}
            style={styles.passEye}
            color="#c6c6c7"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.continueBtn}>
        <TouchableOpacity style={styles.continueContainer}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Resetscreen;

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

    padding: 30,
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
    lineHeight: 28,
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
  email: {
    marginBottom: 20,
    marginTop: 20,
  },
  emailLabel: {
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 16,
  },
  emailField: {
    height: 50,
    width: 320,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
    backgroundColor: '#F7F8FB',
  },
  passEye: {
    marginLeft: 280,
    marginTop: -58,
    marginRight: 20,
  },
});
