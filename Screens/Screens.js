import React from 'react';
import {View,Button, ImageBackground,Image, Text} from 'react-native';
import MovieFinder from '../MovieFinder/MovieFinder';
import Calculator from '../Calculator/Calculator';
import { WebView } from 'react-native-webview';
import { DrawerActions } from '@react-navigation/native';
import {styles} from '../Styles/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {LogoTitle} from "../Styles/logotitle";
export function MovieFinderFunc({}) {
    return(
        <>
         <MovieFinder/>
        </>
      );
}
export function EntertaimentList({navigation}) {
    return(
            <ImageBackground source={require('../image/entertaiment.png')} style={styles.imageEntertaiment}>
              <TouchableOpacity onPress={()=>(navigation.navigate('MovieFinder'))}><Text style={styles.textMovieFinder}>MovieFinder</Text></TouchableOpacity>
            </ImageBackground>
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
          
            <ImageBackground source={require('../image/tools.png')} style={styles.imageEntertaiment}>
              <TouchableOpacity onPress={()=>(navigation.navigate('Calculator'))}><Text style={styles.textMovieFinder}>Calculator</Text></TouchableOpacity>
            </ImageBackground>
          
      );
}
export function CloseScreen({ navigation }){
    return (
      <View style={styles.viewClose}>
        <ImageBackground style={styles.imageClose} resizeMode='contain' source={require("../image/main.jpg")}>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}><Text style={styles.textClose}>Press button or Swipe Right</Text></TouchableOpacity>
        </ImageBackground>
      </View>
    );
}
  
export function NewsScreen({navigation}){
      return(
        <>
         <LogoTitle navigation={navigation}/>
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
    return(<>
    <LogoTitle navigation={navigation}/>
    <Image style={styles.imageEntertaiment} source={require('../image/profile.png')}/>
    </>) 
 }
export function SettingsScreen({navigation}) {
  return(<>
    <LogoTitle navigation={navigation}/>
    <Image style={styles.imageEntertaiment} source={require('../image/settings.png')}/>
    </>) 
}
