import { ScrollView, TextInput, TouchableOpacity, Text, Keyboard, SafeAreaView } from 'react-native'
import React, { useState,useEffect } from 'react'

import * as SecureStore from 'expo-secure-store';


const LoginScreenI = ({navigation}) => {

const [currentUser, setCurrentUser] = useState(null)

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
                            "password" : investorPassword
                })
        })
      .then(res => {
        if(res.ok) {
          res.json()
          .then(data => setCurrentUser(data))
          navigation.replace('Home')
        } else {
          res.json()
          .then(data => alert(data.message))
        }
      })
  }

  return (
    <SafeAreaView>
    <ScrollView>
    <TextInput 
      name='investorName'
      placeholder='username'
      onBlur={Keyboard.dismiss}
      autoCorrect={false}
    //   autoCapitalize={false}
      onChangeText={(text) => handleInvestorName(text)}
      onSubmitEditing={handleSubmit}
    />
    <TextInput 
      name='password'
      placeholder='password'
      onBlur={Keyboard.dismiss}
      autoCorrect={false}
    //   autoCapitalize={false}
      onChangeText={(text) => handleInvestorPassword(text)}
      onSubmitEditing={handleSubmit}
    />
    <TouchableOpacity>
      <Text
      onPress={handleSubmit}
      >Log In</Text>
    </TouchableOpacity>
  </ScrollView>
  </SafeAreaView>
  )
}

export default LoginScreenI