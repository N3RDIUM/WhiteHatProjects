import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import { Header } from 'react-native-elements';
import axios from 'axios';
import WebView from 'react-native-webview';
import * as Speech from 'expo-speech';

var windowHeight = Dimensions.get('window').height;
var windowWidth = Dimensions.get('window').width;

export default class DailyPic extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      reading: false,
      paused: false,
    };
  }
  componentDidMount() {
    this.getDailyPic();
  }
  read(word) {
    Speech.speak(word);
  }
  stop() {
    Speech.stop();
  }
  pause() {
    Speech.pause();
  }
  resume() {
    Speech.resume();
  }
  getDailyPic = async () => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=bAJiGVQjcc7zfp0WthmVLD5gYLyBcX8IADei5LcM'
      )
      .then((data) => {
        this.setState({ data: data.data });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  goTo = (screen) => {
    this.props.navigation.navigate(screen);
  };
  render() {
    if (Object.keys(this.state.data).length === 0) {
      return (
        <View>
          <ImageBackground
            source={require('../assets/bg.jpg')}
            style={{ height: windowHeight, width: windowWidth }}>
            <Header
              backgroundColor={'#c1c1c14f'}
              centerComponent={{
                text: 'Stellar',
                style: { color: '#fff', fontSize: 20 },
              }}
            />
            <Text style={styles.title}>Daily Pictures</Text>
            <ScrollView style={styles.container}>
              <Text style={styles.title}>Loading...</Text>
            </ScrollView>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.goTo('homescreen');
              }}>
              <Text style={styles.btext}>Back</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      );
    } else {
      return (
        <View>
          <ImageBackground
            source={require('../assets/bg.jpg')}
            style={{ height: '100%', width: '100%' }}>
            <Header
              backgroundColor={'#c1c1c14f'}
              centerComponent={{
                text: 'Stellar',
                style: { color: '#fff', fontSize: 20 },
              }}
            />
            <Text style={styles.title}>Daily Pictures</Text>
            <ScrollView>
              {this.state.data.media_type==='video' || (this.state.media_type!='video'&&this.state.media_type!='image')
                ?<WebView
                source={{ uri: this.state.data.url }}
                style={{ height: 250 }}
                scalesPageToFit
              />
              :<Image source={this.state.data.url} style={{width:windowWidth,resizeMode:'contain'}}/>
              }
              <Text style={styles.titleOfPic}>{this.state.data.title}</Text>
              <Text style={styles.content}>{this.state.data.date}</Text>
              <Text style={styles.content}>{this.state.data.explanation}</Text>
              <View style={{ flexDirection: 'row',alignItems:'center' }}>
                <TouchableOpacity
                  style={styles.readbutton}
                  onPress={() => {
                    if (this.state.reading === false) {
                      this.setState({ reading: true, paused: false });
                      this.read(this.state.data.explanation);
                    } else {
                      this.setState({ reading: false, paused: true });
                      this.stop();
                    }
                  }}>
                  <Text style={styles.btext}>
                    {this.state.reading ? 'Stop' : 'Read Aloud'}
                  </Text>
                </TouchableOpacity>
                {Platform.OS === 'web'
                ?<TouchableOpacity
                  style={styles.pausebutton}
                  onPress={() => {
                    if (this.state.reading) {
                      if (this.state.paused === false) {
                        this.setState({ paused: true });
                        this.pause();
                      } else {
                        this.setState({ paused: false });
                        this.resume();
                      }
                    }
                  }}>
                  <Text style={styles.btext}>
                    {this.state.paused ? 'Play' : 'Pause'}
                  </Text>
                </TouchableOpacity>
                :<View />
                }
              </View>
              <Text style={styles.content}>{'\n'}</Text>
              <Text style={styles.content}>
                {this.state.data.copyright!=undefined?'© ' + this.state.data.copyright:''}
              </Text>
            </ScrollView>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (this.state.reading) {
                  this.setState({ reading: false, paused: true });
                  this.stop();
                }
                this.goTo('homescreen');
              }}>
              <Text style={styles.btext}>Back</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    margin: 2,
    color: '#ffffff',
  },
  titleOfPic: {
    alignSelf: 'center',
    fontSize: 25,
    margin: 15,
    color: '#ffffff',
  },
  content: {
    alignSelf: 'center',
    fontSize: 20,
    margin: 15,
    color: '#ffffff',
  },
  button: {
    alignSelf: Platform.OS==='web'?'':'center',
    backgroundColor: '#c1c1c19f',
    width: '80%',
    paddingTop: 10,
    paddingBottom: 10,
    margin: 20,
    borderRadius: 10,
  },
  readbutton: {
    alignSelf: 'center',
    backgroundColor: '#c1c1c19f',
    width: '80%',
    paddingTop: 10,
    paddingBottom: 10,
    margin: 1,
    borderRadius: 10,
  },
  pausebutton: {
    alignSelf: 'center',
    backgroundColor: '#c1c1c19f',
    width: '15%',
    paddingTop: 10,
    paddingBottom: 10,
    margin: 1,
    borderRadius: 10,
  },
  btext: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#000000ff',
  },
});
