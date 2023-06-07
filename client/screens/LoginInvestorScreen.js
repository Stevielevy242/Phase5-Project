import { ScrollView, TextInput, TouchableOpacity, Text, Keyboard, SafeAreaView, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../UserContext';
import * as SecureStore from 'expo-secure-store';


const LoginInvestorScreen = ({navigation}) => {

const [currentUser, setCurrentUser] = useContext(UserContext)

const [investorName, setInvestorName] = useState(null)
const [investorPassword, setInvestorPassword] = useState(null)

function handleInvestorName(text) {
    setInvestorName(text)
}

function handleInvestorPassword(text) {
    setInvestorPassword(text)
}

function handleSubmit() {
    console.log('submitting')
    fetch('http://localhost:3001/login_investors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({"username" : investorName,
                            "password" : investorPassword})
      })
      .then(res => {
        if(res.ok) {
          res.json()
          .then(data => {
            setCurrentUser(data.investor)
            SecureStore.setItemAsync('token', data.token)
          })
          navigation.replace('Chat')} 
        else {
          res.json()
          .then(data => alert(data.message))
        }
      })
  }

  return (
    <SafeAreaView style={styles.container}>
    <Image 
      style={styles.image}
      source={require("../Logo.png")}
      />
    <ScrollView>
    <TextInput 
      style={styles.input1}
      name='investorName'
      placeholder='username'
      onBlur={Keyboard.dismiss}
      autoCorrect={false}
    //   autoCapitalize={false}
      onChangeText={(text) => handleInvestorName(text)}
      onSubmitEditing={handleSubmit}
    />
    <TextInput 
      style={styles.input2}
      name='password'
      placeholder='password'
      onBlur={Keyboard.dismiss}
      autoCorrect={false}
      // autoCapitalize={false}
      secureTextEntry={true}
      onChangeText={(text) => handleInvestorPassword(text)}
      onSubmitEditing={handleSubmit}
    />
    <TouchableOpacity>
      <Text
      style={styles.text}
      onPress={handleSubmit}
      >Log In</Text>
    </TouchableOpacity>
  </ScrollView>
  </SafeAreaView>
  )
}

export default LoginInvestorScreen



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0B6DB7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 150,
    width: 150,
    padding: 20,
    top: 250
  },

  input1: {
    top: 300,
    backgroundColor: 'white',
    height: 30,
    width: 200,
  },

  input2: {
    top: 320,
    backgroundColor: 'white',
    height: 30,
    width: 200,
  },

  text: {
    fontSize: 24,
    color: 'white',
    top: 350,
    left: 70
  }

});