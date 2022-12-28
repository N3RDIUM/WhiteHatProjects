import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import db from './config';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      teamsRank: [],
      question: '',
    };
  }
  //new function
  showTeamRanks = () => {
    var teams = [];
    var teamref = db.ref('teams/');
    teamref.on('value', (data) => {
      var teamList = data.val();
      for (var team in teamList) {
        if (teamList[team]['isButtonPressed'] === true) {
          teamList[team]['teamName'] = team;
          teams.push(teamList[team]);
        }
      }
      teams.sort(function (team1, team2) {
        return team1.timestamp - team2.timestamp;
      });
      this.setState({ teamsRank: teams });
      teams = [];
    });
    setInterval(this.updateQuestion());
  };
  updateQuestion() {
    var qref = db.ref('/');
    db.ref('canAnswer').set(true)
    db.ref('question').set(this.state.question)
  }
  resetDb = () => {
    var restDatabase = db.ref('teams/').set({
      red: {
        enabled: true,
        isButtonPressed: false,
        timeStamp: 0,
      },
      green: {
        enabled: true,
        isButtonPressed: false,
        timeStamp: 0,
      },
      blue: {
        enabled: true,
        isButtonPressed: false,
        timeStamp: 0,
      },
      yellow: {
        enabled: true,
        isButtonPressed: false,
        timeStamp: 0,
      },
    });
    var questionReset = db.ref('/').update({
      question: 'Your teacher is asking a question..',
    });
    var canAnsReset = db.ref('canAnswer').set(false)
    this.setState({ teamsRank: [], question: '' });
  };

  componentDidMount() {
    this.showTeamRanks();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="type your question here!"
          onChangeText={(data) => {
            this.setState({ question: data });
          }}
        />
        <Button title="ask" onPress={()=>{this.updateQuestion()}} />
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {this.state.teamsRank.map((team) => (
            <View
              style={{
                width: 140,
                height: 55,
                borderWidth: 2,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: team.teamName,
              }}>
              <Text>{team.teamName.toUpperCase()}</Text>
            </View>
          ))}
        </View>
        <Button
          title="RESET"
          style={{ width: 100, height: 100 }}
          onPress={this.resetDb}
        />
      </View>
    );
  }
}
