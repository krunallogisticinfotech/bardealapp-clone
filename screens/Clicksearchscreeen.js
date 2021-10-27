import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Searchicon from 'react-native-vector-icons/AntDesign';
import Crossicon from 'react-native-vector-icons/Entypo';

//searchcard

import Searchcard from '../components/products/Searchcard';

const Clicksearchscreeen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.searchContainer}>
          <Searchicon
            style={styles.searchIcon}
            name="search1"
            size={22}
            color={'#bdbdbd'}
          />
          <TextInput style={styles.searchField} placeholder="Search" />
        </View>
        <TouchableOpacity>
          <View style={styles.notifyContainer}>
            <Text onPress={() => navigation.goBack()} style={styles.cancelBtn}>
              Cancel
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.recentSection}>
        <View style={styles.recentContainer}>
          <View style={styles.recentBtn}>
            <Text style={styles.recentText}>Jacket</Text>
            <TouchableOpacity>
              <Crossicon
                style={styles.recentCross}
                name="cross"
                color={'#FF7465'}
                size={18}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.recentBtn}>
            <Text style={styles.recentText}>Handbag</Text>
            <TouchableOpacity>
              <Crossicon
                style={styles.recentCross}
                name="cross"
                color={'#FF7465'}
                size={18}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.recentBtn}>
            <Text style={styles.recentText}>Gloves</Text>
            <TouchableOpacity>
              <Crossicon
                style={styles.recentCross}
                name="cross"
                color={'#FF7465'}
                size={18}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.recentBtn}>
            <Text style={styles.recentText}>Spactacle</Text>
            <TouchableOpacity>
              <Crossicon
                style={styles.recentCross}
                name="cross"
                color={'#FF7465'}
                size={18}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.recentBtn}>
            <Text style={styles.recentText}>Kimono</Text>
            <TouchableOpacity>
              <Crossicon
                style={styles.recentCross}
                name="cross"
                color={'#FF7465'}
                size={18}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.popularSearch}>
        <Text style={styles.popularSearchHeading}>Popular Search</Text>
        <View style={styles.productSearch}>
          <View style={styles.productSearchContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.productCards}>
                <Searchcard />
                <Searchcard />
                <Searchcard />
                <Searchcard />
                <Searchcard />
                <Searchcard />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Clicksearchscreeen;

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
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 13,
  },
  cancelBtn: {
    color: '#757575',
  },
  recentSection: {
    paddingVertical: 0,
    paddingHorizontal: 20,
  },
  recentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  recentBtn: {
    backgroundColor: '#FFF7ED',
    marginHorizontal: 5,
    marginVertical: 5,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
  },
  recentText: {
    marginRight: 5,
    marginLeft: 5,
    color: '#FF7465',
    fontSize: 14,
  },
  popularSearch: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  popularSearchHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#001833',
    marginBottom: 20,
  },
  productSearch: {
    flexDirection: 'column',
  },

  productCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal:5,
    marginBottom: 50,
  },
});
