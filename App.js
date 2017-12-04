
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';

import { StackNavigator } from 'react-navigation';


import Decks from './components/Decks'
import Deck from './components/Deck'

const Details = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const RootNavigator = StackNavigator({
  Decks: {
    screen: Decks,
  },
  Deck: {
    screen: Deck,
  },
});

export default RootNavigator;