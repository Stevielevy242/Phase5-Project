import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const ModalScreen = () => {

  const [currentUser] = useContext(UserContext)

  console.log(currentUser)


  return (
    <SafeAreaView style={styles.container}>
       
        <Text>InvestMate©️</Text> 
        <Image style={styles.logo} source={require("../Logo.png")}/>

        <View style={styles.view_box}>
          <Text style={styles.modal_text}>Welcome User:</Text>
          <Text style={styles.profile_text}>{currentUser.name}</Text>
        </View>

        <View style={styles.view_box}>
          <Text style={styles.modal_text}>Username:</Text>
          <Text style={styles.profile_text}>{currentUser.username}</Text>
        </View>

        <View style={styles.view_box}>
          <Text style={styles.email_text}>Email:</Text>
          <Text style={styles.profile_text}>{currentUser.email}</Text>
        </View>

        <Image style={styles.pic} source={{uri: currentUser.profile_pic}}/>

    </SafeAreaView>
  )
}

export default ModalScreen


const styles = StyleSheet.create({

    container: {
      flex: 1,
      top: 1,
      alignItems: 'center',
    },

    logo: {
      width: 60,
      height: 48,
      borderRadius: 100
    },

    view_box: {
      alignContent: 'center',
      justifyContent: 'center',
      padding: 40
    },
  
    modal_text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
      },

    profile_text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "gray",
      },

      email_text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        left: 95
      },

      pic: {
        width: 200,
        height: 200,
        padding: 20,
        borderRadius: 100
      },
  
  });
  
    