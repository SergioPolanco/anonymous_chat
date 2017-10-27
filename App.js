/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Home from './navigator/navigator'


export default class MainApp extends Component {
  render() {
    return (
      <View style={styles.containerParent}>
        <Home/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerParent: {
    flex: 1
  }
});