import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import ChatRow from './ChatRow'
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const ChatList = () => {

  const [currentUser, setCurrentUser, currentCompany, setCurrentCompany] = useContext(UserContext)

    const [messages,setMessages] = useState([]);

    currentUser ? (
      useEffect(() => {
        fetch(`http://localhost:3001/investors/${currentUser.id}/messages`)
        .then(res => res.json())
        .then(data => setMessages(data))
      }, [])
      ) : (
        useEffect(() => {
          fetch(`http://localhost:3001/companies/${currentCompany.id}/messages`)
          .then(res => res.json())
          .then(data => setMessages(data))
        }, []))




  return (

    messages.length > 0 ? (
        <FlatList 
        style={styles.list}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatRow messageDetails={item} />}
        />
    ) : (
        <View style={styles.text_con}>
            <Text style={styles.text}>No matches at the moment😢</Text>
        </View>
    )

  )
}

export default ChatList



const styles = StyleSheet.create({

    list: {
      height: 1000
    },

    text_con: {
        padding: 5
    },

    text: {
        alignSelf: 'center',
        fontSize: 24
    }
  
  });