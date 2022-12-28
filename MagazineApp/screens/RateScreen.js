import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import RateButton from '../components/RateButton';
import db from '../config';

export default class RateScreen extends Component {
  constructor(){
    super()
    this.state={up:0,down:0}
  }
  componentDidMount(){
    this.upvotes = db.ref('upvotes')
    this.downvotes = db.ref('downvotes')
    this.upvoteListener = this.upvotes.on('value',(data)=>{this.up = data})
    this.downvoteListener = this.downvotes.on('value',(data)=>{this.down = data})
  }
  doneFeedbackGood = () => {
    this.feedbackText = 'Thank you for rating my app! \n'+'upvotes: '+(this.state.up+1+'👍')+' '+'downvotes: '+this.state.down
    this.props.navigation.navigate('DoneScreen', {
      text: this.feedbackText
    });
    this.upvotes = db.ref('upvotes')
    this.upvotes.set(this.up.val()+1)
    this.setState({up:this.up.val(),down:this.down.val()})
  };
  doneFeedbackBad = () => {
    this.feedbackText = 'Thank you for rating my app! \n'+'upvotes: '+this.state.up+' '+'downvotes: '+((this.state.down+1+'👎'))
    this.props.navigation.navigate('DoneScreen', {
      text: this.feedbackText
    });
    this.downvotes = db.ref('downvotes')
    this.downvotes.set(this.down.val()+1)
    this.setState({up:this.up.val(),down:this.down.val()})
  };
  render() {
    return (
      <View >
        <AppHeader />
        <Text style={{ alignSelf: 'center', fontSize: 20 }}>
          How would you rate my app?
        </Text>
        <RateButton
          title="👍"
          onPress={() => {
            this.doneFeedbackGood();
          }}
        />
        <RateButton
          title="👎"
          onPress={() => {
            this.doneFeedbackBad();
          }}
        />
      </View>
    );
  }
}
