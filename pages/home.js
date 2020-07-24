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
import Icon from 'react-native-vector-icons/Ionicons';


const Stack=createStackNavigator();

export default function HomeStackScreen({navigation})
{
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="home"
            component={HomeScreen}
            
            options={{
              title:"Home",
              headerLeft:()=>(
                <Icon.Button name='camera' size={25}
                backgroundColor='white' onPress={() => navigation.openDrawer()}/>
              )

            }}/>
        </Stack.Navigator>

    )
}

 function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="go to profile"
        onPress={()=>navigation.navigate('profile')}
        />
      </View>
    );
  }
