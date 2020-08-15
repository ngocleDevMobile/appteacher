import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Item_danhmuc() {
  const navigation = useNavigation();
  const danhmuc = [
    {
      id: 'One',
      name: 'Lịch dạy',
      img: require('../assets/icons/ic_lichday.png'),
      color: '#EEF7FE',
      textColor: '#415EB6',
    },
    {
      id: 'Two',
      name: 'My course',
      img: require('../assets/icons/ic_mycourse.png'),
      color: '#FFFBEC',
      textColor: '#FFB110',
    },
    {
      id: 'Three',
      name: 'Điểm danh',
      img: require('../assets/icons/ic_diemdanh.png'),
      color: '#FEEEEE',
      textColor: '#AC4040',
    },
    {
      id: 'Four',
      name: 'Lịch học',
      img: require('../assets/icons/ic_lichhoc.png'),
      color: '#F0FFFF',
      textColor: '#23B0B0',
    },
    {
      id: 'Five',
      name: 'Feedback',
      img: require('../assets/icons/ic_feedback.png'),
      color: '#FFF6EC',
      textColor: '#FD7C2A',
    },
    {
      id: 'Six',
      name: 'Lịch thi',
      img: require('../assets/icons/ic_lichthi.png'),
      color: '#ECFFF3',
      textColor: '#0AB549',
    },
  ];

  const [data, setData] = useState(danhmuc);
  const newScreen = (key) => {
    if (key == 'One') {
      navigation.navigate('LichdayScreen');
    } else if (key == 'Two') {
      navigation.navigate('MycourseScreen');
    } else if (key == 'Three') {
      navigation.navigate('DiemdanhScreen');
    } else if (key == 'Four') {
      navigation.navigate('LichhocScreen');
    } else if (key == 'Five') {
      navigation.navigate('FeedbackScreen');
    } else if (key == 'Six') {
      navigation.navigate('LichthiScreen');
    }
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1,
                height: 120,
                margin: 10,
                borderRadius: 20,
                justifyContent: 'center',
                backgroundColor: item.color,
              }}>
              <TouchableOpacity onPress={() => newScreen(item.id)}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 15,
                    paddingRight: 15,
                  }}>
                  <Image style={{height: 45, width: 45}} source={item.img} />
                  <View>
                    <View
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: 2.5,
                        backgroundColor: item.textColor,
                      }}
                    />
                    <View
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: 2.5,
                        backgroundColor: item.textColor,
                        marginTop: 3,
                      }}
                    />
                    <View
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: 2.5,
                        backgroundColor: item.textColor,
                        marginTop: 3,
                      }}
                    />
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    color: item.textColor,
                    paddingLeft: 15,
                    paddingTop: 3,
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: item.textColor,
                    paddingLeft: 15,
                    paddingTop: 5,
                  }}>
                  Học kỳ Summer
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  GridViewContainer: {
    height: 120,
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center',
  },
});
