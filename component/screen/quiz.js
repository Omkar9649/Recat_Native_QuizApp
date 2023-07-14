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
  TouchableOpacity
} from 'react-native';







const Quiz = ({ navigation }) => {
  //all states
  const [Question, setQuestion] = useState()
  const [que, setque] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [Option, setOption] = useState([])
  const [score, setscore] = useState(0)


  const getData = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986'

    //    const response=await axios.get(url)
    //    console.log(response)
    //    console.log("hhhhkkjfkljczxjgklzxfj")
    //     setQuestion(response.results)
    setIsLoading(true)
    const res = await fetch(url);
    const data = await res.json();
    setQuestion(data.results);
    setOption(generateandShuffle(data.results[0]))
    // //  console.log(data)
    // console.log(Question[0].question)
    // console.log("jjbfjksdfndjkn")
    setIsLoading(false)
  }

  useEffect(() => {
    getData()

  }, [])

  //function
  const handleQuestion = () => {
    setque(que + 1)

    //we have to pass que+1 in here also 
    //because que+1 in above not reflect in this function
    //it reflects out of function
    //hence we have to give que+1 here also
    setOption(generateandShuffle(Question[que + 1]))

  }

  // shufflearray
  const shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
  }

  const generateandShuffle = (choice) => {
    const choiceArr = [...choice.incorrect_answers]
    choiceArr.push(choice.correct_answer)
    shuffle(choiceArr)
    return choiceArr

  }

  const handleselectedOption = (option) => {
    console.log(option == Question[que].correct_answer)
    if (option == Question[que].correct_answer) {
      setscore(score + 10)
    }
    if(que!=9)
    {
       //this is to directly move question to next question
       setque(que + 1)
       setOption(generateandShuffle(Question[que + 1]))
    }
    // console.log(score)
  }











  return (
    <View style={styles.container}>
      {isLoading ? <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Text style={{ fontSize: 32, fontWeight: '700' }}>LOADING...</Text>


      </View> : Question && (

        <View style={styles.container}>
          <View>

            <Text style={styles.title}>Q {decodeURIComponent(Question[que].question)}</Text>

          </View>
          <View style={styles.optionMain} >
            <TouchableOpacity style={styles.option} onPress={() => handleselectedOption(Option[0])}>
              <Text style={styles.optionText}>{decodeURIComponent(Option[0])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleselectedOption(Option[1])}>
              <Text style={styles.optionText}>{decodeURIComponent(Option[1])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleselectedOption(Option[2])}>
              <Text style={styles.optionText}>{decodeURIComponent(Option[2])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleselectedOption(Option[3])}>
              <Text style={styles.optionText}>{decodeURIComponent(Option[3])}</Text>
            </TouchableOpacity>
          </View>




          <View style={styles.buttonFlex}>

            {que != 9 &&
              <TouchableOpacity style={styles.buttons} onPress={handleQuestion}>
                <Text style={styles.buttonTxt}>Skip</Text>
              </TouchableOpacity>
            }

            {que == 9 &&
              <TouchableOpacity onPress={() => navigation.navigate("Result",{score:score})} style={styles.buttons}>
                <Text style={styles.buttonTxt}>End</Text>
              </TouchableOpacity>
            }
            {/* <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonTxt}>Next</Text>
        </TouchableOpacity> */}
          </View>
        </View>
      )}
    </View>


  )
};

const styles = StyleSheet.create({

  container: {
    paddingTop: 20,
    height: "100%"
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center'
  },
  optionMain: {
    flex: 1,
    paddingTop: 10,
    marginTop: 15

  },
  option: {
    paddingBottom: 10,
    padding: 10,
    backgroundColor: 'yellow',
    borderRadius: 10,
    marginBottom: 10

  },
  optionText: {
    fontSize: 20,
    fontWeight: '600',
  }
  ,
  buttonFlex: {
    
    alignItems:'center'
  },
  buttons: {
    paddingBottom: 20,
    padding: 20,
    backgroundColor: 'yellow',
    borderRadius: 20,
    marginBottom: 20,
    // width: 100,
    alignItems: 'center',
    
  },
  buttonTxt: {
    fontSize: 20,
    fontWeight: '700',
  }











}







)








export default Quiz;
