import React, {Component, useState} from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';

export default function Item_lichhoc() {
  const itemData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baa',
      name: 'Dự án mẫu(ngành Mobile) - LT15201',
      room: 'R502',
      ca: '4',
      location: 'Phan Mem Quang Trung',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63z',
      name: 'Dự án mẫu(ngành Mobile) - LT15201',
      room: 'R502',
      ca: '4',
      location: 'Phan Mem Quang Trung',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72f',
      name: 'Dự án mẫu(ngành Mobile) - LT15201',
      room: 'R502',
      ca: '4',
      location: 'Phan Mem Quang Trung',
    },
  ];

  const [data, setData] = useState(itemData);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.item_day}>
              <View style={styles.item_data}>
                <View
                  style={{
                    backgroundColor: '#22215B',
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginTop: 4,
                  }}
                />
                <View style={styles.data1}>
                  <Text style={{fontSize: 13, color: '#22215B', marginLeft: 8}}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#6E7FAA',
                      marginLeft: 8,
                      marginTop: 1,
                    }}>
                    {item.room} - Ca {item.ca} - {item.location}
                  </Text>
                </View>
                <Text style={{fontSize: 9, color: '#F26F21'}}>Chi tiet</Text>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#707070',
                  opacity: 0.3,
                  marginTop: 7,
                }}
              />
            </View>
          );
        }}
        //keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  item_day: {
    flex: 1,
    marginTop: 20,
  },
  item_data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  data1: {
    flex: 1,
  },
});
