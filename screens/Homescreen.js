import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Searchicon from 'react-native-vector-icons/AntDesign';
import Optionicon from 'react-native-vector-icons/Ionicons';
import FreeShiping from '../assets/freeshiping.png';

//productcard

//productimages
import Productimage1 from '../assets/productImage.png';
import Productimage2 from '../assets/productimage2.png';
import Productimage3 from '../assets/productimage3.png';
import Productimage4 from '../assets/productimage4.png';

import Productcard from '../components/products/Productcard';

const Homescreen = ({navigation}) => {
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
        <TouchableOpacity>
          <View style={styles.notifyContainer}>
            <Optionicon name="options" color={'#bdbdbd'} size={22} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.headBanner}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
            <Image style={styles.headBannerImage} source={FreeShiping} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.headBannerImage} source={FreeShiping} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.headBannerImage} source={FreeShiping} />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.filterTextWrap}>
            <Text style={styles.filterText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTextWrap}>
            <Text style={styles.filterText}>Category</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTextWrap}>
            <Text style={styles.filterText}>Top</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTextWrap}>
            <Text style={styles.filterText}>Recommended</Text>
          </TouchableOpacity>
        </ScrollView>
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

export default Homescreen;

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
    width: 270,
    borderRadius: 13,
    paddingLeft: 50,
    paddingRight: 20,
    marginLeft: -40,
    zIndex: 1,
  },
  searchIcon: {
    zIndex: 3,
  },
  notifyContainer: {
    backgroundColor: '#F7F8FB',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 13,
  },
  headBanner: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  headBannerImage: {
    marginRight: 20,
  },
  filterContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  filterTextWrap: {
    backgroundColor: '#F7F8FB',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginRight: 10,
    borderRadius: 35,
  },
  filterText: {
    color: '#AAAAAA',
    fontSize: 16,
  },
  productContainer: {
    paddingHorizontal: 25,
    flex: 1,
  },
  productsCards: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
