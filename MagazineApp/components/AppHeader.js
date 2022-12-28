import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Digital Magazine App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'blue',
  },
  text: {
    color: '#FFFFFF',
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppHeader;
