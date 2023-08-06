import React, { useContext, useState } from "react";

import Button from "./Button";
import { ModalContext } from "./Modal";
import uuid from "react-uuid";

const Form = ({ currentTodo, setTodos, setCurrentTodo }) => {
  const { hideModal } = useContext(ModalContext);

  const [name, setName] = useState(currentTodo ? currentTodo.name : "");
  const [description, setDescription] = useState(currentTodo ? currentTodo.description : "");

  const onNameChange = (e) => {
    setName(e.target.value)
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value)
  };

  const updateTodos = (e) => {
    e.preventDefault();

    if (!name) {
        return
    }

    if (currentTodo) {
        const editedTodo = {
            ...currentTodo,
            name: name,
            description: description
        }
    
        setTodos((prevTodos) => (prevTodos.map((t) => (
            t.id === editedTodo.id ? editedTodo : t
        ))))
        
        setCurrentTodo(null)
        hideModal()
        return
    }

    const newTodo = {
        id: uuid(),
        name: name,
        description: description,
        isDone: false
    }

    setTodos((prevTodos) => [...prevTodos, newTodo])
    hideModal()
  };

  return (
    <form>
      <div className="row">
        <input value={name} placeholder="Name" onChange={onNameChange}></input>
      </div>
      <div className="row">
        <input value={description} placeholder="Description" onChange={onDescriptionChange}></input>
      </div>

      <div className="buttons">
        <Button onClick={updateTodos} type="submit">
          Submit
        </Button>
        <Button onClick={hideModal}>Back</Button>
      </div>
    </form>
  );
};

export default Form;
