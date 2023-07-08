import React from 'react'
import { Label } from './Label'
import InputText from './InputText'
import List from './List'
import Button from './Button'

const FormLogin = (props) => {
  return (
    <form name={props.name}>
        <div>
            <h5>Registration rules:</h5>
            <List></List>
            <div>
              <Button text="Show more..."></Button>
            </div>
        </div>
        <div>
          <Label for="name" text="Name: "></Label>
          <InputText name="name" placeholder="Type your name"></InputText>
        </div>
        
        <div>
          <Label for="surname" text="Surname: "></Label>
          <InputText name="surname" placeholder="Type your surname"></InputText>
        </div>
        <div>
          <Label for="email" text="Email: "></Label>
          <InputText name="email" placeholder="Type your email"></InputText>
        </div>
        <div>
          <Button type="submit" text="Next"></Button>
        </div>
    </form>
  )
}

export default FormLogin