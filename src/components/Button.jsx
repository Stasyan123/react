import React from 'react'

const Button = ({operation, multiplier, counterFunction, children}) => {
  function handleClick() {

    counterFunction(prevCounter => {
      if (operation === "+") {
        return prevCounter + multiplier;
      } else if (operation === "-") {
        return prevCounter - multiplier;
      } else if (operation === "*") {
        return prevCounter * multiplier;
      }
      
      return "Wrong operation";
    });
  }

  return (
    <button type="button" onClick={handleClick}>{children}</button>
  )
}

export default Button

