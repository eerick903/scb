import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Content, List, ListItem, Text, Icon, Right, Left, CheckBox } from 'native-base'
import { Actions } from 'react-native-router-flux'
import { fetchTodos, toggleTodo } from 'data/todos/actions'
import { changeScene } from 'data/scene/actions'
import R from 'ramda'

class Todos extends React.Component {
  constructor(props) {
    super(props)
    props.changeScene({scene: 'todos', title: props.user.name})
  }

  componentDidMount() {
    const { user, todos } = this.props

    if(!todos || todos.length == 0) {
      this.props.fetchTodos(user.id)
    }
  }

  renderTodo = todo => {
    const { id, completed, title, userId } = todo

    return (
      <ListItem key={id} onPress={() => this.props.toggleTodo(userId, id)}>
          <CheckBox checked={completed} onPress={() => this.props.toggleTodo(userId, id)} />
          <Text style={Object.assign({ marginLeft: 10, marginRight: 10 }, completed ? { textDecorationLine: 'line-through' } : {}) }>{title}</Text>
      </ListItem>
    )
  }

  renderTodos = todos => {
    return (
      <List>
        {
          todos.map(this.renderTodo)
        }
      </List>
    )
  }

  render() {
    return (
      <Container style={{ flex: 1, flexDirection: 'column' }}>
        <Content>
          {this.renderTodos(this.props.todos)}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { todos } = state.data

  return {
    todos: R.compose(
      R.values,
      R.prop(ownProps.user.id)
    )(todos) || []
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchTodos,
    toggleTodo,
    changeScene
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)