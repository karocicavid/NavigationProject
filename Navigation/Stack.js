import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import {MovieFinderFunc,EntertaimentList,CalculatorFunc,ToolsList} from "../Screens/Screens";
const Stack = createStackNavigator();

export function EntertaimentScreen({navigation}){
  return  (
    <Stack.Navigator>
      <Stack.Screen name = " " component={EntertaimentList} options={{headerLeft:()=>(<Button
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        title='Menu'
        color="gray"
      />)}}/>
      <Stack.Screen name = "MovieFinder" component={MovieFinderFunc} options={{headerTitleAlign:'center'}}/>
    </Stack.Navigator>
            )
}
export function ToolsScreen({navigation}){
  return (
    <Stack.Navigator>
      <Stack.Screen name = " " component={ToolsList} options={{headerLeft:()=>(<Button
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        title="Menu"
        color="gray"
      />)}}/>
      <Stack.Screen name = "Calculator" component={CalculatorFunc} options={{headerTitleAlign:'center'}}/>
    </Stack.Navigator>
            )
}