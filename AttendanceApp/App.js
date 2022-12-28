import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import RestartPackage from 'react-native-restart';
import AppHeader from './components/appHeader';
import database from './config';
import * as Updates from 'expo-updates';

//note: use on phone for better experience!

const studentImage = {
  uri:
    'https://64.media.tumblr.com/3614deac85fc805abf6f39d0be278714/tumblr_orf486SAlV1uzwgsuo1_400.gif',
};

export default class App extends Component {
  constructor() {
    super();
    this.state = { students: {}, edit: true };
    this.names = [];
    this.clock = 0;
  }
  async componentDidMount() {
    await this.loadData();
    this.interval = setInterval(() => {
      this.loadData();
    }, 10);
  }
  loadData() {
    this.ref = database.ref('students/');
    this.ref.on('value', (data) => {
      this.students = data.val();
      this.setState({ students: this.students });
      if (this.clock == 0) {
        for (var i in this.students) {
          this.names.push(this.students[i].name);
        }
      }
      this.clock = 1;
    });
    //console.log(this.names);
  }
  addStudent(name) {
    if (!name == '') {
      this.name = name;
      this.ref.update({
        [name]: { name: name, present: false },
      });
    }
    this.names.push(name)
  }
  setPresent(name) {
    this.ref.child(name).set({
      name: name,
      present: true,
    });
  }
  setAbsent(name) {
    this.ref.child(name).set({
      name: name,
      present: false,
    });
  }
  getPresent(name) {
    if (this.state.students[name].present == true) {
      return ': Present';
    } else {
      return ': Absent';
    }
  }
  deleteUser(name) {
    if (!name == '') {
      this.ref.child(name).remove();
      this.names.pop(name)
      //this.reloadApp();
    }
  }
  render() {
    return (
      <View>
        <AppHeader />
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here add someone!"
          onChangeText={(text) => {
            this.state.newPersonText = text;
          }}
        />
        <Button
          title="add"
          onPress={() => {
            this.addStudent(this.state.newPersonText);
          }}
        />
        <ScrollView>
          {this.names.map((data) => (
            <ImageBackground source={studentImage} style={styles.textHolder}>
              <Text style={styles.text}>{data + this.getPresent(data)}</Text>
              <TouchableOpacity style={styles.studentButton}>
                <Text
                  style={styles.studentText}
                  onPress={() => {
                    this.setPresent(data);
                  }}>
                  Present
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.studentButton}>
                <Text
                  style={styles.studentText}
                  onPress={() => {
                    this.setAbsent(data);
                  }}>
                  Absent
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.studentButton}>
                <Text
                  style={styles.studentText}
                  onPress={() => {
                    this.deleteUser(data);
                  }}>
                  Delete
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          ))}
           <ImageBackground source={studentImage} style={styles.textHolder}>
              <Text style={styles.text}>the end</Text>
              <TouchableOpacity style={styles.studentButton}>
              </TouchableOpacity>
              <TouchableOpacity style={styles.studentButton}>
              </TouchableOpacity>
              <TouchableOpacity style={styles.studentButton}>
              </TouchableOpacity>
            </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textHolder: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    height: 140,
  },
  text: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 20,
  },
  studentButton: {
    height: 40,
  },
  studentText: {
    padding: 10,
    alignSelf: 'center',
  },
});
