import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  FlatList,
  View,
} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import db from '../config';

export default class SearchScreen extends Component {
  constructor() {
    super();
    this.state = {
      searchTerms: '',
      allResults: [],
      searchResults: [],
      last:null
    };
    setInterval(this.doSearch());
  }
  async componentDidMount() {
    await this.initialise();
  }
  async initialise() {
    var all = await this.doSearch();
    this.setState({
      searchResults: [
        { storyName: 'Type in the box to search.', storyAuthor: '--' ,last:null},
      ],
    });
  }
  updateSearch = async (search) => {
    this.setState({ searchTerms: search });
    await this.doSearch();
    if (this.state.searchTerms != '') {
      var temp = [];
      this.state.allResults.map((data) => {
        const hasChar = Object.values(data)
          .join('')
          .includes(this.state.searchTerms);
        if (hasChar) {
          temp.push(data);
          this.setState({last:data})
        }
      });
      this.setState({ searchResults: temp });
    } else {
      this.setState({
        searchResults: [
          { storyName: 'Type in the box to search.', storyAuthor: '--'},
        ],
      });
    }
  };
  doSearch = async () => {
    var results = [];
    const storyref = await db
      .collection('stories')
      .where('visible', '==', true)
      .get();
    storyref.docs.map((doc) => {
      var data = doc.data();
      //console.log(data)
      results.push(data);
      this.setState({last:doc})
    });
    this.setState({ allResults: results });
    return results;
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <SearchBar
          searchIcon={
            <Image
              source={
                'https://png.pngtree.com/element_our/20190601/ourmid/pngtree-gray-cross-icon-free-illustration-image_1338616.jpg'
              }
            />
          }
          clearIcon={
            <Image
              source={
                'https://png.pngtree.com/element_our/20190601/ourmid/pngtree-gray-cross-icon-free-illustration-image_1338616.jpg'
              }
            />
          }
          showLoading={true}
          onChangeText={(text) => {
            this.updateSearch(text);
          }}
          onClear={(text) => {
            this.updateSearch(text);
          }}
          placeholder="Type Here..."
          value={this.state.searchTerms}
        />
        <FlatList
          data={this.state.searchResults}
          renderItem={({ item }) => (
            <ImageBackground
              style={{ margin: 20 }}
              source={
                'https://64.media.tumblr.com/81c9090a9e0849d232c1892ea3e3bf46/43e62aa74b1155e9-cf/s400x600/d954ba6887a1b979ea1df971c8127a0774cb6c7d.gifv'
              }>
              <Text style={styles.title}>{item.storyName}</Text>
              <Text style={styles.subtitle}>
                {'author: ' + item.storyAuthor}
              </Text>
              <Button title="READ" color="#00cd1f" onPress={()=>{this.props.navigation.navigate('ReadScreen',{title:item.storyName,author:item.storyAuthor,content:item.content})}}/>
            </ImageBackground>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: 'white',
    marginLeft: 20,
    margin: 5,
  },
});
