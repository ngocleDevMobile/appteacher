import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function Item_open() {
  const navigation = useNavigation();
  const itemData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas',
      name: 'Dự án mẫu(ngành Mobile) - LT15201',
      room: 'R502',
      ca: '4',
      location: 'Phan Mem Quang Trung',
      class: 'LT15201',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63d',
      name: 'Dự án mẫu(ngành Mobile) - LT15201',
      room: 'R502',
      ca: '4',
      location: 'Phan Mem Quang Trung',
      class: 'LT15201',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72a',
      name: 'Dự án mẫu(ngành Mobile) - LT15201',
      room: 'R502',
      ca: '4',
      location: 'Phan Mem Quang Trung',
      class: 'LT15201',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72q',
      name: 'Dự án mẫu(ngành Mobile) - LT15201',
      room: 'R502',
      ca: '4',
      location: 'Phan Mem Quang Trung',
      class: 'LT15201',
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
                  backgroundColor: '#FE952A',
                  width: 50,
                  height: 50,
                  borderRadius: 4,
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#fff'}}>{item.room}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: 5,
                }}>
                <Text style={{fontSize: 14}}>{item.name}</Text>
                <Text style={{fontSize: 10, color: '#F59525', marginTop: 4}}>
                  {item.class}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingRight: 10,
                }}>
                <Pressable onPress={() => navigation.navigate('QRscreen')}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../assets/images/qr-code.png')}
                  />
                </Pressable>
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
