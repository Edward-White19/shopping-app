import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import HelpScreen from '../screens/HelpScreen';
import ShopViewScreen from '../screens/ShopViewScreen';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        screenOptions={{ headerShown: false }}
      />
      <Stack.Screen
        name='Help'
        component={HelpScreen}
        screenOptions={{ headerShown: false }}
      />
      <Stack.Screen
        name='Shop'
        component={ShopViewScreen}
        screenOptions={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});