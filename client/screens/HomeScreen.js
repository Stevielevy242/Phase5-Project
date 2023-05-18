import { View, Text, Button, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import tw from 'tailwind-rn';


const HomeScreen = ({navigation}) => {

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   profile: {
//     width: 60,
//     height: 48,
//     left: 10
//   },

//   logo: {
//     width: 60,
//     height: 48,
//     left: 50
//   },
// });

  return (
    // <SafeAreaView style={styles.container}> 
    <SafeAreaView> 
        <View style={[tw`flex-1 flex-row bg-white rounded-full ml-2 justify-between`]}>
            <TouchableOpacity>
                {/* <Image style={styles.profile} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEKWsrQjrLklNeCqRe4FXVCTLKzyQaXWqwWUDyFvq8e1YXaPFu-thyqOzkiwXLshME9H0&usqp=CAU"}}/> */}
                <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEKWsrQjrLklNeCqRe4FXVCTLKzyQaXWqwWUDyFvq8e1YXaPFu-thyqOzkiwXLshME9H0&usqp=CAU"}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                {/* <Image style={styles.logo} source={require("../Logo.png")}/> */}
                <Image source={require("../Logo.png")}/>
            </TouchableOpacity>
            <Text>I Am The Home Screen</Text>
            <Button title='Go to Chat Screen' onPress={() => navigation.navigate('Chat')}/>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen