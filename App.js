import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import AppRoot from './src/index'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AppRoot />
      </SafeAreaView>
    )
  }
}

const styles = {
  container: {
    margin: 10    
  }
}
