import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default class DashboardScreen extends React.Component {
  componentDidMount() {
    //temporary test for feeds screen
    //this.props.navigation.navigate('home');
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Dashboard!</Text>
        <Text>Coming soon!</Text>
        <Button
          title="go to feed"
          onPress={() => {
            console.log(':( I am going to stop! :(');
            this.props.navigation.navigate('home');
          }}
        />
      </View>
    );
  }
}
