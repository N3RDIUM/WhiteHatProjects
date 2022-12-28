import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default class Home extends Component {
  goTo = (screen) => {
    this.props.navigation.navigate(screen);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/bg.jpg')}
          style={{ height: '100%', width: '100%'}}>
          <Text style={styles.title}>Stellar</Text>
          <TouchableOpacity
            style={styles.buttontop}
            onPress={() => {
              this.goTo('dailypic');
            }}>
            <Text style={styles.btext}>Daily Pics</Text>
            <Image style = {styles.icon} source={require('../assets/daily_pictures.png')}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonmid}
            onPress={() => {
              this.goTo('starmap');
            }}>
            <Text style={styles.btext}>Star Map</Text>
            <Image style = {styles.icon} source={require('../assets/star_map.png')}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonend}
            onPress={() => {
              this.goTo('spacecraft');
            }}>
            <Text style={styles.btext}>SpaceCraft</Text>
            <Image style = {styles.icon} source={require('../assets/space_crafts.png')}/>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: 40,
    margin: 20,
    color: '#ffffff',
  },
  buttontop: {
    alignSelf: 'center',
    backgroundColor: '#c1c1c19f',
    width: '80%',
    paddingTop: 10,
    paddingBottom: 10,
    margin: 20,
    marginTop: windowHeight / 5,
    borderRadius:10,
    alignItems:'center'
  },
  buttonmid: {
    alignSelf: 'center',
    backgroundColor: '#c1c1c19f',
    width: '80%',
    paddingTop: 10,
    paddingBottom: 10,
    margin: 20,
    borderRadius:10,
    alignItems:'center',
  },
  buttonend: {
    alignSelf: 'center',
    backgroundColor: '#c1c1c19f',
    width: '80%',
    paddingTop: 10,
    paddingBottom: 10,
    margin: 20,
    borderRadius:10,
    alignItems:'center'
  },
  btext: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#000000ff',
  },
  icon:{
    height:40,
    width:40,
    zIndex:-1,
    alignSelf:'center',
    resizeMode:"contain"
  }
});
