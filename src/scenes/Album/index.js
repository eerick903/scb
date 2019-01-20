import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { fetchPhotos } from 'data/photos/actions'
import { changeScene } from 'data/scene/actions'
import R from 'ramda'

class Album extends React.Component {
  constructor(props) {
    super(props)
    props.changeScene({scene: 'album', title: props.album.title})
  }

  componentDidMount() {
    this.props.fetchPhotos(this.props.album.id)
  }

  renderPhoto = photo => {
    const { title, thumbnailUrl, id } = photo

    return (
      <TouchableOpacity key={id} onPress={() => Actions.photo({photo})}>
        <Image source={{uri: thumbnailUrl}} style={{width: 120, height: 120, marginVertical: 2}} />
      </TouchableOpacity>
    )
  }

  renderPhotos = photos => {
    return photos.map(this.renderPhoto)
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          {this.renderPhotos(this.props.photos)}
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { photos } = state.data

  return {
    photos: R.prop(ownProps.album.id, photos) || []
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchPhotos,
    changeScene
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Album)