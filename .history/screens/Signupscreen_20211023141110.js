import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Logo from '../assets/Logo.png';
import FacebookIcon from 'react-native-vector-icons/Entypo';
import GoogleIcon from 'react-native-vector-icons/Entypo';
import EyeLine from 'react-native-vector-icons/Entypo';
const Signupscreen = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logoHeader}>
          <Image source={Logo} />
          <Text style={styles.signInText}>Register in to Bardeal</Text>
          <Text style={styles.accountText}>
            Already have an account?
            <Text
              style={{color: '#FC3637'}}
              onPress={() => navigation.navigate('Login')}>
              {' '}
              Sign In
            </Text>
          </Text>
        </View>
        <View style={styles.socialIcons}>
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
        <View style={styles.form}>
          <View style={styles.email}>
            <Text style={styles.emailLabel}>Username</Text>
            <TextInput
              style={styles.emailField}
              placeholder="Enter Your Username"
            />
          </View>
          <View style={styles.email}>
            <Text style={styles.emailLabel}>Email</Text>
            <TextInput
              style={styles.emailField}
              placeholder="Enter Your Email"
            />
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
        </View>
        <View style={styles.registerBtn}>
          <TouchableOpacity style={styles.registerContainer}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signupscreen;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  logoHeader: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  signInText: {
    marginTop: 25,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  accountText: {
    fontSize: 14,
    color: '#001833',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  facebookIcon: {
    marginHorizontal: 10,
  },
  googleIcon: {
    marginHorizontal: 10,
  },
  orSection: {
    flexDirection: 'row',
  },
  leftLine: {
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
  rightLine: {
    borderTopWidth: 1,
  },
  breakLine: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  breakBorderLeft: {
    textAlign: 'center',
    marginLeft: 35,
    marginRight: 10,
    marginTop: 35,
    height: 1,
    backgroundColor: '#f2f2f2',
    width: 120,
  },
  breakText: {
    fontSize: 18,
    height: 25,
    marginTop: 25,
    color: '#757575',
  },
  breakBorderRight: {
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 35,
    marginTop: 35,
    height: 1,
    backgroundColor: '#f2f2f2',
    width: 120,
  },
  form: {
    marginTop: 10,
    marginLeft: 0,
    marginRight: 0,
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
  registerBtn: {
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop:50,
  },
  

});
