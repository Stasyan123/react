import React from 'react'

export const Label = (props) => {
  return (
    <label for={props.for}>{props.text}</label>
  )
}
