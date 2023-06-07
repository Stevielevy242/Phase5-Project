import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const ChatRow = ({messageDetails}) => {

    const navigation = useNavigation()

    // const [lastMessage, setLastMessage] = useState('')

    const [currentUser, setCurrentUser, currentCompany, setCurrentCompany] = useContext(UserContext)

   

  return (
  <>
    {currentUser ? (
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Message", { company_id: messageDetails.company_id, company_name: messageDetails.company })}>
            {/* {console.log("details " + messageDetails)} */}
          {/* {console.log(messageDetails.company)} */}
        <Image 
        style={styles.image}
        source={{ uri: messageDetails.company_pic}}
        />

        <View>
            <Text style={styles.text}>{messageDetails.company}</Text>
            <Text>"Say Hi!"</Text>
        </View>
    </TouchableOpacity>
    ) : (
      // <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Message", { company_id: messageDetails.company_id, company_name: messageDetails.company })}>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("CompanyMessage", { investor_id: messageDetails.investor_id, investor_name: messageDetails.investor })}>
                  {/* {console.log(messageDetails)} */}
                {/* {console.log(messageDetails.company)} */}
              <Image 
              style={styles.image}
              source={{ uri: messageDetails.investor_pic}}
              />

              <View>
                  <Text style={styles.text}>{messageDetails.investor}</Text>
                  <Text>"Say Hi!"</Text>
              </View>
          </TouchableOpacity>
    )}
  </>
  )
}

export default ChatRow



const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 7,
        // borderRadius: 50,
        // justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity:  0.2,
        shadowRadius: 1.41,
        elevation: 2
    },

    image: {
        borderRadius: 100,
        height: 50, 
        width: 50, 
        marginRight: 15
    }, 

    text: {
        fontSize: 18,
        fontWeight: "bold"
    }
  
  });