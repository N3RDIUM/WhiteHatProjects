import React, { Component } from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
  Image,
} from 'react-native';
import firebase from 'firebase';
export default class LoadingScreen extends Component {
  componentDidMount() {
    //this.checkLogin();
    //this.props.navigation.navigate('login');
    if (firebase.auth().currentUser === null) {
      this.checkLogin();
    } else {
      this.props.navigation.navigate('dashboard');
      //console.log('already logged in!');
    }
  }
  checkLogin() {
    console.log('checking login...');
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        this.props.navigation.navigate('dashboard');
        //console.log(user.uid);
        //AsyncStorage.setItem('fname', fname);
        //AsyncStorage.setItem('profile', profile_picture);
        //console.log('already logged in!');
      } else {
        this.props.navigation.navigate('login');
        //console.log('do your login...!');
      }
    });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground
          source={require('../assets/feedcard-bg.jpg')}
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../assets/logo.png')} />
          <Text style={{ color: 'white', fontSize: 30 }}>Loading</Text>
          <ActivityIndicator size="large" color="white" />
        </ImageBackground>
      </View>
    );
  }
}
