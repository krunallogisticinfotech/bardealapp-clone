import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

const Homescreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Homescreen</Text>
        <Text onPress={() => navigation.navigate('Login')}>Login Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
