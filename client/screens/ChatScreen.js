import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import ChatList from '../components/ChatList'

const ChatScreen = ({navigation}) => {

  return (
    <SafeAreaView> 
      <Header title="Chat" />
      <ChatList />

      
      {/* <Text onPress={() => navigation.navigate("Home")}>I Am The Chat Screen</Text> */}
      
    </SafeAreaView> 
  )
}

export default ChatScreen