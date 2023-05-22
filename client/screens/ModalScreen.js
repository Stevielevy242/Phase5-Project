import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ModalScreen = () => {
  return (
    <View style={styles.container}>
        {/* <Image /> */}
        <Text>InvestMate Brand & Logo</Text>

        <Text style={styles.modal_text}>Welcome User</Text>
    </View>
  )
}

export default ModalScreen


const styles = StyleSheet.create({

    container: {
      flex: 1,
      top: 1,
      alignItems: 'center',
    },
  
    modal_text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "gray"
      },
  
  });
  
    