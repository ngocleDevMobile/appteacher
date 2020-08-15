/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic_clock from '../themes/Ic_clock';
import Item_lichday from '../Item/Item_lichday';
import RBSheet from 'react-native-raw-bottom-sheet';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Lichday({navigation: {goBack}}) {
  const insets = useSafeAreaInsets();
  // eslint-disable-next-line no-undef
  const refRBSheet = useRef();

  const date = [
    {
      id: '1',
      dates: '7 ngày tới',
    },
    {
      id: '2',
      dates: '14 ngày tới',
    },
    {
      id: '3',
      dates: '21 ngày tới',
    },
    {
      id: '4',
      dates: '28 ngày tới',
    },
    {
      id: '5',
      dates: '35 ngày tới',
    },
    {
      id: '6',
      dates: '42 ngày tới',
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
          Lịch dạy
        </Text>
        <Text style={{marginRight: 20}} />
      </View>
      <View style={styles.container3}>
        <Ic_clock />
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <Text
            style={{
              fontSize: 20,
              color: '#F26F21',
              textAlign: 'center',
            }}>
            7 ngày tới
          </Text>
        </TouchableOpacity>
        <Text style={{marginRight: 20}} />
      </View>
      <View style={styles.container4}>
        <Item_lichday />
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
    </View>
  );
}

// eslint-disable-next-line no-unused-vars
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container2: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
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
    width: width * 0.85,
    // backgroundColor: '#FFFFFF',
    marginTop: 15,
  },
});
