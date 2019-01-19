import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Linking } from 'react-native'
import { Container, Content, Card, CardItem, Text, Icon, Right } from 'native-base'
import { changeScene } from 'data/scene/actions'

/*
 {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496'
          }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets'
        }
      }
*/

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

  renderAddress = address => {
    const { street, suite, city, zipcode, geo } = address
    const { lat, lng } = geo

    return (
      <CardItem style={style.cardItem}>
        <Text note>Address</Text>
        <Card transparent>
          {this.renderKeyValue('Street', street)}
          {this.renderKeyValue('Suite', suite)}
          {this.renderKeyValue('City', city)}
          {this.renderKeyValue('Zipcode', zipcode)}
          {this.renderKeyValue('Geo', `lat: ${lat}, lng: ${lng}`)}
        </Card>
      </CardItem>
    )
  }

  renderUserDetails = user => {
    const { username, address, phone, website, company } = user

    return (
      <Card>
        {this.renderKeyValue('Username', username)}
        {this.renderAddress(address)}
        {this.renderKeyValue('Phone', phone)}
        {this.renderCompany(company)}
        {this.renderKeyValue('Website', website)}
      </Card>
    )
  }

  render() {
    const { user } = this.props

    return (
      <Container style={{ flex: 1, flexDirection: 'column' }}>
        <Content>
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