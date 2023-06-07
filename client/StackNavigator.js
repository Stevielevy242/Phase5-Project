import { View, Text, SafeAreaView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import ModalScreen from './screens/ModalScreen';
import MatchedScreen from './screens/MatchedScreen';
import LoginInvestorScreen from './screens/LoginInvestorScreen';
import PreScreen from './screens/PreScreen';
import LoginCompanyScreen from './screens/LoginCompanyScreen';
import MessageScreen from './screens/MessageScreen';
import CompanyMsgScreen from './screens/CompanyMsgScreen';
import { UserContext } from './UserContext';
import { useState, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store';

const Stack = createNativeStackNavigator();

const StackNavigator = ({navigation}) => {


  const [currentUser, setCurrentUser] = useState(null)
  const [currentCompany, setCurrentCompany] = useState(null)
  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    async function checkToken() {
      const token = await SecureStore.getItemAsync('token')
      if(token) {
          // console.log(token)
          const headers = {
            'Authorization': `Bearer ${token}`
          }
          const res = await fetch('http://localhost:3001/check_token_investor', { headers })
          const data = await res.json()
          // console.log(data)
          setCurrentUser(data.investor)
          setLoaded(true)
          }
        else {
          setLoaded(true)
        }
      }
      checkToken()
  }, [])

  useEffect(() => {
    async function checkTokenCompany() {
      const token_company = await SecureStore.getItemAsync('token_company')
      console.log(token_company)
      if(token_company) {
          // console.log(token)
          const headers = {
            'Authorization': `Bearer ${token_company}`
          }
          const res = await fetch('http://localhost:3001/check_token_company', { headers })
          const data = await res.json()
          // console.log(data)
          setCurrentCompany(data.company)
          setLoaded(true)
        } 
        else {
          setLoaded(true)
        }
      }
      checkTokenCompany()
  }, [])

  if (!loaded) {
    return <SafeAreaView><Text>Loading...</Text></SafeAreaView>
  }

  return (
    <UserContext.Provider value={[currentUser, setCurrentUser, currentCompany, setCurrentCompany]}>
      <Stack.Navigator screenOptions={ {headerShown: false}}>
          
          { !currentUser && !currentCompany ? 
          <>
          <Stack.Screen name="PreScreen" component={PreScreen} />
          <Stack.Screen name="LoginInvestor" component={LoginInvestorScreen} />
          <Stack.Screen name="LoginCompany" component={LoginCompanyScreen} />
          </>
          :
          currentUser ? 
          <>
            <Stack.Group>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Chat" component={ChatScreen} />
              <Stack.Screen name="Message" component={MessageScreen} />
            </Stack.Group>

            <Stack.Group screenOptions={{ presentation: 'modal' }}>
              <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>

            <Stack.Group screenOptions={{ presentation: 'transparentModal' }}>
              <Stack.Screen name="Match" component={MatchedScreen} />
            </Stack.Group>
          </>
          :
          <>
            <Stack.Group>
              <Stack.Screen name="Chat" component={ChatScreen} />
              {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
              <Stack.Screen name="CompanyMessage" component={CompanyMsgScreen} />
            </Stack.Group>
          </>
        }
      </Stack.Navigator>
    </UserContext.Provider>
  )
}

export default StackNavigator