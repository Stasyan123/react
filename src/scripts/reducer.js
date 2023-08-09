export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
        return state + 1;
    case "decrement":
        return state - 1;
    case "customIncrement":
        return state + Number(action.value);
    case 'reset': 
        return 0;
    default:
      return state;
  }
};
