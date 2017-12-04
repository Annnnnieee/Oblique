import React, { Component } from 'react';
import {
  Text,
  View,
  AppRegistry,
  FlatList
} from 'react-native';
import Deck from '../components/Deck';
import { StackNavigator } from 'react-navigation';

export default class Decks extends Component {
  constructor(props){
    super(props);
    this.state = 
    {
      data: 
       [ {name: "deck1",
        cards: ["d1card1", "card2", "card3"] },
        {name: "deck2",
        cards: ["d2card1", "card2", "card3"] },
        {name: "deck3",
        cards: ["d3card1", "card2", "card3"] }]
      
    }
  }

    render() {
      const {navigate} = this.props.navigation; 
      return ( <FlatList
        data= {this.state.data}
        renderItem={({item}) => <Text onPress = {() => navigate('Deck', {item:item})}>{item.name}</Text>}
      />)
    }
  }

  AppRegistry.registerComponent('Decks', () => Decks);