import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { handleErrors, getHotels } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'

class Hotels extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hotels: null
    }
  }

  componentDidMount() {
    const { flash } = this.props
    const id = this.props.match.params.id

    getHotels(this.props.user)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ hotels: data.hotels }))
      // .then(() => flash(messages.getHotelsSuccess, 'flash-success'))
      .catch(() => flash(messages.getHotelsFailure, 'flash-error'))
  }

  render () {
    const id = this.props.match.params.id
    if (!this.state.hotels) {
      return <p>Loading...</p>
    }

    const hotels = this.state.hotels.map(hotel => (
      <li key={hotel.id}>
        <Link to={`/hotels/${hotel.id}`}>{hotel.name}, {hotel.location}</Link>
      </li>
    ))

    return (
      <React.Fragment>
        <div className='hotel-list'>
          <h4>Hotels: </h4>
          <ul>
            {hotels}
          </ul>
          <button>
            <Link to={'/add-hotel'}>Add Hotel</Link>
          </button>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Hotels)
