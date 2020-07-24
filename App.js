/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Homescreen from './pages/home'
import profilescreen from "./pages/profile";
import HomeStackScreen from './pages/home';
import notiscreen from './pages/notification';
import ProfileStackScreen from './pages/profile';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();






function App() {
  return (
    <NavigationContainer>
<Drawer.Navigator>
  <Drawer.Screen
  name="home"
  component={HomeStackScreen}/>
  <Drawer.Screen
  name="profile"
  component={ProfileStackScreen}/>
  <Drawer.Screen
  name="notification"
  component={notiscreen}/>

</Drawer.Navigator>


      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="profile" component={profilescreen} />

      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }
  }
)