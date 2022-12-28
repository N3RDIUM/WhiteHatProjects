import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';
import { Header } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class WriteScreen extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      authorname: '',
      content: '',
    };
  }
  submitStory = async () => {
    if (
      !this.state.title == '' &&
      !this.state.authorname == '' &&
      !this.state.content == ''
    ) {
      db.collection('stories').add({
        storyAuthor: this.state.authorname,
        storyName: this.state.title,
        content: this.state.content,
        visible: true,
      });
      ToastAndroid.show(
        'Story Submitted!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      this.setState({
        title: '',
        authorname: '',
        content: '',
      });
    } else {
      alert('Please write a story to continue.');
    }
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <View>
          <Header
            centerComponent={{
              text: 'StoryHub',
              style: { fontSize: 30, color: '#FFFFFF', alignSelf: 'center' },
            }}
            backgroundImage={
              'https://64.media.tumblr.com/63b88a7dcbddf63da4ca955140ace4c8/tumblr_pya8ppi0q61uzwgsuo1_400.gifv'
            }
          />
          <View style={styles.container}>
            <Text style={styles.headText}>
              Write an interesting story for the world to read.
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Story Title"
              value={this.state.title}
              onChangeText={(data) => {
                this.setState({ title: data });
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Author's name"
              value={this.state.authorname}
              onChangeText={(data) => {
                this.setState({ authorname: data });
              }}
            />
            <TextInput
              style={styles.content}
              placeholder="Story Content"
              value={this.state.content}
              multiline={true}
              scrollEnabled={true}
              onChangeText={(data) => {
                this.setState({ content: data });
              }}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={async () => {
                this.submitStory();
              }}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headText: {
    alignSelf: 'center',
    color: '#a1d2c5',
    fontWeight: 'bold',
    fontSize: 14.8,
  },
  input: {
    width: '80%',
    height: 30,
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  content: {
    width: '80%',
    height: 275,
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#FFCFCC',
    padding: 8,
  },
  submitText: {
    color: '#000000',
  },
});
