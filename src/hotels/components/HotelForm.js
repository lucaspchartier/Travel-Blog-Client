import React from 'react'
import './HotelForm.scss'

import messages from '../messages'

const HotelForm = ({ handleChange, handleSubmit, hotel }) => (
  <form className='hotel-form' onSubmit={handleSubmit}>
    <label>Name</label>
    <input
      required
      name="name"
      placeholder="Name of Hotel"
      value={hotel.name}
      onChange={handleChange}
    />

    <label>Location</label>
    <input
      required
      name="location"
      placeholder="Hotel Location"
      value={hotel.location}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
)

export default HotelForm
