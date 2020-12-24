import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import {MovieFinderFunc,EntertaimentList,CalculatorFunc,ToolsList} from "../Screens/Screens";
import {LogoTitle} from "../Styles/logotitle";

const Stack = createStackNavigator();

export function EntertaimentScreen({navigation}){
  return  (
    <Stack.Navigator>
      <Stack.Screen name = " " component={EntertaimentList} options={{headerLeft:()=>(<LogoTitle navigation={navigation}/>)}}/>
      <Stack.Screen name = "MovieFinder" component={MovieFinderFunc} options={{headerTitleAlign:'center'}}/>
    </Stack.Navigator>
            )
}
export function ToolsScreen({navigation}){
  return (
    <Stack.Navigator>
      <Stack.Screen name = " " component={ToolsList} options={{headerLeft:()=>(<LogoTitle navigation={navigation}/>)}}/>
      <Stack.Screen name = "Calculator" component={CalculatorFunc}/>
    </Stack.Navigator>
            )
}

  