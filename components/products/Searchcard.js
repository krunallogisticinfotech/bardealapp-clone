import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import Productimage1 from '../../assets/Searchproduct1.png';

const Searchcard = () => {
  return (
    <View style={styles.productCard}>
      <Image source={Productimage1} style={styles.productImage} />
      <View style={styles.nameContainer}>
        <Text style={styles.productName}>Blazer</Text>
      </View>
    </View>
  );
};

export default Searchcard;

const styles = StyleSheet.create({
  productCard: {
    marginBottom: 20,
  },
  nameContainer: {
    position: 'absolute',
    top: 90,
    left: 55,
  },
  productName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
