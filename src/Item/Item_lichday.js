/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';
import Icon_Calender from '../themes/Icon_calender';
import LinearGradient from 'react-native-linear-gradient';

export default function Item_lichday() {
  const itemData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas',
      name: 'Dự án mẫu(ngành Mobile) - LT15201',
      room: 'R502',
      ca: '4',
      location: 'Phan Mem Quang Trung',
      date: '22/07/2020',
      maclass: 'MOB204',
      class: 'LT1521_3',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63d',
      name: 'Dự án mẫu(ngành Mobile) - LT15201',
      room: 'R502',
      ca: '4',
      location: 'Phan Mem Quang Trung',
      date: '22/07/2020',
      maclass: 'MOB204',
      class: 'LT1521_3',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72a',
      name: 'Dự án mẫu(ngành Mobile) - LT15201',
      room: 'R502',
      ca: '4',
      location: 'Phan Mem Quang Trung',
      date: '22/07/2020',
      maclass: 'MOB204',
      class: 'LT1521_3',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72q',
      name: 'Dự án mẫu(ngành Mobile) - LT15201',
      room: 'R502',
      ca: '4',
      location: 'Phan Mem Quang Trung',
      date: '22/07/2020',
      maclass: 'MOB204',
      class: 'LT1521_3',
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
                <View>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#22215B',
                      marginLeft: 8,
                      fontWeight: 'bold',
                      marginTop: 7,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#F26F21',
                      marginLeft: 8,
                      marginTop: 5,
                    }}>
                    {item.maclass} - {item.class}
                  </Text>
                </View>
                {/* <Text style={{fontSize: 9, color: '#F26F21'}}>Chi tiet</Text> */}
                <LinearGradient
                  colors={['#FEB12A', '#FD962A', '#FD7C2A']}
                  style={styles.linearGradient}>
                  <Text style={styles.buttonText}>{item.room}</Text>
                </LinearGradient>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#F26F21',
                  opacity: 0.4,
                  marginTop: 7,
                  marginBottom: 4,
                }}
              />
              <View style={styles.data2}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Text
                    style={{
                      width: 30,
                      height: 20,
                      backgroundColor: '#FFF6EC',
                      color: '#F26F21',
                      textAlign: 'center',
                      paddingTop: 3,
                      fontSize: 10,
                      marginBottom: 3,
                      marginLeft: 8,
                      borderRadius: 3,
                    }}>
                    Ca {item.ca}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#6E7FAA',
                      marginLeft: 8,
                      marginTop: 3,
                    }}>
                    {item.location}
                  </Text>
                </View>
                <View
                  style={{
                    // width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 50,
                    alignItems: 'center',
                  }}>
                  <Icon_Calender />
                  <Text
                    style={{fontSize: 10, color: '#F26F21', paddingLeft: 5}}>
                    {item.date}
                  </Text>
                </View>
                <View />
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
  item_day: {
    width: width * 0.85,
    marginTop: 10,
    flex: 1,
    backgroundColor: '#FFFF',
    borderRadius: 5,
  },
  item_data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  data2: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  linearGradient: {
    width: 55,
    height: 30,
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
