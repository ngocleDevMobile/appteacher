import * as React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Bg_log from '../themes/Bg_log';
import Icon from '../themes/Icon';
import Icon_Gg from '../themes/Icon_Gg';
import Icon_next from '../themes/Icon_next';
console.disableYellowBox = true;

function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {/* <SafeAreaView /> */}
      <View style={styles.container1}>
        <Image
          source={require('../assets/images/logoF.png')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 121, height: 46, marginTop: 20, marginBottom: 25}}
        />
        <Bg_log />
      </View>
      <View style={styles.container2}>
        <Text style={styles.textTop}>Hệ thống Ap</Text>
        <Text style={styles.textBottom}>Giảng viên</Text>
      </View>
      <View style={styles.container3}>
        <TouchableOpacity style={styles.v_row}>
          <Text style={{color: '#000', opacity: 0.3}}>-Chọn cơ sở</Text>
          <View style={styles.v_ras}>
            <Icon />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container4}>
        <TouchableOpacity
          style={styles.v_row1}
          onPress={() => navigation.navigate('MainScreen')}>
          <Icon_Gg style={{marginLeft: 20}} />
          <Text style={{color: '#FA7032', fontSize: 15}}>
            Continue with Google
          </Text>
          <Icon_next style={{marginRight: 20}} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Login;

const {width, height} = Dimensions.get('screen');
const height_Bg = height * 0.4;
const height_logo = height * 0.02;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    alignItems: 'center',
  },
  container2: {
    marginTop: -40,
    marginLeft: 40,
    marginRight: 40,
  },
  bg_login: {
    width: width,
    height: height_Bg,
  },
  textTop: {
    fontFamily: 'Roboto-Bold',
    color: '#707070',
    fontSize: 25,
  },
  textBottom: {
    fontFamily: 'Roboto-Light',
    color: '#707070',
    fontSize: 15,
  },
  container3: {
    width: width,
    alignItems: 'center',
    marginTop: 30,
  },
  container4: {
    width: width,
    height: 50,
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
  },
  v_row: {
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    width: width * 0.7,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 3,
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowColor: '#C7D0F8',
  },
  v_row1: {
    alignItems: 'center',
    width: width * 0.8,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 3,
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowColor: '#C7D0F8',
  },
  v_ras: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    elevation: 2,
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowColor: '#C7D0F8',
  },
  ic_location: {
    width: height_logo,
    height: height_logo,
  },
});
