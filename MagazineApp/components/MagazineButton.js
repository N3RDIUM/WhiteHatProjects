import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class MagazineButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={[styles.button]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
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

export default MagazineButton;
