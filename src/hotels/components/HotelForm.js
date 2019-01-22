import React from 'react'

const HotelForm = ({ handleChange, handleSubmit, hotel }) => (
  <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input
      name="name"
      placeholder="Name of Hotel"
      value={hotel.name}
      onChange={handleChange}
    />

    <label>Location</label>
    <input
      name="location"
      placeholder="Hotel Location"
      value={hotel.location}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
)

export default HotelForm
