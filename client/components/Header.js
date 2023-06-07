import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import * as SecureStore from 'expo-secure-store';

const Header = ({title, callEnabled, backArrow}) => {

    const navigation = useNavigation()

    const [currentUser, setCurrentUser, currentCompany, setCurrentCompany] = useContext(UserContext)

    function handleLogout() {
        setCurrentCompany(null)
        SecureStore.deleteItemAsync('token_company')
        navigation.replace('PreScreen')
      }

  return (
    <View style={styles.container}>
        <View style={styles.small_con}>
            { currentUser ? (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrow} >
                <Ionicons name='chevron-back-outline' size={34} color="#0B6DB7" />
            </TouchableOpacity>
            ) : (
            <TouchableOpacity onPress={handleLogout} style={styles.logout} >
                <Ionicons name='log-out-outline' size={34} color="#0B6DB7" />
            </TouchableOpacity>
            ) }

        {backArrow && (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.newArrow} >
                <Ionicons name='chevron-back-outline' size={34} color="#0B6DB7" />
            </TouchableOpacity>)}
            
            <Text style={styles.title}>{title}</Text>
        </View>

        {callEnabled && (
            <TouchableOpacity style={styles.telephone}>
                <Foundation style={styles.telephone1} name='telephone' size={26} color="white"/>
            </TouchableOpacity>
        )}

    </View>
  )
}

export default Header


const styles = StyleSheet.create({

    container: {
      padding: 2,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    small_con: {
        flexDirection: "row",
        alignItems: 'center',
      },

    arrow: {
        padding: 4
      },

    newArrow: {
        left: -35
      },

    logout: {
        left: 325
      },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingLeft: 4
    },

    telephone: {
        borderRadius: 100,
        marginRight: 20,
        padding: 3,
        backgroundColor: '#0B6DB7',
        width: 40,
        height: 40,
        alignContent: 'center',
        justifyContent: 'center'
    },

    telephone1: {
        alignSelf: 'center',
    }
  
  });
  