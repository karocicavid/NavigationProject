import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import {MovieFinderScreen,EntertaimentScreen,CalculatorScreen,ToolsScreen} from "../Screens";
import {LogoTitle} from "../Logo";

const Stack = createStackNavigator();

export function EntertaimentStack({navigation}){
  return  (
    <Stack.Navigator>
      <Stack.Screen name = " " component={EntertaimentScreen} options={{headerLeft:()=>(<LogoTitle navigation={navigation}/>)}}/>
      <Stack.Screen name = "MovieFinder" component={MovieFinderScreen} options={{headerTitleAlign:'center'}}/>
    </Stack.Navigator>
            )
}
export function ToolsStack({navigation}){
  return (
    <Stack.Navigator>
      <Stack.Screen name = " " component={ToolsScreen} options={{headerLeft:()=>(<LogoTitle navigation={navigation}/>)}}/>
      <Stack.Screen name = "Calculator" component={CalculatorScreen}/>
    </Stack.Navigator>
            )
}

  