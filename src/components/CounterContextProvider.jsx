import { createContext, useReducer } from "react";
import { reducer } from "../scripts/reducer";
import { counterActions } from "../scripts/actions";

export const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => {
  const [counter, dispatch] = useReducer(reducer, 0, (counter) => counter + 1); // просто интересно попробовать так инициализировать, особого смысла нет

  const incrementCounter = () => {
    dispatch({ type: counterActions.increment });
  };

  const decrementCounter = () => {
    dispatch({ type: counterActions.decrement });
  };

  const customIncrementCounter = (value) => {
    dispatch({ type: counterActions.customIncrement, value: value });
  };

  const resetCounter = () => {
    dispatch({ type: counterActions.reset });
  };

  return (
    <CounterContext.Provider
      value={{
        counter: counter,
        incrementCounter: incrementCounter,
        decrementCounter: decrementCounter,
        customIncrementCounter: customIncrementCounter,
        resetCounter: resetCounter,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
