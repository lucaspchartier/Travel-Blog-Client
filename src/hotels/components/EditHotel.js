import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

import { handleErrors, updateHotel } from '../api'
import apiUrl from './apiUrl'
import HotelForm from './HotelForm'

class HotelEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      updated: false,
      hotel: {
        name: '',
        location: ''
      }
    }
  }

  componentDidMount () {
    const id = this.props.match.params.id

    updateHotel(this.props.user, this.state.hotel)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ hotel: data.hotel }))
      .catch(() => this.setState({ notFound: true }))
  }

  handleChange = event => {
    const editedHotel = Object.assign(this.state, updatedField)
    this.setState({ hotel: editedHotel })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log('submitted form')

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hotel: this.state.hotel
      })
    }

    const id = this.props.match.params.id

    updateHotel(this.props.user, this.state.hotel)
      .then(res => res.ok ? res : new Error())
      .then(data => this.setState({ updated: true }))
      .catch(console.error)
  }

  render () {
    const id = this.props.match.params.id
    if (this.state.updated) {
      return <Redirect to={`/hotels/${id}`} />
    }

    const { name, location } = this.state.hotel
    return (
      <HotelForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        hotel={this.state.hotel}
      />
    )
  }

}

export default withRouter(HotelEdit)