import React from "react";
import {ScrollView, View,Platform} from 'react-native'
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";
import {createStackNavigator} from '@react-navigation/stack';
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { NavigationContainer } from "@react-navigation/native";


const MenuNavigator  = createStackNavigator()
// {
//   Menu:{screen:Menu},
//   DishDetail:{screen:DishDetail}
// },{
//   initialRouteName:'Menu',
//   navigationOptions:{
//     headerStyle:{
//       backgroundColor:'#512DA8'
//     },
//     headerTintColor:'#FFF',
//     headerTitleStyle:{
//       color:'#FFF'
//     }
//   }
// }
class Main extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
    <View style={{flex:1,paddingTop:Platform.OS==='ios'?0:Expo.Constants.statusBarHeight}}>
      <NavigationContainer>
      <MenuNavigator.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerStyle:{
                backgroundColor:'#512DA8'
              },
              headerTintColor:'#FFF',
              headerTitleStyle:{
                color:'#FFF'
              }
      }}>
        <MenuNavigator.Screen name="Menu" component={Menu}></MenuNavigator.Screen>
        <MenuNavigator.Screen name="Dish Details" component={DishDetail}></MenuNavigator.Screen>
      </MenuNavigator.Navigator>
      </NavigationContainer>

      </View>
    );
  }
}

export default Main;
