/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image
} from 'react-native';
import Home from './component/screen/Home';
import Quiz from './component/screen/quiz';
import Result from './component/screen/result';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation/navi';







const App = () => {
 

return (
  //we dont have to enclose navigation in view if we do that
  //we dont get any screen
    <NavigationContainer>
    <MyStack />
    </NavigationContainer>
 

)
};











export default App;
