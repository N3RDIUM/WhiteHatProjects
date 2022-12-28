import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class Rad extends Component {
  render() {
    return (
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
        <ScrollView>
          <Text style={styles.title}>
            {this.props.navigation.getParam('title')}
          </Text>
          <Text style={styles.author}>
            {'Written By:'+this.props.navigation.getParam('author')}
          </Text>
          <Text style={styles.content}>
            {this.props.navigation.getParam('content')}
          </Text>
        </ScrollView>
        <Button
          title="BACK"
          onPress={() => {
            this.props.navigation.navigate('Tabs');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
  },
  author: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
  },
  content: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
  },
});
