import * as React from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import Bg_home from '../themes/Bg_home';
function HomeTab() {
  return (
    <SafeAreaView style={styles.container}>
      <Bg_home />
    </SafeAreaView>
  );
}

export default HomeTab;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
