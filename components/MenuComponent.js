import React from "react";
import { View, FlatList, Image } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { DISHES } from "../shared/dishes";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  static NavigationOptions = {
    title: "Menu",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderMenuItem = ({ item, index }) => {
      return (
        <ListItem
          key={index}
          chevron={false}
          onPress={() => navigate("Dish Details", { dishId: item.id })}
        >
          <Image source={require("./images/uthappizza.png")}></Image>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    };

    return (
      <FlatList
        data={this.state.dishes}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id.toString()}
      >
      </FlatList>
    );
  }
}

export default Menu;
