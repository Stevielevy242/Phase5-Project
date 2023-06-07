import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const PreScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>

        <Text style={styles.text}>InvestMate©️</Text>

        <Image 
        style={styles.image}
        source={require("../Logo.png")}
        />

        <TouchableOpacity onPress={() => navigation.navigate("LoginInvestor")} style={styles.btn1}>
            <Text>Sign In as an Investor</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("LoginCompany")} style={styles.btn2}>
            <Text>Sign In as a Company</Text>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default PreScreen



const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0B6DB7',

    },

    text: {
        color: 'white',
        fontSize: 50,
        bottom: 125
    },

    image: {
        // flex: 1,
        height: 200,
        width: 200,
        position: 'relative',
        bottom: 50
    },

    btn1: {
        position: 'absolute',
        bottom: 275,
        width:  200, 
        height: 50,
        backgroundColor: 'white',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }, 

    btn2: {
        position: 'absolute',
        bottom: 200,
        width:  200, 
        height: 50,
        backgroundColor: 'white',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }, 

});