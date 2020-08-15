import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './Login';
import HomeScreen from './Main';
import LichDayScreen from './Lichday';
import MycourseScreen from './Mycourse';
import DiemdanhScreen from './Diemdanh';
import LichhocScreen from './Lichhoc';
import FeedbackScreen from './Feedback';
import LichthiScreen from './Lichthi';
import CtLichhoc from './CtLichhoc';
import CtDiemdanh from './CtDiemdanh';
import LsDiemdanh from './LichsuDiemdanh';

import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="MainScreen" component={HomeScreen} />
          <Stack.Screen name="LichdayScreen" component={LichDayScreen} />
          <Stack.Screen name="MycourseScreen" component={MycourseScreen} />
          <Stack.Screen name="DiemdanhScreen" component={DiemdanhScreen} />
          <Stack.Screen name="LichhocScreen" component={LichhocScreen} />
          <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
          <Stack.Screen name="LichthiScreen" component={LichthiScreen} />
          <Stack.Screen name="CtLichhoc" component={CtLichhoc} />
          <Stack.Screen name="CtDiemdanh" component={CtDiemdanh} />
          <Stack.Screen name="LsDiemdanh" component={LsDiemdanh} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
