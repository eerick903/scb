import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import AppRoot from './src/index'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView  style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
        <AppRoot />
      </SafeAreaView>
    )
  }
}

