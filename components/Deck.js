import React, { Component } from 'react';
import {
  Text,
  View,
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';

//add an onclick handler to rerender the screen to display a new random card. 

export default class Deck extends Component {
    render() {
      const { item } = this.props.navigation.state.params;
      return (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.cards[1]}</Text>
        </View>
      );
    }
  }

  AppRegistry.registerComponent('Deck', () => Deck);

