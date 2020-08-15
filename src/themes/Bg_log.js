import * as React from 'react';
import Image from 'react-native-remote-svg';
import {View, StyleSheet} from 'react-native';

const Bg_log = () => {
  return (
    <View>
      <Image source={require('../assets/images/bg_login.svg')} />
    </View>
  );
};
export default Bg_log;
