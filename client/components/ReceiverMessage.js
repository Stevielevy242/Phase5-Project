import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const ReceiverMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      {/* <Image 
      style={styles.image}
      source={{ uri: message.investor_pic }}
      /> */}
      <Text style={styles.text}>{message.text}</Text>
    </View>
  )
}

export default ReceiverMessage


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginHorizontal: 15,
        marginVertical: 15,
        marginLeft: 5,
        alignSelf: 'flex-start', 
      },

    image: {
        height: 40,
        width: 40,
        borderRadius: 100, 
        position: 'absolute',
        top: 0, 
        left: -14
      },

    text: {
        color: 'white'
      },
  
  });