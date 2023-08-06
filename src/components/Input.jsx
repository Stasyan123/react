import React from "react";

const Input = (props) => {
  return (
    <input
      disabled={props.disabled}
      checked={props.checked}
      type={props.type ?? "text"}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    >
      {props.text ?? props.children}
    </input>
  );
};

export default Input;
