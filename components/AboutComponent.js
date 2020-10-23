import React from "react";
import { FlatList, ScrollView, View,Text } from "react-native";
import { Avatar, Card, ListItem } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import {LEADERS} from '../shared/leaders'
class About extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            leaders:LEADERS
        }
    }
  render() {
      const renderLeader= ({item,index}) => {
          return(
              <ListItem key={index} chevron={false}>
<Avatar rounded source={require("./images/alberto.png")}></Avatar>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <Text>{item.description}</Text>
          </ListItem.Content>
              </ListItem>
          )

      }
     return (
       <View>
         <Card>
          <Card.Title>Our History</Card.Title>
          <Card.Divider></Card.Divider>
          <Text>
            Started in 2010, Ristorante con Fusion quickly established itself as
            a culinary icon par excellence in Hong Kong. With its unique brand
            of world fusion cuisine that can be found nowhere else, it enjoys
            patronage from the A-list clientele in Hong Kong. Featuring four of
            the best three-star Michelin chefs in the world, you never know what
            will arrive on your plate the next time you visit us.{"\n"}
          </Text>
          <Text>
            The restaurant traces its humble beginnings to The Frying Pan, a
            successful chain started by our CEO, Mr. Peter Pan, that featured
            for the first time the world's best cuisines in a pan.
          </Text>
        </Card>

        
        <Card containerStyle={{marginBottom:10}}> 
            <Card.Title>Our Leadership</Card.Title>
             <Card.Divider></Card.Divider>
             
        <FlatList style={{height:100}}
            data={this.state.leaders}
            renderItem={renderLeader}
            keyExtractor={(item) => item.id.toString()}
            ></FlatList>
            </Card>
            
 
    
     </View>
    );
  }
}

export default About;
