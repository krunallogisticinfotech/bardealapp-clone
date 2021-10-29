import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Userimage from '../assets/profileimage.png';
import Contacticon from 'react-native-vector-icons/AntDesign';
import Hearticon from 'react-native-vector-icons/AntDesign';
import Rightarrow from 'react-native-vector-icons/MaterialIcons';
import Usericon from 'react-native-vector-icons/FontAwesome5';
import Settingicon from 'react-native-vector-icons/Ionicons';
import Warningicon from 'react-native-vector-icons/Ionicons';
import Logouticon from 'react-native-vector-icons/Ionicons';
const Profilescreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <View style={styles.userDetails}>
          <View style={styles.userImage}>
            <Image style={styles.profileImage} source={Userimage} />
          </View>
          <View style={styles.userDetail}>
            <Text style={styles.userName}>Angela lierna</Text>
            <Text style={styles.userEmail}>Angela@gmail.com</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.sectionDivider}></View>
      <View style={styles.userExtra}>
        <TouchableOpacity>
          <View style={styles.userlist}>
            <Contacticon name="contacts" color={'#FF7465'} size={26} />
            <Text style={styles.listText}>My Wishlist</Text>
            <Text style={styles.listCount}>11</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.userlist}>
            <Hearticon name="hearto" color={'#FF7465'} size={26} />
            <Text style={styles.listText}>Liked Post</Text>
            <Text style={styles.listCount}>25</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.userlist}>
            <Contacticon name="contacts" color={'#FF7465'} size={26} />
            <Text style={styles.listText}>My Coupon</Text>
            <Text style={styles.listCount}>12</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.topupContainer}>
        <Text style={styles.topupText}>$465.00</Text>
        <TouchableOpacity style={styles.topupBtn}>
          <Text style={styles.topupBtnText}>Top Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.accountContainer}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
            <View style={styles.singleBar}>
              <View style={styles.iconView}>
                <Usericon name="user-alt" color={'#FF7465'} size={20} />
              </View>
              <View style={styles.barTitle}>
                <Text style={styles.titleMain}>My Account</Text>
              </View>
              <View style={styles.arrowView}>
                <Rightarrow name="keyboard-arrow-right" size={24} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.singleBar}>
              <View style={styles.iconView}>
                <Settingicon
                  name="settings-sharp"
                  color={'#FF7465'}
                  size={20}
                />
              </View>
              <View style={styles.barTitle}>
                <Text style={styles.titleMain}>Settings</Text>
              </View>
              <View style={styles.arrowView}>
                <Rightarrow name="keyboard-arrow-right" size={24} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.singleBar}>
              <View style={styles.iconView}>
                <Settingicon name="warning" color={'#FF7465'} size={20} />
              </View>
              <View style={styles.barTitle}>
                <Text style={styles.titleMain}>Help</Text>
              </View>
              <View style={styles.arrowView}>
                <Rightarrow name="keyboard-arrow-right" size={24} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.singleBar}>
              <View style={styles.iconView}>
                <Logouticon name="log-out" color={'#FF7465'} size={20} />
              </View>
              <View style={styles.barTitle}>
                <Text style={styles.titleMain}>Log Out</Text>
              </View>
              <View style={styles.arrowView}>
                <Rightarrow name="keyboard-arrow-right" size={24} />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profilescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userDetails: {
    paddingVertical: 30,
    paddingHorizontal: 40,
    flexDirection: 'row',
  },
  profileImage: {
    borderRadius: 25,
  },
  userDetail: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  userName: {
    fontSize: 18,
    color: '#001833',
    fontWeight: '600',
    paddingVertical: 5,
  },
  userEmail: {
    color: '#AAAAAA',
    fontSize: 16,
  },
  sectionDivider: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    marginHorizontal: 30,
  },
  userExtra: {
    paddingVertical: 30,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userlist: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
  },
  listText: {
    fontSize: 16,
    color: '#757575',
    paddingVertical: 8,
  },
  listCount: {
    color: '#001833',
    fontSize: 18,
  },
  topupContainer: {
    backgroundColor: '#FA8164',
    marginHorizontal: 30,
    marginVertical: 0,
    paddingVertical: 30,
    paddingHorizontal: 30,
    alignItems: 'center',
    borderRadius: 20,
  },
  topupText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  topupBtn: {
    marginTop: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 35,
  },
  topupBtnText: {
    fontWeight: '600',
    color: '#001833',
    fontSize: 16,
  },
  accountContainer: {
    marginTop: 20,
    marginHorizontal: 30,
    flex: 1,
  },
  singleBar: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  iconView: {
    backgroundColor: '#FFF7ED',
    width: 60,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 15,
  },
  barTitle: {
    justifyContent: 'center',
    paddingLeft: 20,
    width: 250,
  },
  titleMain: {
    fontSize: 16,
    color: '#001833',
  },
  arrowView: {
    justifyContent: 'center',
  },
});
