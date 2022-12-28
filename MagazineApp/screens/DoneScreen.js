import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import MagazineContent from '../components/MagazineContent';

export default class DoneScreen extends Component {
  render() {
    return (
      <View>
        <MagazineContent
          text={this.props.navigation.getParam('text')}
          showWeather={this.props.navigation.getParam('showWeather')}
          back={() => this.props.navigation.navigate('MainScreen')}
        />
      </View>
    );
  }
}
