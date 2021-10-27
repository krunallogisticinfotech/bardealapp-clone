import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import Backarrow from 'react-native-vector-icons/Ionicons';

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
});
