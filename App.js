import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { StackNavigator, } from 'react-navigation';



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Oreyt welcome to Shrapnl.</Text>
        <Text>Your new piggy bank</Text>
        <Image source={require('./assembly-2.png')} style={{width: 193, height:120, marginTop: 10}}/>
        <Button
          onPress= {() => navigate('Profile')}
          title= 'Go to profile'
        />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile'
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assembly-2.png')} style={{width: 193, height:120, marginTop: 10}}/>
        <Text style={styles.headerText}>Hello so and so</Text>
      </View>
    )
  }
}

const AppNavigation = () => (
  <AppNavigator  />
);

export default class App extends React.Component {
  render() {
    return (
        <AppNavigation/>
    );
  }
}
const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16ce35',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'Helvetica',
    fontSize: 40,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
