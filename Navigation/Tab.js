import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ProfileScreen,SettingsScreen} from '../Screens/Screens'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Text} from 'react-native';


const Tab = createBottomTabNavigator();
export function AboutMeScreen({}){
    return (
        <Tab.Navigator tabBarOptions={{labelStyle: {fontSize: 21}}}>
          <Tab.Screen name="Profile"  component={ProfileScreen}/>
          <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
      );
}