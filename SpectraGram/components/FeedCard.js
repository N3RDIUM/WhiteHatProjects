import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Card extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('readScreen', {
            post: {
              image: this.props.feedItem.image,
              title: this.props.feedItem.title,
              writer: this.props.feedItem.writer,
              content: this.props.feedItem.content,
            },
          });
        }}>
        <View style={styles.container}>
          <ImageBackground
            source={require('../assets/feedcard-bg.jpg')}
            style={{ borderRadius: RFValue(10) }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignSelf: 'center',
                backgroundColor: '#3333ff',
                width: '100%',
                margin: RFValue(10),
              }}>
              <Image
                source={require('../assets/profile_img.png')}
                style={{
                  width: RFValue(50),
                  height: RFValue(50),
                  resizeMode: 'contain',
                  marginLeft: '15%',
                }}
              />
              <Text
                style={{
                  fontFamily: 'Bubblegum-Sans',
                  fontSize: RFValue(26),
                  marginTop: RFValue(50) / 2 - RFValue(26) / 2 + RFValue(5),
                  margin: RFValue(10),
                  color: 'white',
                }}>
                {this.props.feedItem.writer}
              </Text>
            </View>
            <Image
              source={this.props.feedItem.image}
              style={{
                width: '100%',
                height: RFValue(200),
                resizeMode: 'cover',
              }}
            />
            <Text style={styles.titletext}>{this.props.feedItem.title}</Text>
            <Text style={styles.contentText}>
              {this.props.feedItem.content}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignSelf: 'center',
                width: '100%',
                margin: RFValue(10),
              }}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>❤ LIKE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>✍ Comment</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: RFValue(20),
    borderRadius: RFValue(10),
  },
  titletext: {
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
    fontSize: RFValue(35),
    alignSelf: 'center',
  },
  contentText: {
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
    fontSize: RFValue(25),
    margin: RFValue(10),
  },
  button: {
    width: RFValue(130),
    backgroundColor: '#3333ff66',
    margin: 15,
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Bubblegum-Sans',
    fontSize: 20,
    padding: 5,
  },
});
