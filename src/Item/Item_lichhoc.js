/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';
import Ic_nc from '../themes/Ic_nx';
import Icon_book from '../themes/Icon_book';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Item_mycourse({nextScreen}) {
  const itemData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas',
      name: 'Thiết kế giao diện Android',
      room: 'R502',
      ca: '4',
      location: 'Phan Mem Quang Trung',
      startDate: '22/07/2020',
      endtDate: '22/07/2020',
      maclass: 'MOB204',
      class: 'LT1521_3',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63d',
      name: 'Dự án mẫu(ngành Mobile) - LT15201',
      room: 'R502',
      ca: '4',
      location: 'Phan Mem Quang Trung',
      startDate: '22/07/2020',
      endtDate: '22/07/2020',
      maclass: 'MOB204',
      class: 'LT1521_3',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72a',
      name: 'Android nâng cao',
      room: 'R502',
      ca: '4',
      location: 'Phan Mem Quang Trung',
      startDate: '22/07/2020',
      endtDate: '22/07/2020',
      maclass: 'MOB204',
      class: 'LT1521_3',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72q',
      name: 'Android cơ bản',
      room: 'R502',
      ca: '4',
      location: 'Phan Mem Quang Trung',
      startDate: '22/07/2020',
      endtDate: '22/07/2020',
      maclass: 'MOB204',
      class: 'LT1521_3',
    },
  ];

  const [data, setData] = useState(itemData);

  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.container} onPress={nextScreen}>
              <View
                style={{
                  backgroundColor: '#F4F4F4',
                  width: 40,
                  height: 40,
                  borderRadius: 4,
                  margin: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon_book />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: 5,
                }}>
                <Text style={{fontSize: 14}}>{item.name}</Text>
                <Text style={{fontSize: 10, color: '#F59525', marginTop: 4}}>
                  {item.maclass}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingRight: 10,
                }}>
                <Ic_nc />
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
    // justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 4,
  },
});
