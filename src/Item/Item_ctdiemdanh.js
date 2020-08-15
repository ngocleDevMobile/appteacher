/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import Ic_check from '../themes/Ic_check';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Item_mycourse({nextScreen}) {
  const itemData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas',
      name: 'Le Xuan Ngoc',
      room: 'R502',
      mssv: 'PS09755',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63d',
      name: 'Le Xuan Ngoc',
      mssv: 'PS09755',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72a',
      name: 'Le Xuan Ngoc',
      mssv: 'PS09755',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72q',
      name: 'Le Xuan Ngoc',
      mssv: 'PS09755',
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
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  margin: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/images/ngoc.jpg')}
                  style={{width: 60, height: 60, borderRadius: 30}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: 5,
                }}>
                <Text style={{fontSize: 14}}>{item.name}</Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#6E7FAA',
                    marginTop: 4,
                    opacity: 0.8,
                  }}>
                  {item.mssv}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  paddingRight: 10,
                }}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    borderColor: '#F59525',
                    borderWidth: 1,
                    borderStyle: 'dashed',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Ic_check />
                </View>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    borderColor: '#6E7FAA',
                    borderWidth: 1,
                    marginRight: 5,
                    borderStyle: 'dashed',
                  }}
                />
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
    // justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 4,
  },
});
