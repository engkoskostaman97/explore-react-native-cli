/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="blue" />
        <Text>Hello World</Text>
        <Text>Hello World2</Text>
      </View>
    );
  }
}
