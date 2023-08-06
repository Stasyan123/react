import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick ? props.onClick : null} type={props.type ?? "button"} className={`btn ${props.class ?? ""}`}>
        {props.text ?? props.children}
    </button>
  )
}

export default Button