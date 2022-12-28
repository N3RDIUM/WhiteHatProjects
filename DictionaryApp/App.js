import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { Header } from 'react-native-elements';
import axios from 'axios';
import dictionary from './localdb';

export default class App extends Component {
  constructor() {
    super();
    this.state = { input: '', data: ['--enter a word--'] };
  }
  getFromDB = (word) => {
    //console.log(dictionary);
    var got = [];
      got.push(
          'Type: ' +
          dictionary[word].lexicalCategory +
          '\n' +
          'description: ' +
          dictionary[word].definition
      );
    this.setState({data:got})
  };
  getMeaning = async (word) => {
    this.word = word.toLowerCase();
    this.setState({ data: ['loading...'] });
    var got = [];
    var url =
      'https://rupinwhitehatjr.github.io/dictionary/' + this.word + '.json';
    this.getFromDB(word)
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundImage="https://64.media.tumblr.com/89833f1c9d23a1f7baee54dd839b19fe/tumblr_pfecjbRRVW1uzwgsuo1_400.gifv"
          centerComponent={{
            text: 'Dictionary',
            style: { color: '#cffcdc', fontSize: 20 },
          }}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            this.setState({ input: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.oKButton}
          onPress={() => {
            this.getMeaning(this.state.input);
          }}>
          <Text style={styles.oKText}>FIND</Text>
        </TouchableOpacity>
        <ScrollView>
          {this.state.data.map((data) => (
            <Text style={styles.result}>{data}</Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    marginTop: 200,
    width: '90%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    borderColor: 'cyan',
    borderRadius: 5,
    outline: 1,
  },
  oKButton: {
    alignSelf: 'center',
    width: '90%',
    height: 50,
    padding: 5,
    backgroundColor: 'turquoise',
  },
  oKText: {
    textAlign: 'center',
    fontSize: 25,
    color: '#FFFFFF',
  },
  result: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 240 / 2,
    marginBottom: 240 / 2,
    color: 'black',
  },
});
