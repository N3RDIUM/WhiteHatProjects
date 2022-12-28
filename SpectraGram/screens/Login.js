import React, { Component } from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
  Image,
  Button,
} from 'react-native';
import firebase from 'firebase';
import * as Google from 'expo-google-app-auth';
export default class LoadingScreen extends Component {
  componentDidMount() {
    //console.log(firebase.auth().currentUser);
  }
  onSignIn = async (googleUser) => {
    //console.log('_credential');
    var credential = await firebase.auth.GoogleAuthProvider.credential(
      googleUser.idToken,
      googleUser.accessToken
    );

    //console.log('add!fn3wus3r');
    // Sign in with credential from the Google user.
    let result = await firebase
      .auth()
      .signInWithCredential(credential)
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    //console.log(result)
    //console.log('i hello !');
    //console.log('i hello !');
    if (result.additionalUserInfo.isNewUser) {
      //console.log('add!fn3wus3r: confirmed new user!');
      //console.log('i hello !');
      firebase
        .database()
        .ref('users/' + result.user.uid)
        .set({
          gmail: result.user.email,
          profile_picture: result.additionalUserInfo.profile.picture,
          locale: result.additionalUserInfo.profile.locale,
          first_name: result.additionalUserInfo.profile.given_name,
          last_name: result.additionalUserInfo.profile.family_name,
          current_theme: 'dark',
        })
        .then(function (snapshot) {});
    }
  };
  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behaviour: 'web',
        webClientId:
          '124904902500-0pgsubjof54cn9ph494pultksvdscbm9.apps.googleusercontent.com',
        androidClientId:
          '124904902500-4m0b8fhn5mj5h5v21p7nos2mf63m5bmu.apps.googleusercontent.com',
        iosClientId:
          '124904902500-m2gqmi20325ob58kolah5q05u3h4aku2.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      if (result.type === 'success') {
        this.onSignIn(result);
        //console.log(result.accessToken);
        this.props.navigation.navigate('dashboard');
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      //console.log(e.message);
      return { error: true };
    }
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground
          source={require('../assets/feedcard-bg.jpg')}
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/logo.png')}
            style={{ width: 80, height: 80 }}
          />
          <Text style={{ fontSize: 15, margin: 15, color: 'white' }}>
            Login!
          </Text>
          <Button
            title="Sign in with Google"
            onPress={() => this.signInWithGoogleAsync()}></Button>
        </ImageBackground>
      </View>
    );
  }
}
