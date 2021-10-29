import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Backarrow from 'react-native-vector-icons/Ionicons';
import Rightarrow from 'react-native-vector-icons/MaterialIcons';
import Promoicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Gifticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Vouchericon from 'react-native-vector-icons/MaterialCommunityIcons';
import Lockicon from 'react-native-vector-icons/MaterialCommunityIcons';

const Notificationscreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Backarrow
            name="chevron-back-sharp"
            size={34}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.headingTitle}>Notification</Text>
        </View>
      </View>
      <View style={styles.notificationSection}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.notificationBarContainer}>
            <Text style={styles.sectionTitle}>Today</Text>
            <TouchableOpacity>
              <View style={styles.notificationBar}>
                <View style={styles.barIconView}>
                  <Promoicon
                    style={styles.barIcon}
                    name="brightness-percent"
                    size={20}
                    color={'#FF7465'}
                  />
                </View>

                <View style={styles.notificationBarDetial}>
                  <Text style={styles.barTitle}>Promo Bardil</Text>
                  <Text style={styles.barDesc}>
                    Exstra Cashback + installme...
                  </Text>
                </View>
                <View style={styles.rightArrowView}>
                  <Rightarrow name="keyboard-arrow-right" size={22} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.notificationBar}>
                <View style={styles.barIconView}>
                  <Gifticon
                    style={styles.barIcon}
                    name="gift"
                    size={20}
                    color={'#FF7465'}
                  />
                </View>

                <View style={styles.notificationBarDetial}>
                  <Text style={styles.barTitle}>Monthly Prizes</Text>
                  <Text style={styles.barDesc}>
                    You get a gift voucher credit...
                  </Text>
                </View>
                <View style={styles.rightArrowView}>
                  <Rightarrow name="keyboard-arrow-right" size={22} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.notificationBar}>
                <View style={styles.barIconView}>
                  <Vouchericon
                    style={styles.barIcon}
                    name="ticket-percent"
                    size={20}
                    color={'#FF7465'}
                  />
                </View>

                <View style={styles.notificationBarDetial}>
                  <Text style={styles.barTitle}>Voucher</Text>
                  <Text style={styles.barDesc}>
                    You get a shopping voucher...
                  </Text>
                </View>
                <View style={styles.rightArrowView}>
                  <Rightarrow name="keyboard-arrow-right" size={22} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.notificationBar}>
                <View style={styles.barIconView}>
                  <Lockicon
                    style={styles.barIcon}
                    name="lock"
                    size={20}
                    color={'#FF7465'}
                  />
                </View>

                <View style={styles.notificationBarDetial}>
                  <Text style={styles.barTitle}>Account</Text>
                  <Text style={styles.barDesc}>
                    Secure your account to avoi...
                  </Text>
                </View>
                <View style={styles.rightArrowView}>
                  <Rightarrow name="keyboard-arrow-right" size={22} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.notificationBarContainer}>
            <Text style={styles.sectionTitle}>Yesterday</Text>
            <TouchableOpacity>
              <View style={styles.notificationBar}>
                <View style={styles.barIconView}>
                  <Promoicon
                    style={styles.barIcon}
                    name="brightness-percent"
                    size={20}
                    color={'#FF7465'}
                  />
                </View>

                <View style={styles.notificationBarDetial}>
                  <Text style={styles.barTitle}>Promo Bardil</Text>
                  <Text style={styles.barDesc}>
                    Exstra Cashback + installme...
                  </Text>
                </View>
                <View style={styles.rightArrowView}>
                  <Rightarrow name="keyboard-arrow-right" size={22} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.notificationBar}>
                <View style={styles.barIconView}>
                  <Gifticon
                    style={styles.barIcon}
                    name="gift"
                    size={20}
                    color={'#FF7465'}
                  />
                </View>

                <View style={styles.notificationBarDetial}>
                  <Text style={styles.barTitle}>Monthly Prizes</Text>
                  <Text style={styles.barDesc}>
                    You get a gift voucher credit...
                  </Text>
                </View>
                <View style={styles.rightArrowView}>
                  <Rightarrow name="keyboard-arrow-right" size={22} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.notificationBar}>
                <View style={styles.barIconView}>
                  <Vouchericon
                    style={styles.barIcon}
                    name="ticket-percent"
                    size={20}
                    color={'#FF7465'}
                  />
                </View>

                <View style={styles.notificationBarDetial}>
                  <Text style={styles.barTitle}>Voucher</Text>
                  <Text style={styles.barDesc}>
                    You get a shopping voucher...
                  </Text>
                </View>
                <View style={styles.rightArrowView}>
                  <Rightarrow name="keyboard-arrow-right" size={22} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.notificationBar}>
                <View style={styles.barIconView}>
                  <Lockicon
                    style={styles.barIcon}
                    name="lock"
                    size={20}
                    color={'#FF7465'}
                  />
                </View>

                <View style={styles.notificationBarDetial}>
                  <Text style={styles.barTitle}>Account</Text>
                  <Text style={styles.barDesc}>
                    Secure your account to avoi...
                  </Text>
                </View>
                <View style={styles.rightArrowView}>
                  <Rightarrow name="keyboard-arrow-right" size={22} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Notificationscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHeader: {
    padding: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  headingTitle: {
    marginTop: -28,
    fontSize: 18,
  },
  notificationSection: {
    paddingHorizontal: 30,
    flex: 1,
  },
  sectionTitle: {
    color: '#001833',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  notificationBar: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  barIconView: {
    backgroundColor: '#FFF7ED',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 35,
    marginRight: 15,
  },
  notificationBarDetial: {
    justifyContent: 'center',
    width: 240,
    flexWrap: 'wrap',
  },
  rightArrowView: {
    justifyContent: 'center',
  },
  barTitle: {
    fontWeight: '600',
    fontSize: 16,
    paddingVertical: 5,
    color: '#001833',
  },
  barDesc: {
    color: '#757575',
  },
  notificationBarContainer: {
    paddingVertical: 10,
  },
});
