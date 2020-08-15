/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';
import Icon_Calender from '../themes/Icon_calender';
import LinearGradient from 'react-native-linear-gradient';

export default function Item_lichday() {
  const itemData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas',
      name: 'Phân tích hoạt động kinh doanh',
      room: 'R502',
      ca: '4',
      location: 'Phan Mem Quang Trung',
      date: '22/07/2020',
      maclass: 'MOB204',
      class: 'LT1521_3',
      status: 0,
      color: '#FFFBEC',
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
      status: 1,
      color: '#ECFFF3',
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
      status: 2,
      color: '#FEEEEE',
    },
  ];

  const [data, setData] = useState(itemData);
  function SetView(status, color) {
    if (status === 0) {
      return (
        <View
          style={{
            width: 60,
            height: 25,
            justifyContent: 'center',
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            marginTop: 5,
            backgroundColor: color,
            alignItems: 'center',
          }}>
          <Text style={{color: '#FD8D2A', fontSize: 12}}>Đã thi</Text>
        </View>
      );
    } else if (status === 1) {
      return (
        <View
          style={{
            width: 60,
            height: 25,
            justifyContent: 'center',
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            marginTop: 5,
            backgroundColor: color,
            alignItems: 'center',
          }}>
          <Text style={{color: '#0AB549', fontSize: 12}}>Hôm nay</Text>
        </View>
      );
    } else if (status === 2) {
      return (
        <View
          style={{
            width: 60,
            height: 25,
            justifyContent: 'center',
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            marginTop: 5,
            backgroundColor: color,
            alignItems: 'center',
          }}>
          <Text style={{color: '#AC4040', fontSize: 12}}>Chưa tới</Text>
        </View>
      );
    }
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.item_day}>
              <View style={styles.item_data}>
                {SetView(item.status, item.color)}
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    // backgroundColor: '#FD7C2A',
                    alignItems: 'stretch',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#22215B',
                      marginLeft: 8,
                      fontWeight: 'bold',
                      marginTop: 5,
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
                    {item.room} - {item.maclass}
                  </Text>
                  <View style={{alignItems: 'flex-end', paddingRight: 20}} />
                </View>
                {/* <Text style={{fontSize: 9, color: '#F26F21'}}>Chi tiet</Text> */}
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#F26F21',
                  opacity: 0.4,
                  marginTop: 10,
                  marginBottom: 4,
                }}
              />
              <View style={styles.data2}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.txtBottom}>Ca {item.ca}</Text>
                  <Text style={styles.txtBottom}>Lớp: {item.class}</Text>
                  <Text style={styles.txtBottom}>Ngày: {item.date}</Text>
                </View>

                {/* {SetView(item.status)} */}

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
    width: width * 0.9,
    marginTop: 10,
    flex: 1,
    backgroundColor: '#FFFF',
    borderRadius: 6,
    paddingTop: 5,
  },
  item_data: {
    flexDirection: 'row',
  },
  data2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  status: {
    width: 50,
    height: 25,
    justifyContent: 'center',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    marginTop: 7,
  },
  txtBottom: {
    fontSize: 12,
    color: '#6E7FAA',
    marginLeft: 8,
    marginTop: 3,
  },
});
