import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link, Redirect } from 'react-router-dom'
import './Hotel.scss'

import { handleErrors, showHotel, deleteHotel } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'

class Hotel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hotel: null,
      notFound: false,
      deleted: false
    }
  }

  componentDidMount () {
    const { flash } = this.props
    const id = this.props.match.params.id

    showHotel(this.props.user, id)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ hotel: data.hotel }))
      .catch(() => flash(messages.showHotelFailure, 'flash-error'))
  }

  destroy = () => {
    const options = {
      method: 'DELETE'
    }

    const { flash } = this.props
    const id = this.props.match.params.id

    deleteHotel(this.props.user, id)
      .then(res => res.ok ? res : new Error())
      .then(() => this.setState({ deleted: true }))
      .then(() => flash(messages.deleteHotelSuccess, 'flash-success'))
      .catch(() => flash(messages.deleteHotelFailure, 'flash-error'))
  }

  render () {
    const { hotel, notFound, deleted } = this.state
    const id = this.props.match.params.id

    if (notFound) {
      return <Redirect to="/" />
    } else if (!hotel) {
      return <p>Loading...</p>
    } else if (deleted) {
      return (
        <Redirect to={{
          pathname: '/hotels',
          state: { message: 'You deleted your hotel!' }
        }} />
      )
    }

    const { name, location } = hotel
    return (
      <React.Fragment>
        <div className='hotel-list'>
          <h2>{this.state.hotel.name}</h2>
          <h2>{this.state.hotel.location}</h2>
          <button>
            <Link to={'/hotels'}>View Hotels</Link>
          </button>
          <button>
            <Link to={`/hotels/${id}/edit`}>Edit Hotel</Link>
          </button>
          <button onClick={this.destroy}>Delete Hotel</button>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Hotel)
