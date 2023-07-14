import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
  TouchableOpacity,
  View,
  Image
} from 'react-native';







const Result = ({ navigation ,route}) => {

  const {score} = route.params
  console.log(score)


   const imageUrl= score>10?"https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png":
      "https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png"
  
    
   

  return (
    <View style={styles.container} >
      <View >
        <Text style={styles.title}>Result:{score}</Text>
      </View>

      <View style={styles.img}>
        <Image style={styles.imgAct} source={{ uri:imageUrl}} />
      </View>

      <View style={styles.button}>

        <TouchableOpacity onPress={() => navigation.navigate("Home")} >

          <Text style={styles.buttonTxt} >Home</Text>

        </TouchableOpacity>

      </View>


    </View>

  )
};

const styles = StyleSheet.create({

  
  container: {
    paddingTop: 20,
    height: "100%"
  },
  title:{
    fontSize:30,
    fontWeight:'700',
    textAlign:'center' 
  },
  img: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  imgAct:{
     height: 400, width: 400 
  },
  button: {
    paddingBottom: 10,
    padding: 10,
    backgroundColor: 'yellow',
    borderRadius: 10,
    marginBottom: 10
  },
  buttonTxt: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
})







export default Result;
