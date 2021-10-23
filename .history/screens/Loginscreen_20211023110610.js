import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,

} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Logo from '../assets/Logo.png';
import FacebookIcon from 'react-native-vector-icons/Entypo';
import GoogleIcon from 'react-native-vector-icons/Entypo';
import EyeLine from 'react-native-vector-icons/Entypo';

const Loginscreen = () => {
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.applogo} source={Logo} />
        <Text style={styles.logoHeading}>Login in to bardeal</Text>
        <Text style={styles.accountText}>
          Don't have an account?
          <Text onPress={() => console.log('Singup')} style={styles.signupText}>
            {' '}
            SignUp
          </Text>
        </Text>
        <View style={styles.socialIconContainer}>
          <FacebookIcon
            name="facebook-with-circle"
            color="#3B5999"
            size={50}
            style={styles.facebookIcon}
            onPress={() => console.log('facebook')}
          />
          <GoogleIcon
            name="google--with-circle"
            color="#FC3637"
            size={50}
            style={styles.googleIcon}
            onPress={() => console.log('google plus')}
          />
        </View>
        <View style={styles.breakLine}>
          <View style={styles.breakBorderLeft} />
          <Text style={styles.breakText}>Or</Text>
          <View style={styles.breakBorderRight} />
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.email}>
          <Text style={styles.emailLabel}>Email</Text>
          <TextInput style={styles.emailField} placeholder="Enter Your Email" />
        </View>
        <View style={styles.password}>
          <Text style={styles.passwordLabel}>Password</Text>
          <TextInput
            style={styles.passwordField}
            placeholder="Enter Your Password"
            secureTextEntry={visible}
          />
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
        <View style={styles.extraInfo}>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  applogo: {
    marginTop: 30,
  },
  logoHeading: {
    fontSize: 22,
    height: 25,
    fontWeight: '600',
    marginTop: 25,
  },
  accountText: {
    fontSize: 16,
    height: 20,
    marginTop: 20,
  },
  signupText: {
    color: '#FF7465',
    height: 20,
  },
  socialIconContainer: {
    flex: 2,
    flexDirection: 'row',
    marginTop: 20,
  },
  facebookIcon: {
    height: 50,
    marginRight: 10,
  },
  googleIcon: {
    height: 50,
    marginLeft: 10,
  },
  breakLine: {
    flex: 3,
    flexDirection: 'row',
  },
  breakBorderLeft: {
    flex: 1,
    textAlign: 'center',
    marginLeft: 35,
    marginRight: 10,
    marginTop: 95,
    height: 1,
    backgroundColor: '#f2f2f2',
    width: 0,
  },
  breakText: {
    fontSize: 18,
    height: 25,
    marginTop: 85,
    color: '#757575',
  },
  breakBorderRight: {
    flex: 1,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 35,
    marginTop: 95,
    height: 1,
    backgroundColor: '#f2f2f2',
    width: 0,
  },
  form: {
    marginTop: 360,
    marginLeft: 30,
    marginRight: 30,
  },
  email: {
    marginBottom: 20,
  },
  emailLabel: {
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 16,
  },
  emailField: {
    height: 50,
    paddingLeft: 20,
    borderRadius: 15,
    backgroundColor: '#F7F8FB',
  },
  passwordLabel: {
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 16,
  },
  passwordField: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 65,
    borderRadius: 15,
    backgroundColor: '#F7F8FB',
  },
  passEye: {
    marginLeft: 280,
    marginTop: -38,
    marginRight: 20,
  },
});

export default Loginscreen;
