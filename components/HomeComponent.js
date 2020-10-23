import React from "react";
import { ScrollView,Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import {LEADERS} from '../shared/leaders';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';


function RenderItem (props) {
    const item=props.item;
    if (item!=null){
        if (item!=null) {
            return (<Card>
                
            <Card.Image source={require('./images/uthappizza.png')} style={{justifyContent:"center"}}>
            
            <Card.FeaturedTitle style={{ alignSelf: "center"}}>{item.name}</Card.FeaturedTitle>
            <Card.FeaturedSubtitle style={{ alignSelf: "center"}}>{item.designation}</Card.FeaturedSubtitle>
            </Card.Image>
            <Text style={{margin:10}}>
                {item.description}
            </Text>
            </Card>);
        }
    }
    return (<View></View>);
}

class Home extends React.Component {
    constructor (props) {
        super (props);
        this.state={
            dishes:DISHES,
            leaders:LEADERS,
            promotions:PROMOTIONS,
            comments:COMMENTS
        };
    }

    static NavigationOptions = {
        title: "Home",
      };

    render (){
        return (<ScrollView>
            <RenderItem item={this.state.dishes.filter(dish => dish.featured)[0]}></RenderItem>
            <RenderItem item={this.state.promotions.filter(promo => promo.featured)[0]}></RenderItem>
            <RenderItem item={this.state.leaders.filter(leader => leader.featured)[0]}></RenderItem>
        </ScrollView>)
    }
    
}

export default Home;