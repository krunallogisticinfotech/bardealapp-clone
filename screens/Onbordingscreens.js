import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Logo1 from '../assets/SecureShopping.png';
import Logo2 from '../assets/CharacterEnjoy.png';
import Logo3 from '../assets/CharacterEnjoy2.png';
const Onbordingscreens = ({navigation}) => {
  const Done = ({...props}) => (
    <TouchableOpacity {...props}>
      <Text style={styles.btnDone}>Done</Text>
    </TouchableOpacity>
  );
  const Next = ({...props}) => (
    <TouchableOpacity style={styles.btnNext} {...props}>
      <Text style={styles.btnNext}>Next</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <Onboarding
        onDone={() => navigation.navigate('Login')}
        skipLabel={false}
        DoneButtonComponent={Done}
        bottomBarColor="#fff"
        NextButtonComponent={Next}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={Logo2} />,
            title: 'Latest Outfit',
            subtitle: 'There are many new outfits that make you cool',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={Logo3} />,
            title: 'Affordable Prices',
            subtitle: 'Goods at affordable prices that make you thrifity',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={Logo1} />,
            title: 'Shop Safety',
            subtitle: 'Shop in peace and safety without worry',
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default Onbordingscreens;

const styles = StyleSheet.create({
  btnNext: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  btnDone: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
