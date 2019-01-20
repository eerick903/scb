import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Dimensions } from 'react-native'
import { Container, Content, Card, CardItem, Text } from 'native-base'
import { Image } from 'react-native'
import { changeScene } from 'data/scene/actions'
import AutoHeightImage from 'react-native-auto-height-image'


class Photo extends React.Component {
  constructor(props) {
    super(props)

    props.changeScene({scene: 'photo', title: props.photo.title})
  }

  render() {
    const { photo } = this.props
    return (
      <Container style={{ flex: 1, flexDirection: 'column' }} >
        <Content padder>
          <Card>
            <CardItem>
              <Text>{photo.title}</Text>
            </CardItem>
            <CardItem cardBody>
              <AutoHeightImage
                width={Dimensions.get('window').width - 24}
                source={{uri: photo.url}}
              />
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeScene
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo)