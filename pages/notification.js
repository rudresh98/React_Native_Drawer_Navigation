import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function notiscreen({navigation}){
    return(
        <View style={styles.container}>
            <Text>
                notiscreen
            </Text>
            <Button
            title="goback"
            onPress={()=>navigation.goBack()}/>
            <Button
            title="go home"
            onPress={()=>navigation.navigate('home')}/>
        </View>
        )
}

const styles = StyleSheet.create(
    {
      container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      }
    }
  )