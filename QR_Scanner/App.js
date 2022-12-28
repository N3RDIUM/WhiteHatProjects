import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      scanDone: false,
      hasCameraPermission: null,
      scanData: '',
      buttonState: 'normal',
    };
  }
  getPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
      buttonState: 'clicked',
      scanDone: false,
    });
  };
  handleScan = async ({ type, data }) => {
    this.setState({
      scanData: data,
      buttonState: 'normal',
      scanDone: true,
    });
  };
  getData() {
    const hasCameraPermission = this.state.hasCameraPermission;
    if (hasCameraPermission === true) {
      return this.state.scanData;
    } else {
      return 'request camera permission';
    }
  }
  render() {
    const scanDone = this.state.scanDone;
    const hasCameraPermission = this.state.hasCameraPermission;
    const buttonState = this.state.buttonState;
    if (buttonState === 'clicked' && hasCameraPermission) {
      return (
        <BarCodeScanner
          onBarCodeScanned={scanDone ? undefined : this.handleScan}
          style={StyleSheet.absoluteFillObject}
        />
      );
    } else if (buttonState === 'normal') {
      return (
        <View style={styles.container}>
          <ImageBackground
            style={{}}
            source={{
              uri:
                'https://img.gadgethacks.com/img/34/29/63657656370996/0/13-qr-code-scanners-wont-send-you-malicious-webpages-your-iphone.1280x600.jpg',
            }}>
            <Text style={{color:'#FFFF6F',margin:50}}>{this.getData()}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.getPermission();
              }}>
              <Text style={styles.text}>Scan QR code</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    width: '40%',
    alignSelf: 'center',
    padding: 15,
    margin: 15,
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 15,
  },
});
