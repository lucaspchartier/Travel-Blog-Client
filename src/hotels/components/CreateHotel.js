import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'

class CreateHotel extends Component {
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
    console.log('submitted form')

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hotel: this.state.hotel
      })
    }

    const id = this.props.match.params.id

    fetch(`${apiUrl}/hotels/`, options)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ id: data.hotel.id }))
      .catch(console.error)
  }


  render () {
    const { id } = this.state
    if (id) {
      return <Redirect to={`/hotels/${id}`} />
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

export default CreateHotel
