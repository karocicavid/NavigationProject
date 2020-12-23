import React from 'react';
import {View,Button} from 'react-native';
import MovieFinder from '../MovieFinder/MovieFinder';
import Calculator from '../Calculator/Calculator';
import { WebView } from 'react-native-webview';
import { DrawerActions } from '@react-navigation/native';

export function MovieFinderFunc({}) {
    return(
        <>
         <MovieFinder/>
        </>
      );
}
export function EntertaimentList({navigation}) {
    return(
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <Button title="MovieFinder" onPress={()=>(navigation.navigate('MovieFinder'))}/>
        </View>
      );
}
export function CalculatorFunc({}) {
    return(
        <>
         <Calculator/>
        </>
      );
}
export function ToolsList({navigation}) {
    return(
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <Button title="Calculator" onPress={()=>(navigation.navigate('Calculator'))}/>
        </View>
      );
}
export function CloseScreen({ navigation }){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Press button or Swipe Right" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
      </View>
    );
}
  
export function NewsScreen({navigation}){
      return(
        <>
          <Button title="Menu"  onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
          <WebView
            source={{
              uri: 'https://oxu.az'
            }}
            style={{ marginTop: 20 }}
          />
        </>
      );
}
export function ProfileScreen({navigation}) {
    return(<><Button title="Open menu" onPress={()=>(navigation.dispatch(DrawerActions.openDrawer()))}/></>) 
 }
export function SettingsScreen({navigation}) {
    return(<><Button title = "Open menu" onPress={()=>(navigation.dispatch(DrawerActions.openDrawer()))}/></>) 
}