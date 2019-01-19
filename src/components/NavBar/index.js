import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'
import {Header, Body, Title, Left, Icon, Button, Right} from 'native-base'
import { changeScene } from 'data/scene/actions'
import R from 'ramda'

class NavBar extends Component {
  render() {
    const { scene, scenes } = this.props
    return (
      <Header>
        <Left>
          {(scenes.length > 1) &&
          <Button transparent onPress={() => Actions.pop()}>
            <Icon name='arrow-back' />
          </Button>
          }
        </Left>
        <Body>
          <Title>{R.path([Actions.currentScene, 'title'], scene)}</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}

const mapStateToProps = state => {
  return {
    scene: state.data.scene
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeScene
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)