import React from 'react';
import {createAppContainer} from 'react-navigation'
import { StyleSheet, Text, View,Image } from 'react-native';
import Readscreen from './screens/Readscreen'
import Writescreen from './screens/Writescreen'
import {createBottomTabNavigator} from 'react-navigation-tabs' 

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  )
  }
}

const TabNavigator=createBottomTabNavigator({
  WriteStory: Writescreen,
  ReadStory: Readscreen
},
{
defaultNavigationOptions:({navigation})=>({
  tabBarIcon: ()=>{
    const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteStory"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "ReadStory"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    
  }
})


  
})
const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
