import React from 'react'

const Button = (props) => {
  let type = props.type === "submit" ? "submit" : "button";
  
  return (
    <button type={type}>{props.text}</button>
  )
}

export default Button

