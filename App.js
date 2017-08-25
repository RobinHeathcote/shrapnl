import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Button, Form } from 'react-native';
import { StackNavigator, } from 'react-navigation';
import realm from './js/store/realm'



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Image source={require('./assembly-2.png')} style={{width: 193, height:120, marginBottom: 100}}/>
        <Text style={styles.headerText}>Oreyt welcome to Shrapnl.</Text>
        <Text>Your new piggy bank</Text>
      <Button
        onPress= {() => navigate('SignUp')}
        title= 'Lets add your first budget!'
      />
    </View>
    );
  }
}

class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Add your Budget'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>New Budget</Text>
        <Text>Time to add your first budget!</Text>
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
  SignUp: { screen: SignUpScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9ffb3',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Helvetica',
    fontSize: 40,
    textAlign: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('Shrapnl', () => App);
