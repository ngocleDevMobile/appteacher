/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';
import Ic_nc from '../themes/Ic_nx';
import Icon_book from '../themes/Icon_book';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon_check from '../themes/Icon_check';
import Icon_teacher from '../themes/Icon_teacher';
export default function Item_ctlh({nextScreen}) {
  const itemData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas',
      name: 'Huongtt',
      room: 'R502',
      ca: '4',
      date: '18/05/2020',
      status: true,
      derde: 'Monday',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas',
      name: 'Huongtt',
      room: 'R502',
      ca: '4',
      date: '19/05/2020',
      status: true,
      derde: 'Monday',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas',
      name: 'Huongtt',
      room: 'R502',
      ca: '4',
      date: '20/05/2020',
      status: true,
      derde: 'Monday',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas',
      name: 'Huongtt',
      room: 'R502',
      ca: '4',
      date: '21/05/2020',
      status: false,
      derde: 'Monday',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas',
      name: 'Huongtt',
      room: 'R502',
      ca: '4',
      date: '22/05/2020',
      status: false,
      derde: 'Monday',
    },
  ];

  const [data, setData] = useState(itemData);

  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.container}>
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: '#F59525',
                  marginLeft: 10,
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  paddingLeft: 13,
                }}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                  {item.derde} - {item.date}
                </Text>
                <Text style={{fontSize: 10, marginTop: 4}}>
                 Ca {item.ca} - {item.room}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingRight: 10,
                }}>
                <Icon_check />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon_teacher />
                  <Text style={{color: '#F37C26', marginLeft: 5, fontSize: 10}}>Huongtt</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 4,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
