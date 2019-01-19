import React from 'react'
import { Provider } from 'react-redux'
import { View, Text } from 'react-native'
import { Container } from 'native-base'
import { Router, Scene, Stack } from 'react-native-router-flux'
import store from './store'
import NavBar from 'components/NavBar'
import UserList from './scenes/UserList'
import UserDetails from 'scenes/UserDetails'

class AppRoot extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
      <Container style={{ flex: 1, flexDirection: 'row' }}>
        <Provider store={store}>
          <Router>
            <Scene key='root'>
              <Scene
                navBar={NavBar}
                initial
                key='userList'
                component={UserList}
              />
              <Scene
                navBar={NavBar}
                key='userDetails'
                component={UserDetails}
              />
            </Scene>
          </Router>
        </Provider>
      </Container>
    )
  }
}

export default AppRoot