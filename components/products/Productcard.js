import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
const Productcard = props => {
  return (
    <TouchableOpacity>
      <View style={styles.productcard}>
        <Image style={styles.productImage} source={props.img} />
        <View style={styles.productDetail}>
          <Text style={styles.productTitle}>{props.title}</Text>
          <Text style={styles.productPrice}>{props.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Productcard;

const styles = StyleSheet.create({
  productcard: {
    marginBottom: 10,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  productImage: {
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 20,
    lineHeight: 32,
    flexWrap: 'wrap',
    width: 150,
  },
  productDetail: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexWrap: 'wrap',
  },
  productPrice: {
    color: '#FF7465',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 3,
  },
});
