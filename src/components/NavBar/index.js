import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'
import {Header, Body, Title, Left, Icon, Button} from 'native-base'
import { changeScene } from 'data/scene/actions'
import R from 'ramda'

class NavBar extends Component {
  render() {
    const { scene, scenes } = this.props
    console.log(this.props, Actions.currentScene)
    return (
      <Header>
        {
          (scenes.length > 1) &&
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
        }
        <Body>
          <Title>{R.path([Actions.currentScene, 'title'], scene)}</Title>
        </Body>
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