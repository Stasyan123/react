import { useContext, useState } from "react";

import Button from "../components/Button";
import Form from "../components/Form";
import { ModalContext } from "../components/Modal";
import Input from "../components/Input";
import ModalDialog from "../components/ModalDialog";
import TableRow from "../components/TableRow";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [nameFilter, setNameFilter] = useState("");

  const { isHide, showModal } = useContext(ModalContext);

  const updateFilter = (e) => {
    setNameFilter(e.target.value)
  }

  return (
    <div>
      <div className="filters">
        <Button onClick={showModal}>Add todo</Button>
        <Input onChange={updateFilter} type="text" placeholder="search" />
      </div>

      <div className="content">
        <table>
          <colgroup>
            <col style={{ width: "10%" }} />
            <col style={{ width: "35%" }} />
            <col style={{ width: "45%" }} />
            <col style={{ width: "10%" }} />
          </colgroup>

          <tbody>
            {todos &&
              todos
              .filter((todo) => todo.name.toLowerCase().includes(nameFilter.toLowerCase()))
              .map((todo) => <TableRow todo={todo} setTodos={setTodos} setCurrentTodo={setCurrentTodo} key={todo.id} />)}
          </tbody>
        </table>
      </div>

      {!isHide && (
        <ModalDialog>
          <Form  setCurrentTodo={setCurrentTodo} currentTodo={currentTodo} setTodos={setTodos}></Form>
        </ModalDialog>
      )}
    </div>
  );
};

export default Home;
