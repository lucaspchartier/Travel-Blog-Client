import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { handleErrors, getHotels } from '../api'
import apiUrl from '../../apiConfig'

class Hotels extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hotels: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id

    getHotels(this.props.user)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ hotels: data.hotels }))
      .catch(console.error)
  }

  render () {
    const id = this.props.match.params.id
    if (!this.state.hotels) {
      return <p>Loading...</p>
    }

    const hotels = this.state.hotels.map(hotel => (
      <li key={hotel.id}>
        <Link to={`/hotels/${hotel.id}`}>{hotel.name}</Link>
      </li>
    ))

    return (
      <React.Fragment>
        <h4>Hotels: </h4>
        <ul>
          {hotels}
        </ul>
        <button>
          <Link to={'/add-hotel'}>Create</Link>
        </button>
      </React.Fragment>
    )
  }
}

export default withRouter(Hotels)
