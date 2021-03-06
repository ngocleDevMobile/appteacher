import React, {useState} from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Item_lsdiemdanh from '../Item/Item_lsdiemdanh';
import Ic_lop from '../themes/Ic_lop';
import Ic_mon from '../themes/Ic_mon';
import Ic_qr from '../themes/Ic_qr';

export default function LichsuDiemdanh({navigation: {goBack}}) {
  const insets = useSafeAreaInsets();
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  return (
    <View
      style={{
        paddingTop: insets.top,
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor="#F3F6F9" barStyle="dark-content" />
      <View style={styles.container2}>
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons name="chevron-back-sharp" size={26} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            color: '#222455',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Lịch sử điểm danh
        </Text>
        <Ic_qr />
      </View>
      <View style={styles.container3}>
        <View style={styles.hocki}>
          <Ic_lop />
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text style={{color: '#F59525', fontSize: 11}}>Lớp</Text>
            <Text style={{color: 'black', fontSize: 15}}>LT15101_2</Text>
          </View>
        </View>
        <View style={styles.class}>
          <Ic_mon />
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text style={{color: '#F59525', fontSize: 11}}>Môn</Text>
            <Text style={{color: 'black', fontSize: 15}}>Android cơ bản</Text>
          </View>
        </View>
        <Text style={{marginRight: 20}} />
      </View>
      <View style={styles.container4}>
        <Item_lsdiemdanh />
      </View>
    </View>
  );
}

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container2: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
  container3: {
    width: width * 0.9,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 5,
  },
  container5: {
    width: width * 0.9,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: '#F5F6FA',
    paddingRight: 15,
    paddingLeft: 15,
  },
  hocki: {
    width: width * 0.425,
    marginRight: width * 0.025,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    height: 60,
    paddingLeft: 10,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 3,
    shadowOpacity: 1,
    shadowRadius: 15,
    shadowColor: '#DCEFF5',
  },
  class: {
    width: width * 0.425,
    marginLeft: width * 0.025,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 3,
    shadowOpacity: 1,
    shadowRadius: 15,
    shadowColor: '#DCEFF5',
  },
  container4: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },
});
