/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';
import Icon_Calender from '../themes/Icon_calender';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Item_lichday({onPress, nextScreen}) {
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
      status: true,
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
      status: false,
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
      status: true,
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
      status: true,
    },
  ];

  const [data, setData] = useState(itemData);
  function SetStatus(status) {
    // if (status == true) {
    //   return <Text style={{color: '#FD962A'}}>Take</Text>;
    // } else {
    //   return <Text style={{color: '#9F9F9F'}}>Close</Text>
    // }
    return status ? (
      <TouchableOpacity onPress={onPress}>
        <Text style={{color: '#FD962A'}}>Take</Text>
      </TouchableOpacity>
    ) : (
      <Text style={{color: '#9F9F9F'}}>Close</Text>
    );
  }

  function SetView(status) {
    return status ? (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: 10,
        }}>
          <TouchableOpacity onPress={nextScreen}>
        <Text style={{fontSize: 12, color: '#31BC5C', paddingRight: 15}}>
          View
        </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 12, color: '#F26F21'}}>Edit</Text>
      </View>
    ) : (
      <View />
    );
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.item_day}>
              <View style={styles.item_data}>
                <LinearGradient
                  colors={['#FEB12A', '#FD962A', '#FD7C2A']}
                  style={styles.linearGradient}>
                  <Text style={styles.buttonText}>Ca {item.ca}</Text>
                </LinearGradient>
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
                  <View style={{alignItems: 'flex-end', paddingRight: 20}}>
                    {SetStatus(item.status)}
                  </View>
                </View>
                {/* <Text style={{fontSize: 9, color: '#F26F21'}}>Chi tiet</Text> */}
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
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
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

                {SetView(item.status)}

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
  },
  item_data: {
    flexDirection: 'row',
  },
  data2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  linearGradient: {
    width: 50,
    height: 25,
    justifyContent: 'center',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    marginTop: 7,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
