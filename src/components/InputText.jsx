import React from 'react'

const InputText = (props) => {
  return (
      <input type='text' name={props.name} id={(props.id ? props.id : props.name)} placeholder={props.placeholder}></input>
  )
}

export default InputText