import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import CtDiemdanh from './CtDiemdanh';
import CtLichhoc from './CtLichhoc';
import DiemdanhScreen from './Diemdanh';
import FeedbackScreen from './Feedback';
import LichDayScreen from './Lichday';
import LichhocScreen from './Lichhoc';
import LsDiemdanh from './LichsuDiemdanh';
import LichthiScreen from './Lichthi';
import LoginScreen from './Login';
import HomeScreen from './Main';
import MycourseScreen from './Mycourse';
import QRscreen from './QRscreen';

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
          <Stack.Screen name="QRscreen" component={QRscreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
