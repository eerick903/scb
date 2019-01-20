import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View } from 'react-native'
import { Container, Content, Card, CardItem, Text, Accordion, Button } from 'native-base'
import { changeScene } from 'data/scene/actions'
import { Actions } from 'react-native-router-flux';

class UserDetails extends React.Component {
  constructor(props) {
    super(props)

    props.changeScene({scene: 'userDetails', title: props.user.name})
  }

  renderKeyValue = (key, value) => {
    return (
      <CardItem style={style.cardItem}>
        <Text note>{key}</Text>
        <Text>{value}</Text>
      </CardItem>
    )
  } 

  renderCompany = company => {
    const { name, catchPhrase, bs } = company

    return (
      <CardItem style={style.cardItem}>
        <Text note>Company</Text>
        <Card transparent>
          {this.renderKeyValue('Name', name)}
          {this.renderKeyValue('Catch Phrase', catchPhrase)}
          {this.renderKeyValue('bs', bs)}
        </Card>
      </CardItem>
    )
  }

  renderAddressContent = ({content}) => {
    const { street, suite, city, zipcode, geo } = content
    const { lat, lng } = geo

    return (
      <Card transparent>
        {this.renderKeyValue('Street', street)}
        {this.renderKeyValue('Suite', suite)}
        {this.renderKeyValue('City', city)}
        {this.renderKeyValue('Zipcode', zipcode)}
        {this.renderKeyValue('Geo', `lat: ${lat}, lng: ${lng}`)}
      </Card>
    )
  }

  renderAddress = address => {
    return (
      <CardItem style={style.cardItem}>
        <Accordion
          style={{ width: '100%' }}
          dataArray={[
            {title: 'Address', content: address}
          ]}
          renderContent={this.renderAddressContent}
        />
      </CardItem>
    )
  }

  renderUserDetails = user => {
    const { username, address, phone, website, company } = user

    return (
      <Card>
        {this.renderKeyValue('Username', username)}
        {this.renderKeyValue('Phone', phone)}
        {this.renderCompany(company)}
        {this.renderKeyValue('Website', website)}
        {this.renderAddress(address)}
      </Card>
    )
  }

  render() {
    const { user } = this.props

    return (
      <Container style={{ flex: 1, flexDirection: 'column' }} >
        <Content padder>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button small primary bordered onPress={() => Actions.albums({user})}>
              <Text>Albums</Text>
            </Button>
            <Button small primary bordered onPress={() => Actions.todos({user})}>
              <Text>Todos</Text>
            </Button>
          </View>
          {this.renderUserDetails(user)}
        </Content>
      </Container>
    )
  }
}

const style = {
  cardItem: { flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)