import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SenderMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message.text}</Text>
    </View>
  )
}

export default SenderMessage


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'purple',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginHorizontal: 15,
        marginVertical: 15,
        alignSelf: 'center', 
        marginLeft: 'auto',
        width: 'auto',
        height: 'auto'
      },

    text: {
        color: 'white'
      },
  
  });