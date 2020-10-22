import React from "react";
import { ScrollView, View, Platform } from "react-native";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Home from './HomeComponent';
import { createStackNavigator } from "@react-navigation/stack";
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

const MenuNavigator = () => {
  const MenuNavigator=createStackNavigator();
  return (<MenuNavigator.Navigator
    initialRouteName="Menu"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTintColor: "#FFF",
      headerTitleStyle: {
        color: "#FFF",
      },
    }}
  >
    <MenuNavigator.Screen name="Menu" component={Menu}>
    </MenuNavigator.Screen>
    <MenuNavigator.Screen name="Dish Details" component={DishDetail}>
    </MenuNavigator.Screen>
  </MenuNavigator.Navigator>)
}
const HomeNavigator =()=>{ 
  const HomeNavigator=createStackNavigator();
  return (<HomeNavigator.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTintColor: "#FFF",
      headerTitleStyle: {
        color: "#FFF",
      },
    }}
  >
     <HomeNavigator.Screen name="Home" component={Home}>
    </HomeNavigator.Screen>
    {/*<HomeNavigator.Screen name="Dish Details" component={DishDetail}>
    </HomeNavigator.Screen> */}
  </HomeNavigator.Navigator>)
}
const MainNavigator =()=>  {
  const MainNavigator=createDrawerNavigator();
  return(
    <MainNavigator.Navigator backgroundColor="#D1C4E9" initialRouteName="Home">
      <MainNavigator.Screen name="Home" component={HomeNavigator}></MainNavigator.Screen>
      <MainNavigator.Screen name="Menu" component={MenuNavigator}></MainNavigator.Screen>
    </MainNavigator.Navigator>
  )
}
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios"
            ? 0
            : Expo.Constants.statusBarHeight,
        }}
      >
        <NavigationContainer>
          <MainNavigator/>
        </NavigationContainer>
      </View>
    );
  }
}

export default Main;
