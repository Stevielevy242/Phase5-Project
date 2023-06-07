import { ScrollView, TextInput, TouchableOpacity, Text, Keyboard, SafeAreaView, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../UserContext';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';


const LoginCompanyScreen = () => {

const [currentUser, setCurrentUser, currentCompany, setCurrentCompany] = useContext(UserContext)

const [companyName, setCompanyName] = useState(null)
const [companyPassword, setCompanyPassword] = useState(null)
const navigation = useNavigation()


function handleCompanyName(text) {
    setCompanyName(text)
}

function handleCompanyPassword(text) {
    setCompanyPassword(text)
}

function handleSubmit() {
    console.log('submitting')
    fetch('http://localhost:3001/login_companies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({"name" : companyName,
                            "password" : companyPassword})
      })
      .then(res => {
        if(res.ok) {
          res.json()
          .then(data => {
            // console.log(data)
            setCurrentCompany(data.company)
            SecureStore.setItemAsync('token_company', data.token_company)
            // console.log(data.token_company)
            // console.log('testing')
            navigation.navigate("Chat")
            // navigation.replace('Chat')
          })
        } else {
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
      name='companyName'
      placeholder='name'
      onBlur={Keyboard.dismiss}
      autoCorrect={false}
    //   autoCapitalize={false}
      onChangeText={(text) => handleCompanyName(text)}
      onSubmitEditing={handleSubmit}
    />
    <TextInput 
      style={styles.input2}
      name='password'
      placeholder='password'
      onBlur={Keyboard.dismiss}
      autoCorrect={false}
      secureTextEntry={true}
    //   autoCapitalize={false}
      onChangeText={(text) => handleCompanyPassword(text)}
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

export default LoginCompanyScreen


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