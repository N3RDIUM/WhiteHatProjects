import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech';
import Audio from 'expo-av';

//Speech.speak('Hello.');
var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

export default class Ap extends Component {
  constructor() {
    super();
    this.state = { word: 'Hello.' };
  }
  read() {
    Speech.speak(this.state.word);
  }
  getDisplay() {
    if (this.state.word != '') {
      return this.state.word;
    } else {
      return 'ENTER TEXT';
    }
  }
  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: 'Reader',
            style: { fontSize: 30, color: '#FFFFFF' },
          }}
          backgroundImage={
            'https://64.media.tumblr.com/63b88a7dcbddf63da4ca955140ace4c8/tumblr_pya8ppi0q61uzwgsuo1_400.gifv'
          }
        />
        <Text style={styles.text}>{'Text: ' + this.getDisplay()}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(word) => {
            this.setState({ word });
          }}
          value={this.state.text}
          defaultValue={'Hello.'}
          placeholder="ENTER TEXT"
        />
        <Button
          title="click to hear"
          color="turquoise"
          onPress={() => {
            this.state.word === ''
              ? alert('word cant be empty!')
              : format.test(
                  this.state.word
                    .split('.')
                    .join('')
                    .split(' ')
                    .join('')
                    .split(',')
                    .join('')
                ) == true
              ? alert('word cant have special characters!')
              : this.read(this.state.word);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginTop: 150,
    alignSelf: 'center',
    textAlign: 'center',
    width: 300,
    height: 60,
    borderWidth: 4,
    fontSize: 20,
    borderColor: 'turquoise',
    borderRadius: 20,
    marginBottom: 20,
  },
  text: {
    marginTop: 100,
    alignSelf: 'center',
    textAlign: 'center',
    width: 300,
    height: 60,
    fontSize: 20,
    borderColor: 'turquoise',
    borderRadius: 20,
  },
});
