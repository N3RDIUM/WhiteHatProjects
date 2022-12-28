import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Picker,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import firebase from 'firebase';
let customFont = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingFont: true,
      image: 'sample',
      images: [
        require('../assets/logo.png'),
        require('../assets/image_1.jpg'),
        require('../assets/image_2.jpg'),
        require('../assets/image_3.jpg'),
        require('../assets/image_4.jpg'),
        require('../assets/image_5.jpg'),
      ],
      title: '',
      content: '',
      lightThemeEnabled: false,
    };
  }
  _initTheme = () => {
    let theme;
    firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid)
      .on('value', (snapshot) => {
        theme = snapshot.val().current_theme;
        console.log('Theme: ' + theme);
        this.setState({ lightThemeEnabled: theme === 'light' });
      });
  };
  async _load_fonts() {
    await Font.loadAsync(customFont);
    this.setState({ loadingFont: false, title: '' });
  }
  componentDidMount() {
    this._load_fonts();
    this._initTheme();
  }
  getImg() {
    if (this.state.image == 'sample') {
      return this.state.images[0];
    } else if (this.state.image == 'image_1') {
      return this.state.images[1];
    } else if (this.state.image == 'image_2') {
      return this.state.images[2];
    } else if (this.state.image == 'image_3') {
      return this.state.images[3];
    } else if (this.state.image == 'image_4') {
      return this.state.images[4];
    } else if (this.state.image == 'image_5') {
      return this.state.images[5];
    }
  }
  render() {
    return (
      <View
        style={
          !this.state.lightThemeEnabled
            ? styles.container
            : styles.container_light
        }>
        <SafeAreaView style={styles.androidSafeArea} />
        <View
          style={
            !this.state.lightThemeEnabled
              ? styles.headerContainer
              : styles.headerContainer_light
          }>
          <Image
            source={require('../assets/logo.png')}
            style={{
              width: 50,
              height: 50,
              resizeMode: 'contain',
              marginLeft: '15%',
            }}
          />
          <Text style={styles.titleText}>Spectragram</Text>
        </View>
        <ImageBackground
          source={require('../assets/feedcard-bg.jpg')}
          style={styles.formContainer}>
          <ScrollView>
            <Image
              style={{
                width: '95%',
                height: RFValue(250),
                alignSelf: 'center',
                resizeMode: 'contain',
                margin: 20,
              }}
              source={this.getImg()}
            />
            <View
              style={
                !this.state.lightThemeEnabled
                  ? styles.pickerBG
                  : styles.pickerBG_light
              }>
              <Picker
                selectedValue={this.state.previewImage}
                style={
                  !this.state.lightThemeEnabled
                    ? styles.picker
                    : styles.picker_light
                }
                onValueChange={(itemValue, itemIndex) => {
                  //console.log(itemValue);
                  this.setState({
                    image: itemValue,
                  });
                }}>
                <Picker.Item label="Select an image" value="sample" />
                <Picker.Item label="Image 1" value="image_1" />
                <Picker.Item label="Image 2" value="image_2" />
                <Picker.Item label="Image 3" value="image_3" />
                <Picker.Item label="Image 4" value="image_4" />
                <Picker.Item label="Image 5" value="image_5" />
              </Picker>
            </View>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ title: text })}
              placeholder={'Post Title'}
              placeholderTextColor="white"
            />
            <TextInput
              style={[styles.textInput, styles.textInputLarge]}
              onChangeText={(text) => this.setState({ content: text })}
              placeholder={'Post Content'}
              multiline
              scrollEnabled
              placeholderTextColor="white"
            />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#001155',
    backfaceVisibility: '1',
  },
  container_light: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    backfaceVisibility: '1',
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
  picker: {
    width: '80%',
    height: RFValue(30),
    alignSelf: 'center',
    margin: 4,
    color: 'white',
    fontColor: 'black',
  },
  picker_light: {
    width: '80%',
    height: RFValue(30),
    alignSelf: 'center',
    margin: 4,
    color: 'black',
    fontColor: 'white',
  },
  formContainer: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textInput: {
    height: RFValue(40),
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(20),
    margin: RFValue(20),
  },
  textInputLarge: {
    height: RFValue(200),
    alignItems: 'flex-start',
    margin: RFValue(20),
    marginBottom: RFValue(100),
  },
  pickerBG: {
    backgroundColor: '#0000aa',
    width: '85%',
    height: RFValue(35),
    justifyContent: 'center',
    alignSelf: 'center',
    margin: RFValue(20),
  },
  pickerBG_light: {
    backgroundColor: '#eee',
    width: '85%',
    height: RFValue(35),
    justifyContent: 'center',
    alignSelf: 'center',
    margin: RFValue(20),
  },
});
