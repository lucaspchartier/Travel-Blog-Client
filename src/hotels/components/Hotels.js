import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import './Hotels.scss'

class Hotels extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hotels: []
    }
  }

  async componentDidMount() {
    const response = await axios.get(`${apiUrl}/hotels`)
    this.setState({ hotels: response.data.hotels })
  }

  render() {
    const hotels = this.state.hotels.map(hotel => {
      return (
        <div key={example.id}>
          <Link to={`/hotels/${hotel.id}/show`}>{hotel.text}</Link>
        </div>
      )
    })
    return (
      <div>
        <h1>Hotels</h1>
        {hotels}
        <Link className='create-link' to='/hotels-create'>Add New Hotel</Link>
      </div>
    )
  }
}

export default withRouter(Hotels)
