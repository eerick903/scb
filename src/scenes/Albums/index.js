import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Content, List, ListItem, Text, Icon, Right, Left } from 'native-base'
import { Actions } from 'react-native-router-flux'
import { fetchAlbums } from 'data/albums/actions'
import { changeScene } from 'data/scene/actions'
import R from 'ramda'

class Albums extends React.Component {
  constructor(props) {
    super(props)
    props.changeScene({scene: 'albums', title: props.user.name})
  }

  componentDidMount() {
    this.props.fetchAlbums(this.props.user.id)
  }

  onAlbumPress = album => {
    Actions.album({album})
  }

  renderAlbum = album => {
    return (
      <ListItem key={album.id} onPress={() => this.onAlbumPress(album)}>
        <Left>
          <Text>{album.title}</Text>
        </Left>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    )
  }

  renderAlbums = albums => {
    return (
      <List>
        {
          albums.map(this.renderAlbum)
        }
      </List>
    )
  }

  render() {
    return (
      <Container style={{ flex: 1, flexDirection: 'column' }}>
        <Content>
          {this.renderAlbums(this.props.albums)}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { albums } = state.data

  return {
    albums: R.prop(ownProps.user.id, albums) || []
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchAlbums,
    changeScene
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)