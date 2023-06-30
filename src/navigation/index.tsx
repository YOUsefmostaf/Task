import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import gameList from '../screens/GameList';
import Favorite from '../screens/Favorite';

const Tab = createBottomTabNavigator();

const NavigationHandler = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#252946',
          paddingVertical: 10,
          height: Dimensions.get('window').height * 0.075,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarLabelStyle: {
          fontSize: 20,
          paddingBottom: Dimensions.get('window').height * 0.02,
        },
        tabBarIcon: ({focused}) => {
          return null;
        },
        tabBarActiveTintColor:'#fff'
      }}>
      <Tab.Screen name="GameList" component={gameList} />
      <Tab.Screen name="Favorite" component={Favorite} />
    </Tab.Navigator>
  );
};

export default NavigationHandler;
