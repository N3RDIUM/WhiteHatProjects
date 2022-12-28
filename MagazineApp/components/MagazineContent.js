import React, { Component } from 'react';
import axios from 'axios';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';

class MagazineContent extends Component {
  constructor() {
    super();
    this.def = {
      coord: { lon: 'loading...', lat: 'loading...' },
      weather: [
        {
          id: 'loading...',
          main: 'loading...',
          description: 'loading...',
          icon: '',
        },
      ],
      base: 'loading...',
      main: {
        temp: 'loading...',
        feels_like: 'loading...',
        temp_min: 'loading...',
        temp_max: 'loading...',
        pressure: 'loading...',
        humidity: 'loading...',
      },
      visibility: 'loading...',
      wind: { speed: 'loading...', deg: 'loading...', gust: 'loading...' },
      clouds: { all: 'loading...' },
      dt: 'loading...',
      sys: {
        type: 'loading...',
        id: 'loading...',
        country: 'loading...',
        sunrise: 'loading...',
        sunset: 'loading...',
      },
      timezone: 'loading...',
      id: 'loading...',
      name: 'loading...',
      cod: 'loading...',
    };
    this.state = {
      weather: this.def,
      image:
        'https://media0.giphy.com/media/ycfHiJV6WZnQDFjSWH/giphy.gif?cid=ecf05e47buu8splf1imscpvdovgp6qtmhc1vzf1t24ly3sjs&rid=giphy.gif&ct=g',
    };
  }
  async componentDidMount() {
    var response = await axios.get(
      'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139'
    );
    var response_json = await response.json();
    this.setState({
      weather: response_json,
      image: response_json.weather[0].icon
    });
  }
  render() {
    if (this.props.showWeather != true) {
      return (
        <View style={styles.textContainer}>
          <Text style={styles.text}> {this.props.text} </Text>
          <TouchableOpacity style={styles.button} onPress={this.props.back}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.textContainer}>
          <ImageBackground source={this.state.image} style={styles.image}>
            <Text style={styles.weatherTextTop}>
              {'The weather today is ' +
                this.state.weather.weather[0].description}
            </Text>
            <Text style={styles.weatherText}>
              {'temperature: ' + this.state.weather.main.temp}
            </Text>
            <Text style={styles.weatherText}>
              {'max/min temperature: ' +
                this.state.weather.main.temp_max +
                '/' +
                this.state.weather.main.temp_min}
            </Text>
            <TouchableOpacity style={styles.button} onPress={this.props.back}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'blue',
    marginTop: 50,
    borderRadius: 30,
  },
  text: {
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 100,
  },
  weatherTextTop: {
    color: 'black',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  weatherText: {
    color: 'black',
    padding: 20,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 1,
    marginBottom: 1,
  },
  button: {
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 30,
    alignSelf: 'center',
    backgroundColor: 'turquoise',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'turquoise',
  },
});

export default MagazineContent;
