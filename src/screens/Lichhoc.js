import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSafeArea, useSafeAreaInsets} from 'react-native-safe-area-context';
import Item_lichhoc from '../Item/Item_lichhoc';

export default function Lichhoc({navigation: {goBack, navigate}}) {
  const insets = useSafeAreaInsets();
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  return (
    <View
      style={{
        paddingTop: insets.top,
        flex: 1,
        backgroundColor: '#F3F6F9',
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
          Lịch học
        </Text>
        <Text style={{marginRight: 20}} />
      </View>
      <View style={styles.container3}>
        <View style={styles.hocki}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: '#F59525',
            }}
          />
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text style={{color: '#F59525', fontSize: 11}}>Học kỳ</Text>
            <Text style={{color: 'black', fontSize: 15}}>Summer 2020</Text>
          </View>
        </View>
        <View style={styles.class}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: '#F59525',
            }}
          />
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text style={{color: '#F59525', fontSize: 11}}>Học kỳ</Text>
            <Text style={{color: 'black', fontSize: 15}}>Summer 2020</Text>
          </View>
        </View>
        <Text style={{marginRight: 20}} />
      </View>
      <View style={styles.container4}>
        <Item_lichhoc nextScreen={() => navigate('CtLichhoc')} />
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
    // backgroundColor: '#FFFFFF',
    marginTop: 15,
  },
});
