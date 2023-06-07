import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../UserContext';

const MatchedScreen = ({navigation, route}) => {

    const { count, displayCompany } = route.params

    console.log("displayCompany" + displayCompany)

    const [company, setCompany] = useState("")

    const [currentUser, setCurrentUser] = useContext(UserContext)

    useEffect(() => {
        fetch(`http://localhost:3001/companies/${displayCompany}`)
        .then(res => res.json())
        .then(data => setCompany(data))
      }, [displayCompany])



  return (
    <SafeAreaView style={matchStyles.container}>

        <View style={matchStyles.match_con}>
            <Text style={matchStyles.text_match}>
                It's a Match!
            </Text>
        </View>

        <View style={matchStyles.pic_con}>
            <Image 
            style={matchStyles.img_pics}
            source={{ uri: currentUser.profile_pic }}
            />

            <Image 
            style={matchStyles.img_pics}
            source={{ uri: company.pic1 }}
            />
        </View>

        <TouchableOpacity style={matchStyles.msg_btn} onPress={() => {
            navigation.goBack(); 
            navigation.navigate("Chat")}
        }>
            <Text style={matchStyles.text_msg}>Send a Message</Text>
        </TouchableOpacity>
        
    </SafeAreaView>
  )
}

export default MatchedScreen




const matchStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        height: 100,
        backgroundColor: '#0B6DB7',
        paddingTop: 20,
        opacity: .89

    },

    match_con: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingTop: 20

      },

    text_match: {
        fontSize: 50,
        color: 'white'
    
      },

    pic_con: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 5,
        padding: 100

      },

    img_pics: {
        width: 120,
        height: 96,
        borderRadius: 100, 
        padding: 100

      },

    msg_btn: {
        backgroundColor: 'white',
        margin: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 100,
        marginTop: 20,
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'

      },

    text_msg: {
        fontSize: 24,

      },
  
  });




    