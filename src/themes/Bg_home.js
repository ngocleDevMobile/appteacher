/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import Images from 'react-native-remote-svg';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import Item_lichhoc from '../Item/Item_lichhn';
import Item_danhmuc from '../Item/Item_danhmuc';
import {useNavigation} from '@react-navigation/native';

const SvgBgHome = () => {
  const navigation = useNavigation();
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#EEF7FE"
      />
      <Images
        style={styles.image}
        source={require('../assets/images/bg_home.svg')}
      />
      <View>
        <View style={styles.container1}>
          <View style={styles.topLeft}>
            <Image
              style={styles.img}
              source={require('../assets/images/avatar.jpg')}
            />
            <View style={styles.info}>
              <Text style={{color: '#222455', fontSize: 16}}>
                Tran Thi Huong
              </Text>
              <Text style={{color: '#6E7FAA', opacity: 0.8}}>
                huongtt@fe.edu.vn
              </Text>
            </View>
          </View>
          <Image
            source={require('../assets/images/logoF.png')}
            style={{width: 87, height: 29, marginTop: 20, marginBottom: 25}}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 20,
          paddingLeft: 20,
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 5,
        }}>
        <Text style={{fontSize: 20, color: '#222455'}}>Lịch dạy hôm nay</Text>
        <Text style={{color: '#6E7FAA', opacity: 0.8, fontSize: 13}}>
          03/07/2020
        </Text>
      </View>
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <View style={styles.container3}>
          <Item_lichhoc />
        </View>
      </View>
      <View style={{marginBottom: 5}}>
        <Text style={styles.txtDanhmuc}>Danh mục</Text>
      </View>
      <View style={{flex: 1, paddingLeft: 10, paddingRight: 10}}>
        <Item_danhmuc />
      </View>
    </View>
  );
};

// const Item_grid = ({name, img, color, textColor, id}) => (

// );
export default SvgBgHome;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'stretch',
  },
  image: {
    width: width * 1.1,
    height: height / 2,
    top: -40,
    resizeMode: 'cover',
    justifyContent: 'center',
    position: 'absolute',
  },
  container1: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // position: 'absolute',
    marginTop: 20,
    paddingRight: 40,
  },
  topLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    width: width / 2,
    height: 80,
    borderBottomRightRadius: 30,
    backgroundColor: '#fff',
  },
  img: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderColor: '#FA7032',
    borderWidth: 1,
  },
  info: {
    flexDirection: 'column',
    paddingLeft: 15,
  },
  container3: {
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 3,
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowColor: '#C7D0F8',
  },
  txtDanhmuc: {
    color: '#222455',
    fontSize: 22,
    paddingLeft: 20,
    paddingTop: 10,
  },
});
