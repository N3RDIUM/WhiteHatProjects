import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
} from 'react-native';
import firebase from 'firebase';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  login = async (email, password) => {
    if (email && password) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (response) {
          this.props.navigation.navigate('Tabs');
          alert('login was successful!');
        }
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert('User does not exist.');
            break;
          case 'auth/invalid-email':
            alert('Incorrect email or password.');
            break;
        }
      }
    } else {
      alert('Enter email and password.');
    }
  };
  render() {
    return (
      <KeyboardAvoidingView style={{ alignItems: 'center', marginTop: 20 }}>
        <Image source={'https://media2.giphy.com/media/S3KhNnHajzZ4voJKYP/giphy.gif'} style={{width:200,height:280}}/>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text}>username: </Text>
          <TextInput
            style={styles.input}
            placeholder="abc@example.com"
            placeholderTextColor="#Ff0000"
            keyboardType="email-adress"
            onChangeText={(text) => {
              this.setState({ email: text });
            }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text}>password: </Text>
          <TextInput
            style={styles.input}
            placeholder="type your password"
            placeholderTextColor="#Ff0000"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.login(this.state.email, this.state.password);
          }}>
          <Text style={styles.text}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{this.props.navigation.navigate('SignupScreen')}}>
          <Text style={styles.text}>Sign up instead</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    alignSelf: 'center',
    width: 200,
    height: 40,
    borderWidth: 1.5,
    fontSize: 15,
    fontWeight: 'bold',
    margin: 20,
  },
  text: {
    fontSize: 18,
    alignSelf: 'center',
  },
  button: {
    height: 40,
    width: '40%',
    backgroundColor: '#c10cc1',
    alignSelf: 'center',
    margin:20
  },
});
