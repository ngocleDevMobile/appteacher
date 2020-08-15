/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';
import Icon_Calender from '../themes/Icon_calender';
import LinearGradient from 'react-native-linear-gradient';

export default function Item_mycourse() {
  const itemData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas',
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
      id: '58694a0f-3da1-471f-bd96-145571e29d72q',
      name: 'Dự án mẫu(ngành Mobile) - LT15201',
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
            <View style={styles.container}>
              <View
                style={{
                  backgroundColor: '#FE952A',
                  width: 50,
                  height: 50,
                  borderRadius: 4,
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#fff', fontSize: 10, fontWeight: 'bold'}}>
                  {item.maclass}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: 5,
                }}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 10, color: '#898989', marginTop: 4}}>
                  {item.class}
                </Text>
                <View
                  style={{
                    // width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 4,
                  }}>
                  <Icon_Calender />
                  <Text
                    style={{fontSize: 10, color: '#F26F21', paddingLeft: 5}}>
                    {item.startDate} - {item.endtDate}
                  </Text>
                </View>
              </View>
            </View>
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
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    // justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 4,
  },
});
