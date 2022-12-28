import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Header } from 'react-native-elements';
import WebView from 'react-native-webview';

export default class StarView extends Component {
  render() {
    return <WebView source={{ uri: 'https://reactnative.dev/',baseUrl:'https://reactnative.dev/' }} style = {this.props.style} />;
  }
}
