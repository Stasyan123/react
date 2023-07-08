import React from 'react'

const List = () => {
  let items = ["Verified email", "Real name", "Rate app afterwards"];

  return (
    <ul>
      {items.map((value, key) => (
        <li>{value}</li>
      ))}
    </ul>
  )
}

export default List