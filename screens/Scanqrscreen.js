import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import QRCode from 'react-native-qrcode-generator';
import Backarrow from 'react-native-vector-icons/Ionicons';
import Arrows from 'react-native-vector-icons/Fontisto';
import ScanQR from 'react-native-vector-icons/Ionicons';
import Barcode from 'react-native-vector-icons/FontAwesome';
import Divide from '../assets/linedivider.png';

const Scanqrscreen = ({navigation}) => {
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
          <Text style={styles.headingTitle}>Scan Code</Text>
        </View>
      </View>
      <View style={styles.qrcontainer}>
        <Text style={styles.qrscanTitle}>Scan this code for top up</Text>
        <QRCode
          value={'http://facebook.github.io/react-native/'}
          size={180}
          bgColor="black"
          fgColor="white"
        />
        <View style={styles.qrChangeContainer}>
          <TouchableOpacity style={styles.qrcode}>
            <Arrows name="arrow-swap" size={18} color={'#FF7465'} />
            <Text style={styles.qrChangeText}>Change the barcode</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.barCode}>
        <View style={styles.barCodeContainer}>
          <View>
            <TouchableOpacity style={styles.scanQr}>
              <ScanQR name="scan-sharp" size={20} />
              <Text style={styles.scanText}>Scand QR Code</Text>
            </TouchableOpacity>
          </View>

          <Image source={Divide} style={styles.dividerImage} />

          <View>
            <TouchableOpacity style={styles.qrCodeReady}>
              <Barcode name="qrcode" size={20} />
              <Text style={styles.qrCodeText}>QR / Barcode</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Scanqrscreen;

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
  qrcontainer: {
    marginVertical: 60,
    alignItems: 'center',
    backgroundColor: '#F7F8FB',
    marginHorizontal: 30,
    borderRadius: 15,
    paddingVertical: 50,
  },
  qrscanTitle: {
    paddingBottom: 40,
    fontSize: 16,
  },
  qrcode: {
    flexDirection: 'row',
    marginTop: 40,
  },
  qrChangeText: {
    marginLeft: 10,
    color: '#FF7465',
  },
  barCode: {
    backgroundColor: '#F7F8FB',
    marginHorizontal: 30,
    marginTop: 30,
    borderRadius: 15,
    flexDirection: 'row',
  },
  barCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  scanQr: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
  },
  qrCodeReady: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
  },
  scanText: {
    paddingVertical: 5,
  },
  qrCodeText: {
    paddingVertical: 5,
  },
});
