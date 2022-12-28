import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';

let customFont = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingFont: true,
      images: [
        require('../assets/logo.png'),
        require('../assets/image_1.jpg'),
        require('../assets/image_2.jpg'),
        require('../assets/image_3.jpg'),
        require('../assets/image_4.jpg'),
        require('../assets/image_5.jpg'),
      ],
      lightThemeEnabled: false,
      bg_light: require('../assets/feedcard-bg-light.jpg'),
      bg: require('../assets/feedcard-bg.jpg'),
    };
  }
  componentDidMount() {
    this._load_fonts();
    this._initTheme();
  }
  async _load_fonts() {
    Font.loadAsync(customFont);
    this.setState({ loadingFont: false });
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
        //console.log('Theme: ' + theme);
        this.setState({ lightThemeEnabled: theme === 'light' });
      });
  };
  render() {
    if (!this.state.loadingFont) {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.androidSafeArea} />
          <View
            style={
              !this.state.lightThemeEnabled
                ? styles.headerContainer
                : styles.headerContainer_light
            }>
            <Image
              source={require('../assets/logo.png')}
              style={styles.appIcon}
            />
            <Text style={styles.titleText}>Spectragram</Text>
          </View>
          <ImageBackground
            source={this.getThemeColors().bgImg}
            style={{ borderRadius: RFValue(10), width: '100%', margin: 5 }}>
            <View
              style={
                !this.state.lightThemeEnabled
                  ? styles.postWriterContainer
                  : styles.postWriterContainer_light
              }>
              <Image
                source={require('../assets/profile_img.png')}
                style={styles.postProfileImage}
              />
              <Text
                style={
                  !this.state.lightThemeEnabled
                    ? styles.postWriterName
                    : styles.postWriterName_light
                }>
                {this.props.route.params.post.writer}
              </Text>
            </View>
            <ScrollView style={styles.postContainer}>
              <Image
                source={this.props.route.params.post.image}
                style={styles.postImage}
              />
              <Text
                style={
                  !this.state.lightThemeEnabled
                    ? styles.postTitleText
                    : styles.postTitleText_light
                }>
                {this.props.route.params.post.title}
              </Text>
              <Text
                style={
                  !this.state.lightThemeEnabled
                    ? styles.postContentText
                    : styles.postContentText_light
                }>
                {this.props.route.params.post.content}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('home');
                }}
                style={
                  !this.state.lightThemeEnabled
                    ? styles.backButton
                    : styles.backButton_light
                }>
                <Text style={styles.backText}>BACK</Text>
              </TouchableOpacity>
            </ScrollView>
          </ImageBackground>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000099',
  },
  androidSafeArea: {
    height: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#3333ff',
    width: '100%',
    alignItems: 'center',
  },
  headerContainer_light: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#99ccff',
    width: '100%',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(26),
    marginTop: RFValue(50) / 2 - RFValue(26) / 2 + RFValue(5),
    margin: RFValue(10),
    color: 'white',
  },
  appIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginLeft: '15%',
  },
  backButton: {
    width: '40%',
    height: RFValue(45),
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#3333ff66',
    margin: 5,
  },
  backButton_light: {
    width: '40%',
    height: RFValue(45),
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e1e166',
    margin: 5,
  },
  backText: {
    fontSize: RFValue(28),
    color: '#ffffff',
    fontFamily: 'Bubblegum-Sans',
    alignSelf: 'center',
  },
  postContainer: {
    width: '100%',
    height: '80%',
  },
  postImage: {
    width: '95%',
    height: 250,
    alignSelf: 'center',
    resizeMode: 'contain',
    margin: 20,
  },
  postWriterContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#3333ff',
    width: '100%',
    margin: RFValue(10),
  },
  postWriterContainer_light: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#ddf',
    width: '100%',
    margin: RFValue(10),
  },
  postProfileImage: {
    width: RFValue(50),
    height: RFValue(50),
    resizeMode: 'contain',
    marginLeft: '15%',
  },
  postWriterName: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(26),
    marginTop: RFValue(50) / 2 - RFValue(26) / 2 + RFValue(5),
    margin: RFValue(10),
    color: 'white',
  },
  postWriterName_light: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(26),
    marginTop: RFValue(50) / 2 - RFValue(26) / 2 + RFValue(5),
    margin: RFValue(10),
    color: 'black',
  },
  postTitleText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(30),
    color: '#ffffff',
    margin: 5,
    alignSelf: 'center',
  },
  postTitleText_light: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(30),
    color: '#000000',
    margin: 5,
    alignSelf: 'center',
  },
  postContentText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(20),
    color: '#ffffff',
    margin: 5,
    marginBottom: RFValue(50),
    alignSelf: 'center',
  },
  postContentText_light: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(20),
    color: '#000000',
    margin: 5,
    marginBottom: RFValue(50),
    alignSelf: 'center',
  },
});
