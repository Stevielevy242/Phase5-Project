import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator initialRouteName="Home"/>
    </NavigationContainer>
  );
}


    // <View style={styles.container}>
    //   <Text>Hi</Text>
    //   <Button title='Click Me'></Button>
    //   <StatusBar style="auto" />
    // </View>

    
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

