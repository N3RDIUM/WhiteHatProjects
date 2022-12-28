import React, { Component } from 'react';
import { Text, View, Button, ImageBackground, Image } from 'react-native';
import firebase from 'firebase';
export default class LoadingScreen extends Component {
  constructor() {
    super();
    this.state = {
      lightThemeEnabled: false,
      bg_light: require('../assets/feedcard-bg-light.jpg'),
      bg: require('../assets/feedcard-bg.jpg'),
    };
  }
  async componentDidMount() {
    //await AsyncStorage.setItem("loggedIn",true)
    this._forced_checkLogin();
    this._initTheme();
    //console.log(firebase.auth().currentUser);
  }
  getThemeColors() {
    //this._initTheme();
    if (this.state.lightThemeEnabled) {
      //console.log('its light theme okay?');
      return {
        titleBar: '#99ccff',
        bg: '#eee',
        bgImg: this.state.bg_light,
        text: 'black',
      };
    } else if (!this.state.lightThemeEnabled) {
      //console.log('its dark theme okay?');
      return {
        titleBar: '#3333ff',
        bg: '#000099',
        bgImg: this.state.bg,
        text: 'white',
      };
    }
  }
  _initTheme = () => {
    let theme;
    firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid)
      .on('value', (snapshot) => {
        theme = snapshot.val().current_theme;
        // console.log('Theme: ' + theme);
        this.setState({ lightThemeEnabled: theme === 'light' });
      });
  };
  _forced_checkLogin() {
    //console.log('!FORCED checking login...');
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        this.props.navigation.navigate('dashboard');
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
          source={this.getThemeColors().bgImg}
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/logo.png')}
            style={{ width: 80, height: 80 }}
          />
          <Text
            style={{
              fontSize: 15,
              margin: 15,
              color: this.getThemeColors().text,
            }}>
            Dashboard!
          </Text>
          <Button
            title="Go to feed"
            onPress={() => {
              this.props.navigation.navigate('home');
            }}
          />
        </ImageBackground>
      </View>
    );
  }
}
