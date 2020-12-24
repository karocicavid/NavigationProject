import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AboutMeScreen} from './Tab'
import {EntertaimentScreen,ToolsScreen} from './Stack';
import {CloseScreen,NewsScreen} from '../Screens/Screens';
const Drawer = createDrawerNavigator();

export function MyDrawer(){
  return(
    <Drawer.Navigator initialRouteName={'Close'} drawerContentOptions={{style:{backgroundColor:'white'},labelStyle:{fontSize:26,fontFamily:'serif'}}}>
      <Drawer.Screen name = 'Entertaiment' component={EntertaimentScreen}/>
      <Drawer.Screen name ="News" component={NewsScreen}/>
      <Drawer.Screen name ="Tools" component={ToolsScreen}/>
      <Drawer.Screen name ="AboutMe" component={AboutMeScreen}/>
      <Drawer.Screen name ="Close" component={CloseScreen}/>
    </Drawer.Navigator>
  )
}
