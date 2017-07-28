import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Oreyt welcome to Shrapnl.</Text>
        <Text>Your new piggy bank</Text>
        <Image source={require('./assembly-2.png')} style={{width: 193, height:120, marginTop: 10}}/>
      </View>
    );
  }
}

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
