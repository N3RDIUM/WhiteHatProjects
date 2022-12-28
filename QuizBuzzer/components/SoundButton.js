import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import db from '../config';
import firebase from 'firebase';

class SoundButton extends React.Component {
  constructor(){
    super()
    this.state={data:{},question:'Your teacher is asking a question..'}
  }
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  };
  componentDidMount(){
    var currentRef = db.ref('/')
    currentRef.on('value',(data)=>{
      this.setState({data:data})
    })
    var questionRef = db.ref('question')
    questionRef.on('value',(data)=>{
      this.setState({question:data.val()})
      console.log(data)
    })
  }
  isButtonPressed(buttonColor) {
    //var time = new Date().getTime()
    var thisTeam = db.ref('teams/' + buttonColor + '/');
    var allVals = [];
    thisTeam.update({
      isButtonPressed: true,
      timeStamp: firebase.database.ServerValue.TIMESTAMP,
    });
  }
  getQuestion(){
      return this.state.question
  }
  render() {
    return (
      <View>
        <Text>{'Question: '+this.getQuestion()}</Text>
        <TouchableOpacity
          disabled={this.state.data.canAnswer}
          style={[styles.button, { backgroundColor: this.props.color }]}
          onPress={() => {
            var buttonColor = this.props.color;
            this.isButtonPressed(buttonColor);
            this.playSound();
          }}>
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    marginLeft: 80,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SoundButton;
