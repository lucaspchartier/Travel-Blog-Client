import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

import { handleErrors, createHotel } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import HotelForm from './HotelForm'

class AddHotel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      created: false,
      id: null,
      hotel: {
        name: '',
        location: ''
      }
    }
  }

  handleChange = event => {
    const editedHotel = {
      ...this.state.hotel, [event.target.name]: event.target.value
    }
    this.setState({ hotel: editedHotel })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { flash } = this.props
    const id = this.props.match.params.id

    createHotel(this.props.user, this.state.hotel)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ id: data.hotel.id }))
      .then(() => flash(messages.createHotelSuccess, 'flash-success'))
      .catch(() => flash(messages.createHotelFailure, 'flash-error'))
  }


  render () {
    const { id } = this.state
    if (id) {
      return <Redirect to={'/hotels'} />
    }

    const { name, location } = this.state
    return (
      <HotelForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        hotel={this.state.hotel}
      />
    )
  }

}

export default withRouter(AddHotel)
