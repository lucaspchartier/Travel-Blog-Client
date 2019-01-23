import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link, Redirect } from 'react-router-dom'

import { handleErrors, showHotel, deleteHotel } from '../api'
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
    const id = this.props.match.params.id

    showHotel(this.props.user, id)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ hotel: data.hotel }))
      .catch(() => this.setState({ notFound: true }))
  }

  destroy = () => {
    const options = {
      method: 'DELETE'
    }

    const id = this.props.match.params.id

    deleteHotel(this.props.user, id)
      .then(res => res.ok ? res : new Error())
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render () {
    const { hotel, notFound, deleted } = this.state

    if (notFound) {
      return <Redirect to="/" />
    } else if (!hotel) {
      return <p>Loading...</p>
    } else if (deleted) {
      return (
        <Redirect to={{
          pathname: '/',
          state: { message: 'You deleted your hotel!' }
        }} />
      )
    }

    const { id, name, location } = hotel
    return (
      <React.Fragment>
        <p>{this.state.hotel.name}</p>
        <p>{this.state.hotel.location}</p>
        <button>
          <Link to={`/hotels/${id}/edit`}>Edit</Link>
        </button>
        <button onClick={this.destroy}>Delete</button>
      </React.Fragment>
    )
  }
}

export default withRouter(Hotel)
