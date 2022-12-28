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
import StarView from './StarWebView';
import { WebView } from 'react-native-webview';
import GetLocation from 'react-native-get-location';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default class StarMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri:
        'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true',
      show: false,
    };
  }
  async componentDidMount() {
    this.findCoordinates()
  }
  findCoordinates = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords)
          this.setState({uri:"https://virtualsky.lco.global/embed/index.html?longitude="+position.coords.longitude+"&latitude="+position.coords.latitude+"&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true",show:true})
        },
        (error) => alert("Internal error: "+error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    };
  goTo = (screen) => {
    this.props.navigation.navigate(screen);
  };
  render() {
    return (
      <View>
        <ImageBackground
          source={require('../assets/bg.jpg')}
         style={{ height: '100%', width: '100%'}}>
          <Header
            backgroundColor={'#c1c1c14f'}
            centerComponent={{
              text: 'Stellar',
              style: { color: '#fff', fontSize: 20 },
            }}
          />
          <Text style={styles.title}>Star Map</Text>
          {this.state.show ? (
            <WebView source={{ uri: this.state.uri }} scalesPageToFit />
          ) : (
            <Text style={styles.title}>Loading...</Text>
          )}
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
  }
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: 30,
    margin: 20,
    color: '#ffffff',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#c1c1c19f',
    width: '80%',
    paddingTop: 10,
    paddingBottom: 10,
    margin: 20,
    borderRadius: 10,
  },
  btext: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#000000ff',
  },
});
