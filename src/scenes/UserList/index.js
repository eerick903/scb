import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Content, List, ListItem, Text, Icon, Right, Left } from 'native-base'
import { Actions } from 'react-native-router-flux'
import { fetchUsers } from 'data/users/actions'
import { changeScene } from 'data/scene/actions'

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.props.changeScene({scene: 'userList', title: 'User List'})
  }

  componentDidMount() {
    console.log('UserList constructor')

    this.props.fetchUsers()
  }

  onUserPress = user => {
    Actions.userDetails({user})
  }

  renderUser = user => {
    return (
      <ListItem key={user.id} onPress={() => this.onUserPress(user)}>
        <Left>
          <Text>{user.name}</Text>
        </Left>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    )
  }

  renderUserList = users => {
    return (
      <List>
        {
          users.map(this.renderUser)
        }
      </List>
    )
  }

  render() {
    console.log('this.props', this.props)
    return (
      <Container style={{ flex: 1, flexDirection: 'column' }}>
        <Content>
          {this.renderUserList(this.props.users)}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const { users } = state.data

  return {
    users
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchUsers,
    changeScene
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)