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
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import Quiz from './quiz';







/*we have to pass navigation as function in jsx
like-{navigation}
*/
const Home = ({ navigation }) => {

   

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Quizzler</Text>
            <View style={styles.imgcont}>
                <Image style={styles.img} 
                source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png'}} />
                </View> 
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Quiz")}
                    style={styles.button}
                >
                    <Text style={styles.buttonTxt} >Start</Text>
                </TouchableOpacity>


            </View>

            <StatusBar hidden={true} />


        </View>

    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center'
    },

    container: {
        paddingTop: 20,
        height: "100%"
    },
    imgcont: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        resizeMode:'contain'
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
    imgcont:{
        flex:1,
        justifyContent:'center',
       alignItems:'center'
    },
    img:{
        height: 400, width: 400 
    }


    /* 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png'}} /> */
            






















})





























export default Home;
