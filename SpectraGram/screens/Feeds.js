import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import FeedCard from '../components/FeedCard';
import firebase from 'firebase';
let lightThemeEnabled = false;

let customFont = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingFont: true,
      lightThemeEnabled: false,
      data: [
        {
          title: 'Do yoga to stay fit',
          image: require('../assets/image_1.jpg'),
          writer: 'big ant',
          content: 'I am doing Yoga.',
        },
        {
          title: 'Look at these delicious vegetables.',
          image: require('../assets/image_2.jpg'),
          writer: 'tiny building',
          content: 'Want to know where I got them from?',
        },
        {
          title: 'The best Curry ever!',
          image: require('../assets/image_3.jpg'),
          writer: 'miniature tree',
          content: "No, it's not from a hotel.",
        },
        {
          title: 'I went to Scotland',
          image: require('../assets/image_4.jpg'),
          writer: 'crunchy marshmello',
          content: 'I played a lot of golf there!',
        },
        {
          title: 'Anyone joining the cycling club?',
          image: require('../assets/image_5.jpg'),
          writer: 'sour pickle',
          content: 'Go to our website to join!',
        },
        {
          title: '1 trek every week(1TEW) image 2!',
          image: require('../assets/image_6.jpg'),
          writer: 'fizzy toothpaste',
          content: "I went to another trek!\nhere's the best pic.",
        },
        {
          title: 'The best lake to boat in!',
          image: require('../assets/image_7.jpg'),
          writer: 'noisy mouse',
          content:
            'This is a lake, I will not tell you where it is.\nI challenge you to find this place.\nThe first one to do so will get air!',
        },
      ],
    };
  }
  async _load_fonts() {
    await Font.loadAsync(customFont);
    this.setState({ loadingFont: false });
  }
  _initTheme = () => {
    let theme;
    firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid)
      .on('value', (snapshot) => {
        theme = snapshot.val().current_theme;
        //console.log('Theme: ' + theme);
        this.setState({ lightThemeEnabled: theme === 'light' });
      });
  };
  getThemeColors() {
    //this._initTheme();
    if (this.state.lightThemeEnabled) {
      //console.log('its light theme okay?');
      return {
        titleBar: '#99ccff',
        bg: '#eee',
        bgImg: '../assets/feedcard-bg-light.jpg',
        text: 'black',
      };
    } else if (!this.state.lightThemeEnabled) {
      //console.log('its dark theme okay?');
      return {
        titleBar: '#3333ff',
        bg: '#000099',
        bgImg: '../assets/feedcard-bg.jpg',
        text: 'white',
      };
    }
  }
  componentDidMount() {
    this._load_fonts();
    this._initTheme();
  }
  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item }) => {
    return <FeedCard feedItem={item} navigation={this.props.navigation} />;
  };
  render() {
    if (!this.state.loadingFont) {
      return (
        <View style={{ backgroundColor: this.getThemeColors().bg }}>
          <SafeAreaView
            style={{
              marginTop:
                Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              backgroundColor: this.getThemeColors().titleBar,
              width: '100%',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/logo.png')}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain',
                marginLeft: '15%',
              }}
            />
            <Text
              style={{
                fontFamily: 'Bubblegum-Sans',
                fontSize: RFValue(26),
                marginTop: RFValue(50) / 2 - RFValue(26) / 2 + RFValue(5),
                margin: RFValue(10),
                color: 'white',
              }}>
              Spectragram
            </Text>
          </View>
          <View style={{ margin: 2, marginBottom: 100 }}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.data}
              renderItem={this.renderItem}
              style={{ marginBottom: RFValue(100) }}
            />
          </View>
        </View>
      );
    } else {
      return (
        <ActivityIndicator
          size="large"
          color="tomato"
          style={{ alignSelf: 'center', marginTop: 50 }}
        />
      );
    }
  }
}
