/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';
import Ic_nc from '../themes/Ic_nx';
import Icon_book from '../themes/Icon_book';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon_check from '../themes/Icon_check';
import Icon_teacher from '../themes/Icon_teacher';
export default function Item_feedback({nextScreen}) {
  const itemData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas1',
      name: 'Xây dựng trang web',
      mamon: 'WEB1013',
      class: 'LT16101_3',
      q1: '4',
      q2: '4',
      q3: '4',
      q4: '4',
      q5: '4',
      gpa: '4',
      taught: '16',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas2',
      name: 'Xây dựng trang web',
      mamon: 'WEB1013',
      class: 'LT16101_3',
      q1: '4',
      q2: '4',
      q3: '4',
      q4: '4',
      q5: '4',
      gpa: '4',
      taught: '16',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas3',
      name: 'Xây dựng trang web',
      mamon: 'WEB1013',
      class: 'LT16101_3',
      q1: '4',
      q2: '4',
      q3: '4',
      q4: '4',
      q5: '4',
      gpa: '4',
      taught: '16',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas4',
      name: 'Xây dựng trang web',
      mamon: 'WEB1013',
      class: 'LT16101_3',
      q1: '4',
      q2: '4',
      q3: '4',
      q4: '4',
      q5: '4',
      gpa: '4',
      taught: '16',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas5',
      name: 'Xây dựng trang web',
      mamon: 'WEB1013',
      class: 'LT16101_3',
      q1: '4',
      q2: '4',
      q3: '4',
      q4: '4',
      q5: '4',
      gpa: '4',
      taught: '16',
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
                  alignItems: 'center',
                  flexDirection: 'column',
                  paddingLeft: 10,
                }}>
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: '#fff',
                    borderColor: '#F59525',
                    borderWidth: 2,
                    marginBottom: 8,
                  }}
                />
                <View
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 2.5,
                    backgroundColor: '#F59525',
                    opacity: 0.5,
                    marginBottom: 5,
                  }}
                />
                <View
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 2.5,
                    backgroundColor: '#F59525',
                    opacity: 0.5,
                    marginTop: 5,
                  }}
                />
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: '#F59525',
                    marginTop: 8,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  paddingLeft: 13,
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                <Text style={{fontSize: 15, color: '#F59525'}}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 10, marginTop: 4}}>
                  {item.mamon} - {item.class}
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginRight: 8,
                    }}>
                    <Text style={{fontSize: 14, color: '#F59525'}}>Q1</Text>
                    <Text style={{fontSize: 10, marginTop: 4}}>{item.q1}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginRight: 8,
                    }}>
                    <Text style={{fontSize: 14, color: '#F59525'}}>Q2</Text>
                    <Text style={{fontSize: 10, marginTop: 4}}>{item.q1}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginRight: 8,
                    }}>
                    <Text style={{fontSize: 14, color: '#F59525'}}>Q3</Text>
                    <Text style={{fontSize: 10, marginTop: 4}}>{item.q1}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginRight: 8,
                    }}>
                    <Text style={{fontSize: 14, color: '#F59525'}}>Q4</Text>
                    <Text style={{fontSize: 10, marginTop: 4}}>{item.q1}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginRight: 8,
                    }}>
                    <Text style={{fontSize: 14, color: '#F59525'}}>Q5</Text>
                    <Text style={{fontSize: 10, marginTop: 4}}>{item.q1}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginRight: 8,
                    }}>
                    <Text style={{fontSize: 14, color: '#F59525'}}>GPA</Text>
                    <Text style={{fontSize: 10, marginTop: 4}}>{item.q1}</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                }}>
                <View
                  style={{
                    flex: 1,
                    borderRadius: 5,
                    alignItems: 'flex-end',
                    zIndex: 1,
                    elevation: 3,
                  }}>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      borderBottomLeftRadius: 100,
                      backgroundColor: '#F59525',
                      elevation: 3,
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'absolute',
                    }}
                  >
                    <Text style={{color: '#fff', fontSize: 16}}>16</Text>
                  </View>
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
    borderRadius: 5,
    // paddingTop: 5,
    // paddingBottom: 5,
  },
});
