import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../component/screen/Home';
import Quiz from '../component/screen/quiz';
import Result from '../component/screen/result';
import React, { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();
/* to hide header we have to use 
options={{headerShown:false}}
*/
function MyStack() {
  return (
    <Stack.Navigator>
  
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}}/>
      <Stack.Screen name="Result" component={Result} options={{headerShown:false}}/>
     
    </Stack.Navigator>

  );
}

export  default MyStack;