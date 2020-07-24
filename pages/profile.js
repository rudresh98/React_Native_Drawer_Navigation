import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Button,
    Text,
    StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();

export default function ProfileStackScreen()
{
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="PROFILE"
            component={ProfileScreen}/>
        </Stack.Navigator>

    )
}

 function ProfileScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button
        title="go to notification"
        onPress={()=>navigation.navigate('notification')}
        />
        <Button
            title="goback"
            onPress={()=>navigation.goBack()}/>
      </View>
    );
  }