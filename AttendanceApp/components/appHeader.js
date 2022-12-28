import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

const image = {
  uri:
    'https://thumbs.gfycat.com/DemandingSnarlingGentoopenguin-size_restricted.gif',
};

class AppHeader extends Component {
  render() {
    return (
      <View>
        <ImageBackground source={image} style={styles.container}>
          <Text style={styles.text}>Attendance</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  text: {
    color: '#FFFFFF',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppHeader;
