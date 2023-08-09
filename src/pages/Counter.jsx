import CounterContextProvider from "../components/CounterContextProvider";
import CounterWidget from "../components/CounterWidget";

const Counter = () => {
  

  return (
    <CounterContextProvider>
        <CounterWidget />
    </CounterContextProvider>
  );
};

export default Counter;
