import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import apiUrl from '../../apiConfig'

class Hotels extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hotels: null
    }
  }

  componentDidMount() {
    fetch(`${apiUrl}/hotels`)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ hotels: data.hotels }))
      .catch(console.error)
  }

  render () {
    if (!this.state.hotels) {
      return <p>loading...</p>
    }

    const hotels = this.state.hotels.map(hotel => (
      <li key={hotel.id}>
        <Link to={`/hotels/${hotel.id}`}>{hotel.title}</Link>
      </li>
    ))

    return (
      <React.Fragment>
        <h4>Hotels:</h4>
        <ul>
          {hotels}
        </ul>
      </React.Fragment>
    )
  }
}

export default Hotels
