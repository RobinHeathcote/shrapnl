import React from 'react';
import { Provider } from 'react-redux'
import { AppRegistry, StyleSheet, Text, TextInput, View, Image, Button, Form, FlatList } from 'react-native';
import { StackNavigator, } from 'react-navigation';
import createReduxStore from './store/createReduxStore'
import Realm from 'realm'
import realm from './store/realm'
import {  Budget, getBudgets } from './store/realm'
import { createBudget } from './budgets/actions'

const reduxStore = createReduxStore()

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
        onPress= {() => navigate('Budget')}
        title= 'Lets add your first budget!'
      />
    </View>
    );
  }
}

class AddBudgetScreen extends React.Component {
  static navigationOptions = {
    title: 'Add your Budget'
  };
    _onSubmit (e) {
    if (e && e.nativeEvent.text.trim().length > 0) {
      createBudget(e.nativeEvent.text.trim())
    }
  }
  constructor(props) {
    super(props);
    this.state = ({textInput: 'Name your budget here'});
  }
  render () {
    const budgets = realm.objects('Budget');
    const {dataSource, deleteBudget} = this.props
    return (
      <View style={styles.budgets}>
        <TextInput
          blurOnSubmit={false}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onSubmitEditing={(e) => this._onSubmit(e)}
          value={this.state.textInput}
          onChange={(event) => this.setState({textInput: event.nativeEvent.text})} />
        <FlatList
          data={budgets}
          renderItem={({item}) => <Text>{item.name} amount: {item.amount}</Text>}
        />
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
      <Provider store={reduxStore}>
      <AppNavigation/>
      </Provider>
    );
  }
}
const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Budget: { screen: AddBudgetScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9ffb3',
    alignItems: 'center',
  },
  budgets: {
    backgroundColor: '#d9ffb3',
    flex: 1
  },
  headerText: {
    fontFamily: 'Helvetica',
    fontSize: 40,
    textAlign: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('Shrapnl', () => App);
