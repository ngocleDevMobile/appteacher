import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeTab from './HomeTab';
import ProfileTab from './OpenTab';

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Home Tab"
      tabBarOptions={{
        activeTintColor: '#FA7032',
        inactiveTintColor: '#F8CB97',
        showLabel: false,
        style: {
          height: 70,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
      }}>
      <Tab.Screen
        name="Home Tab"
        component={HomeTab}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Open Tab"
        component={ProfileTab}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-lock-open-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Main;
