import { View, Text, SafeAreaView, TextInput, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, FlatList, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SenderMessage from '../components/SenderMessage'
import ReceiverMessage from '../components/ReceiverMessage'
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const MessageScreen = ({route}) => {

    const [currentUser] = useContext(UserContext)

    const [messages,setMessages] = useState([]);
    const [input, setInput] = useState('')

    function get_msgs() {
      fetch(`http://localhost:3001/messages/${currentUser.id}/${route.params.company_id}`)
        .then(res => res.json())
        .then(data => setMessages(data.slice(0, -1)))
    }

    useEffect(() => {
        get_msgs()
    }, [])

    
    function sendMessage(){
      fetch('http://localhost:3001/messages', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "text": input,
          "sent_by_user" : true,
          "investor_id": currentUser.id,
          "company_id": route.params.company_id
        }),
      })
      .then(res => res.json())
      .then(data => {
        get_msgs()
        console.log(data)
        setInput('')
      })

    }

    console.log(route.params) 
    console.log(messages) 


  return (
    <SafeAreaView style={styles.container}>
        
      <Header title={route.params.company_name} callEnabled/>
    
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.AvoidingView}
        keyboardVerticalOffset={10}
        >
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList 
              data={messages}
              inverted={-1}
              style={styles.FlatList}
              keyExtractor={item => item.id}
              renderItem={({ item: message }) => 
              message.sent_by_user == true ? (
                  <SenderMessage key={message.id} message={message} />
                  ) : (
                  <ReceiverMessage key={message.id} message={message} />
                  )
              }
          />
          </TouchableWithoutFeedback>

            <View style={styles.input}>
                <TextInput 
                style={styles.keyboard}
                placeholder='Send Message...'
                onChangeText={setInput}
                onSubmitEditing={sendMessage}
                value={input}
                />

                <TouchableOpacity onPress={sendMessage}>
                    <Text style={styles.btn}>Send</Text>
                </TouchableOpacity>

                {/* <Button style={styles.btn} onPress={sendMessage} title="Send" color="#0B6DB7"/> */}
            </View>

        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default MessageScreen



const styles = StyleSheet.create({

    container: {
        flex: 1
      },

    AvoidingView: {
        flex: 1
      },

    FlatList: {
        paddingLeft: 4
      },

    input: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 2, 
        backgroundColor: 'white',
      },

    keyboard: {
      height: 30,
      fontSize: 18,
      paddingLeft: 4
    },

    btn: {
        fontSize: 18,
        padding: 10,
        color: "#0B6DB7"
    }
  
  
  });