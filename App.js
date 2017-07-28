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
      <Image source={require('./assembly-2.png')} style={{width: 193, height:120, marginBottom: 100}}/>
        <Text style={styles.headerText}>Oreyt welcome to Shrapnl.</Text>
        <Text>Your new piggy bank</Text>
      <Button
        onPress= {() => navigate('SignUp')}
        title= 'Go to profile'
      />
    </View>
    );
  }
}

class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Sign up</Text>
        <Text>Please enter your details to sign up</Text>
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
    backgroundColor: '#16ce35',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Helvetica',
    fontSize: 40,
    textAlign: 'center',
    alignItems: 'center',
  },
});
