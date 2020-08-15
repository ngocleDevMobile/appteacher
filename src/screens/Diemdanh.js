/* eslint-disable react/jsx-no-undef */
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Item_diemdanh from '../Item/Item_diemdanh';

export default function Diemdanh({navigation: {goBack, navigate}}) {
  const insets = useSafeAreaInsets();
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  return (
    <View
      style={{
        paddingTop: insets.top,
        flex: 1,
        backgroundColor: '#F3F6F9',
        // alignItems: 'center',
      }}>
      <StatusBar
        backgroundColor="rgba(255,149,42,0.3)"
        barStyle="light-content"
      />
      <View style={styles.circle} />
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
          Điểm danh
        </Text>
        <Text style={{marginRight: 20}} />
      </View>
      <View
        style={{
          width: 95,
          height: 55,
          backgroundColor: '#FEEEEE',
          borderBottomRightRadius: 10,
          marginTop: 10,
          shadowOffset: {
            width: 0,
            height: 5,
          },
          elevation: 3,
          shadowOpacity: 0.2,
          shadowRadius: 15,
          shadowColor: '#FD912A',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#AC4040', fontSize: 19}}>To day</Text>
      </View>
      <View style={styles.container4}>
        <Item_diemdanh
          onPress={() => navigate('CtDiemdanh')}
          nextScreen={() => navigate('LsDiemdanh')}
        />
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
    width: width * 0.85,
    height: 55,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
    borderRadius: 5,
  },
  container4: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#FFFFFF',
    marginTop: 15,
  },
  circle: {
    width: 200,
    height: 200,
    backgroundColor: '#FE952A',
    borderRadius: 100,
    position: 'absolute',
    top: -30,
    right: -40,
  },
});
