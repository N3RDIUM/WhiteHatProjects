import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import MagazineButton from '../components/MagazineButton';

console.log(localStorage.getItem("someone"))

export default class MainScreen extends Component {
  goToContent = (content, weather) => {
    this.props.navigation.navigate('DoneScreen', {
      text: content,
      showWeather: weather,
    });
  };
  goToFeedback = () => {
    this.props.navigation.navigate('RateScreen');
  };
  selectJokeRandom() {
    this.items = [
      'What is fast, loud and crunchy?\nA rocket chip!',
      'Why did the teddy bear say no to dessert?\nBecause she was stuffed.',
      'What did the microwave say to the other microwave?\nIs it just me? Or is it really hot in here?',
      'When you look for something, why is it always in the last place you look?\nBecause when you find it, you stop looking.',
      "How to stop a bull from charging?\nremove it's Charger cable!",
    ];
    this.item = this.items[Math.floor(Math.random() * this.items.length)];
    return this.item;
  }
  selectHoroscopeRandom() {
    this.items = [
      'You are lucky today!👍',
      'You will have problems with your snack editor today.☹',
      'You will not get to watch TV today.☹',
      'You will get a treasure today!👍',
      'You Have bad luck today!☹',
    ];
    this.item = this.items[Math.floor(Math.random() * this.items.length)];
    return this.item;
  }
  weather() {
    this.items = [
      'It will rain today.🌧',
      'It will be sunny today.🌞',
      'A storm will arrive today.⛈',
      'It will be partly cloudy today.☁',
      'It will snow today.❄',
    ];
    this.item = this.items[Math.floor(Math.random() * this.items.length)];
    return this.item;
  }
  selectNewsRandom() {
    this.items = [
      'Covid is increasing,stay in your homes!',
      'Lockdown due to Covid tomorrow.',
      'Tree falls because of strong wind: a car was almost flattened,but survived.',
      'Gold prices rise because of Corona.',
      'AQI in Delhi reaches a record!',
    ];
    this.item = this.items[Math.floor(Math.random() * this.items.length)];
    return this.item;
  }
  render() {
    return (
      <View>
        <AppHeader />
        <MagazineButton
          title="Joke"
          onPress={() => {
            this.goToContent(this.selectJokeRandom(), false);
          }}
        />
        <MagazineButton
          title="Horoscope"
          onPress={() => {
            this.goToContent(this.selectHoroscopeRandom(), false);
          }}
        />
        <MagazineButton
          title="Weather"
          onPress={() => {
            this.goToContent(NaN, true);
          }}
        />
        <MagazineButton
          title="Top News"
          onPress={() => {
            this.goToContent(this.selectNewsRandom(), false);
          }}
        />
        <MagazineButton
          title="Rate this app"
          onPress={() => {
            this.goToFeedback();
          }}
        />
        <Text style={{ alignSelf: 'center', fontSize: 12, marginTop: 50 }}>
          NOTE: press the buttons multiple times and see what you get!
        </Text>
      </View>
    );
  }
}
