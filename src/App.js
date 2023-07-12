import './App.css';
import { useState } from 'react';
import Button from './components/Button';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>Hello! Count me: {counter}</h3>
      <div>
        <h5>Arithmetically</h5>
        <Button operation={"-"} multiplier={1} counterFunction={setCounter}>- 1</Button>  
        <Button operation={"+"} multiplier={1} counterFunction={setCounter}>+ 1</Button>
      </div>

      <div>
        <h5>Geometrically</h5>
        <Button operation={"*"} multiplier={2} counterFunction={setCounter}>x2</Button>  
        <Button operation={"*"} multiplier={4} counterFunction={setCounter}>x4</Button>
        <Button operation={"*"} multiplier={8} counterFunction={setCounter}>x8</Button>  
        <Button operation={"*"} multiplier={16} counterFunction={setCounter}>x16</Button>  
      </div>
    </div>
  );
}

export default App;
