import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Jacket from '../assets/image127jacket.png';
import Handbag from '../assets/image85handbag.png';
import Spectable from '../assets/image86.png';
import Kimono from '../assets/image123.png';
import Gloves from '../assets/image121.png';
import Labcoat from '../assets/image122.png';
import Dress from '../assets/image862.png';
import Flatshoes from '../assets/image119.png';
import Jeans from '../assets/1.png';
import Necktie from '../assets/image124.png';
const Categoryscreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingText}>
        <Text style={styles.textHeading}>
          Choose your favorite fashion categories
        </Text>
        <Text style={styles.subheadingText}>You can choose more than one</Text>
      </View>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.category}>
          <View style={styles.categoryRow}>
            <TouchableOpacity style={styles.imageText}>
              <Image source={Jacket} style={styles.catIcon} />
              <Text style={styles.catText}>Jacket</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageText}>
              <Image source={Handbag} style={styles.catIcon} />
              <Text style={styles.catText}>Handbag</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageText}>
              <Image source={Spectable} style={styles.catIcon} />
              <Text style={styles.catText}>Spectacle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageText}>
              <Image source={Kimono} style={styles.catIcon} />
              <Text style={styles.catText}>Kimono</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageText}>
              <Image source={Gloves} style={styles.catIcon} />
              <Text style={styles.catText}>Gloves</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageText}>
              <Image source={Labcoat} style={styles.catIcon} />
              <Text style={styles.catText}>Lab Coat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageText}>
              <Image source={Dress} style={styles.catIcon} />
              <Text style={styles.catText}>Dress</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageText}>
              <Image source={Flatshoes} style={styles.catIcon} />
              <Text style={styles.catText}>Flat Shoes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageText}>
              <Image source={Jeans} style={styles.catIcon} />
              <Text style={styles.catText}>Jeans</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageText}>
              <Image source={Necktie} style={styles.catIcon} />
              <Text style={styles.catText}>Necktie</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.catBtn}>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipContainer}>
          <Text style={styles.skipText}>Skip for now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Categoryscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headingText: {
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  textHeading: {
    color: '#001833',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '600',
    paddingVertical: 15,
    lineHeight: 36,
  },
  subheadingText: {
    color: '#AAAAAA',
    fontSize: 18,
  },
  category: {
    marginTop: 30,
  },
  categoryRow: {
    flexDirection: 'row',
    paddingHorizontal: 35,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  imageText: {
    flexDirection: 'row',
    padding: 20,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 15,
    marginRight: 15,
  },
  catText: {
    color: '#001833',
    paddingLeft: 5,
    fontSize: 16,
  },
  catBtn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 130,
  },
  btnContainer: {
    backgroundColor: '#FF7465',
    paddingVertical: 20,
    width: 320,
    borderRadius: 35,
    alignItems: 'center',
    marginBottom: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  skipText: {
    color: '#AAAAAA',
  },
});
