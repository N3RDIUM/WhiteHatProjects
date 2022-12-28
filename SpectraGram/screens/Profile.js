import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  Switch,
} from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
let lightThemeEnabled = false;
export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      isEnabled: false,
      lightThemeEnabled: false,
    };
  }
  componentDidMount() {
    this._initTheme();
  }
  _initTheme() {
    //console.log('loading user-preferred theme...');
    firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid + '/current_theme')
      .get()
      .then((data) => {
        //console.log(data);
        this.setState({
          lightThemeEnabled: data === 'dark' ? true : false,
          isEnabled: data === 'light' ? true : false,
        });
        lightThemeEnabled = this.state.lightThemeEnabled;
      });
  }
  toggleSwitch = (val) => {
    this.setState({ isEnabled: !this.state.isEnabled });
    let theme = this.state.isEnabled ? 'light' : 'dark';
    firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid + '/current_theme')
      .set(theme);
    this.setState({
      lightThemeEnabled: this.state.isEnabled,
    });
    lightThemeEnabled = this.state.lightThemeEnabled;
    //console.log(val);
  };
  getThemeColors() {
    if (this.state.lightThemeEnabled) {
      return {
        button: '#99ccff',
      };
    } else if (!this.state.lightThemeEnabled) {
      return {
        button: '#0066ff',
      };
    }
  }
  render() {
    return (
      <View>
        <ImageBackground
          source={require('../assets/feedcard-bg.jpg')}
          style={{
            width: '100%',
            height: '100%',
          }}>
          <Image
            source={{
              uri: firebase.auth().currentUser.photoURL,
            }}
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
              resizeMode: 'contain',
              marginTop: 100,
            }}
          />
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 20,
              fontSize: 30,
              marginBottom: 50,
              color: 'white',
            }}>
            {firebase.auth().currentUser.displayName}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
              margin: 2,
            }}>
            <Text
              style={{
                marginTop: 20,
                fontSize: 18,
                marginBottom: 50,
                color: 'white',
              }}>
              Dark Theme:
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={this.isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={(val) => {
                //console.log(val);
                this.toggleSwitch(val);
              }}
              value={this.state.isEnabled}
            />
            <Text
              style={{
                marginTop: 20,
                fontSize: 18,
                marginBottom: 50,
                color: 'white',
              }}>
              {this.state.lightThemeEnabled ? 'off' : 'on'}
            </Text>
          </View>
          <Button
            title="To the dashboard"
            color={this.getThemeColors().button}
            onPress={async () => {
              //console.log('signing out...');
              //console.log(firebase.auth().currentUser);
              this.props.navigation.navigate('init');
            }}
          />
          <Button
            title="logout"
            color={this.getThemeColors().button}
            onPress={async () => {
              //console.log('signing out...');
              //console.log(firebase.auth().currentUser);
              await firebase
                .auth()
                .signOut()
                .then(async () => {
                  console.log('Done!');
                  //console.log(firebase.auth());
                  this.props.navigation.navigate('init');
                  //console.log('nav-ing to signin screen');
                });
            }}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
