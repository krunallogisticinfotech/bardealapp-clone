import React from 'react';
import {StyleSheet, Text, View,SafeAreaView} from 'react-native';

const Cartscreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Cartscreen</Text>
      <Text onPress={() => navigation.navigate('Signup')}>Signup Screen</Text>
    </SafeAreaView>
  );
};

export default Cartscreen;

const styles = StyleSheet.create({});
