/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Item_mycourse from '../Item/Item_mycourse';
import Ic_clock from '../themes/Ic_clock';

export default function Mycourse({navigation: {goBack}}) {
  const insets = useSafeAreaInsets();
  const refRBSheet = useRef();
  const date = [
    {
      id: '1',
      dates: 'Fall 2018',
    },
    {
      id: '2',
      dates: 'Summer 2018',
    },
    {
      id: '3',
      dates: 'Spring 2019',
    },
    {
      id: '4',
      dates: 'Summer 2020',
    },
    {
      id: '5',
      dates: 'Spring 2020',
    },
    {
      id: '6',
      dates: 'Fall 2019',
    },
  ];
  const [datesz, setDates] = useState(date);
  const {width, height} = Dimensions.get('screen');
  const YourOwnComponent = () => (
    <View>
      <FlatList
        data={datesz}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1,
                width: width,
                height: 50,
                justifyContent: 'center',
                flexDirection: 'column',
                borderBottomColor: 'powderblue',
                borderBottomWidth: 1,
                alignItems: 'center',
              }}>
              <Text style={{color: '#000'}}>{item.dates}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#FE952A'}} />
      <SafeAreaView style={{flex: 1, backgroundColor: '#F3F6F9'}}>
        <StatusBar backgroundColor="#FE952A" barStyle="light-content" />
        <View
          style={{
            // paddingTop: insets.top,
            // flex: 1,
            backgroundColor: '#FE952A',
            alignItems: 'center',
          }}>
          <View style={styles.container2}>
            <TouchableOpacity onPress={() => goBack()}>
              <Ionicons
                style={{color: '#fff'}}
                name="chevron-back-sharp"
                size={26}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              My course
            </Text>
            <Text style={{marginRight: 20}} />
          </View>
          <View style={styles.serach}>
            <View style={styles.row1}>
              <Ic_clock />
              <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#F26F21',
                    textAlign: 'center',
                  }}>
                  Summer 2020
                </Text>
              </TouchableOpacity>
              <Text style={{marginRight: 20}} />
            </View>
          </View>
        </View>
        <View style={styles.container4}>
          <Item_mycourse />
        </View>
        <RBSheet
          ref={refRBSheet}
          height={300}
          duration={250}
          customStyles={{
            container: {
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}>
          <YourOwnComponent />
        </RBSheet>
      </SafeAreaView>
    </>
  );
}

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container2: {
    width: width,
    height: height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },

  container4: {
    flex: 1,
    width: width,
    // marginTop: 30,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 60,
    zIndex: 1,
  },
  row1: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 3,
    shadowOpacity: 0.2,
    shadowRadius: 15,
    shadowColor: '#FD912A',
    paddingLeft: 10,
    position: 'absolute',
    zIndex: 99,
  },
  serach: {
    flex: 1,
    width: width,
    alignItems: 'center',
    top: -30,
    zIndex: 20,
  },
});
