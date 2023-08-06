import React, { useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import { ModalContext } from "./Modal";

const TableRow = ({ todo, setCurrentTodo, setTodos }) => {
  const { showModal } = useContext(ModalContext);

  const deleteTodo = () => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
  };

  const editTodo = () => {
    setCurrentTodo(todo);
    showModal();
  };

const handleCheckTodo = () => {
    setTodos((prevTodos) => (prevTodos.map((t) => {
        if (t.id === todo.id) {
            t.isDone = !t.isDone
        }

        return t;
    })))
}

  return (
    <tr>
      <td>
        <Input onChange={handleCheckTodo}
        checked={todo.isDone} type="checkbox" />
      </td>
      <td>{todo.name}</td>
      <td>{todo.description}</td>
      <td>
        <Button onClick={editTodo}>Edit</Button>
        &nbsp;
        <Button onClick={deleteTodo}>Delete</Button>
      </td>
    </tr>
  );
};

export default TableRow;
