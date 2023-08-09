import React, { useContext, useState } from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import { CounterContext } from "./CounterContextProvider";

const CounterWidget = () => {
  const context = useContext(CounterContext);
  const [customCount, setCustomCount] = useState();

  const changeCustomIncrement = (e) => {
    setCustomCount(e.target.value);
  };

  const setCustomIncrement = () => {
    context.customIncrementCounter(customCount);
  };

  return (
    <>
      <h1>Counter</h1>
      <h4>{context.counter}</h4>
      <div className="row justify-start">
        <Input value={customCount} onChange={changeCustomIncrement} />
        <Button onClick={setCustomIncrement}>+</Button>
      </div>
      <div className="counter-buttons">
        <Button onClick={context.incrementCounter}>Increment</Button>
        <Button onClick={context.decrementCounter}>Decrement</Button>
        <Button onClick={context.resetCounter}>Reset</Button>
      </div>
    </>
  );
};

export default CounterWidget;
