import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import Searchicon from 'react-native-vector-icons/AntDesign';

//productimages
import Productimage1 from '../assets/productImage.png';
import Productimage2 from '../assets/productimage2.png';
import Productimage3 from '../assets/productimage3.png';
import Productimage4 from '../assets/productimage4.png';

import Productcard from '../components/products/Productcard';

const Likescreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.searchContainer}>
          <Searchicon
            style={styles.searchIcon}
            name="search1"
            size={22}
            color={'#bdbdbd'}
            onPress={() => navigation.push('Clicksearch')}
          />
          <TextInput
            style={styles.searchField}
            placeholder="Find Your Product"
          />
        </View>
      </View>
      <View style={styles.productContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.productsCards}>
            <Productcard
              img={Productimage1}
              title={'Warm Zipper'}
              price={'$300.00'}
            />
            <Productcard
              img={Productimage2}
              title={'Knitted Wool '}
              price={'$125.00'}
            />
            <Productcard
              img={Productimage3}
              title={'Warm Zipper'}
              price={'$300.00'}
            />
            <Productcard
              img={Productimage4}
              title={'Knitted Wool '}
              price={'$125.00'}
            />
            <Productcard
              img={Productimage1}
              title={'Warm Zipper'}
              price={'$300.00'}
            />
            <Productcard
              img={Productimage2}
              title={'Knitted Wool '}
              price={'$125.00'}
            />
            <Productcard
              img={Productimage3}
              title={'Warm Zipper'}
              price={'$300.00'}
            />
            <Productcard
              img={Productimage4}
              title={'Knitted Wool '}
              price={'$125.00'}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Likescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  searchField: {
    backgroundColor: '#F7F8FB',
    height: 60,
    width: 340,
    borderRadius: 13,
    paddingLeft: 50,
    paddingRight: 20,
    marginLeft: -40,
    zIndex: 1,
  },
  searchIcon: {
    zIndex: 3,
  },
  productContainer: {
    paddingHorizontal: 25,
    marginTop: 10,
    flex: 1,
  },
  productsCards: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
