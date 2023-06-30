/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import NavigationHandler from './src/navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import gameList from './src/screens/GameList';
import Favorite from './src/screens/Favorite';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NavigationHandler />
    </NavigationContainer>
  );
}

export default App;
