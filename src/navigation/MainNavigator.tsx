import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../pages/SplashScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="MainApp" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
