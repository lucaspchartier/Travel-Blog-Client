const apiUrl = 'http://localhost:4741'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const createHotel = (user, hotel) => {
  return fetch(apiUrl + '/hotels', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      hotel: {
        name: hotel.name,
        location: hotel.location
      }
    })
  })
}

export const getHotels = user => {
  return fetch(apiUrl + '/hotels', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}

export const showHotel = user => {
  return fetch(apiUrl + `/hotels/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}

export const updateHotel = (user, data) => {
  return fetch(apiUrl + `/hotels/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      hotel: {
        name: data.hotel.name,
        location: data.hotel.location
      }
    })
  })
}

export const deleteHotel = user => {
  return fetch(apiUrl + `/hotels/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}