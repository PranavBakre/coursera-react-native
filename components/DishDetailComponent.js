import React from 'react'
import {View, FlatView,Text} from 'react-native'
import {Card} from 'react-native-elements'
import {DISHES} from '../shared/dishes';


function RenderDish(props) {
    const dish= props.dish;
    if (dish!=null) {
        return (
            <Card>
                
                <Card.Image source={require('./images/uthappizza.png')} style={{justifyContent:"center"}}>
                <Card.FeaturedTitle  style={{color:"white",alignSelf:"center"}}>{dish.name}</Card.FeaturedTitle>    
                </Card.Image>
                
                <Text style={{margin:10}}>
                    {dish.description}
                </Text>
            </Card>
        );
    }
    return (
        <View></View>
    )
}

class DishDetail extends React.Component {
 constructor(props) {
     super(props) 
     this.state = {
         dishes : DISHES
     }
 }
 static NavigationOptions = {
    title:'Dish Details'
}
    render (){
        const dishId = this.props.route.params.dishId ?? '';
    return (
        <RenderDish dish={this.state.dishes[+dishId]}></RenderDish>
    )
}
}

export default DishDetail